// Import the prisma client from the adapter pool file
import { prisma, disconnectPrisma } from '../src/lib/prisma';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  console.log('🌱 Starting seed...');

  // Delete data in reverse order to avoid foreign key constraints
  await prisma.fundingRound.deleteMany();
  await prisma.companyRelationship.deleteMany();
  await prisma.newsArticle.deleteMany();
  await prisma.founder.deleteMany();
  await prisma.product.deleteMany();
  await prisma.company.deleteMany();
  await prisma.investor.deleteMany();
  await prisma.tag.deleteMany();

  // Read JSON files
  const dataDir = path.join(__dirname, 'data');
  const tags = JSON.parse(fs.readFileSync(path.join(dataDir, 'tags.json'), 'utf-8'));
  const companies = JSON.parse(fs.readFileSync(path.join(dataDir, 'companies.json'), 'utf-8'));
  const investors = JSON.parse(fs.readFileSync(path.join(dataDir, 'investors.json'), 'utf-8'));
  const founders = JSON.parse(fs.readFileSync(path.join(dataDir, 'founders.json'), 'utf-8'));
  const products = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf-8'));
  const fundingRounds = JSON.parse(fs.readFileSync(path.join(dataDir, 'fundingRounds.json'), 'utf-8'));
  // TODO: add newsArticles and relationships when ready

  // Insert Tags
  console.log(`📌 Inserting ${tags.length} tags...`);
  for (const tag of tags) {
    await prisma.tag.create({ data: tag });
  }

  // Insert Investors
  console.log(`💼 Inserting ${investors.length} investors...`);
  for (const inv of investors) {
    await prisma.investor.create({
      data: {
        name: inv.name,
        slug: inv.slug,
        type: inv.type,
        bio: inv.bio,
        aum: inv.aum,
        portfolioCount: inv.portfolioCount,
        stageFocus: inv.stageFocus,
        sectorFocus: inv.sectorFocus,
        location: inv.location,
        logoUrl: inv.logoUrl,
        avgCheckSize: inv.avgCheckSize,
        fundNumber: inv.fundNumber,
      },
    });
  }

  // Insert Companies
  console.log(`🏢 Inserting ${companies.length} companies...`);
  for (const comp of companies) {
    await prisma.company.create({
      data: {
        name: comp.name,
        slug: comp.slug,
        description: comp.description,
        category: comp.category,
        fundingTotal: comp.fundingTotal,
        employeeCount: comp.employeeCount,
        foundedYear: comp.foundedYear,
        hqCity: comp.hqCity,
        hqCountry: comp.hqCountry,
        logoUrl: comp.logoUrl,
        website: comp.website,
        stage: comp.stage,
        isUnicorn: comp.isUnicorn,
        valuation: comp.valuation,
        growthScore: comp.growthScore,
        lastScrapedAt: comp.lastScrapedAt ? new Date(comp.lastScrapedAt) : null,
        dataConfidenceScore: comp.dataConfidenceScore,
      },
    });
  }

  // Insert Founders
  console.log(`👤 Inserting ${founders.length} founders...`);
  for (const founder of founders) {
    const company = await prisma.company.findUnique({
      where: { slug: founder.companySlug },
    });
    if (!company) {
      console.warn(`⚠️ Company with slug "${founder.companySlug}" not found. Skipping founder ${founder.name}`);
      continue;
    }
    await prisma.founder.create({
      data: {
        name: founder.name,
        slug: founder.slug,
        title: founder.title,
        companyId: company.id,
        bio: founder.bio,
        twitter: founder.twitter,
        linkedin: founder.linkedin,
        location: founder.location,
        photoUrl: founder.photoUrl,
      },
    });
  }

  // Insert Products
  console.log(`📦 Inserting ${products.length} products...`);
  for (const prod of products) {
    const company = await prisma.company.findUnique({
      where: { slug: prod.companySlug },
    });
    if (!company) {
      console.warn(`⚠️ Company with slug "${prod.companySlug}" not found. Skipping product ${prod.name}`);
      continue;
    }
    await prisma.product.create({
      data: {
        name: prod.name,
        slug: prod.slug,
        description: prod.description,
        category: prod.category,
        launchDate: prod.launchDate ? new Date(prod.launchDate) : null,
        upvotes: prod.upvotes,
        websiteUrl: prod.websiteUrl,
        companyId: company.id,
      },
    });
  }

  // Insert Funding Rounds
  console.log(`💰 Inserting ${fundingRounds.length} funding rounds...`);
  for (const fr of fundingRounds) {
    const company = await prisma.company.findUnique({
      where: { slug: fr.companySlug },
    });
    if (!company) {
      console.warn(`⚠️ Company with slug "${fr.companySlug}" not found. Skipping funding round.`);
      continue;
    }
    let leadInvestorId = undefined;
    if (fr.leadInvestorSlug) {
      const investor = await prisma.investor.findUnique({
        where: { slug: fr.leadInvestorSlug },
      });
      if (investor) {
        let leadInvestorId: string | undefined = undefined;
      } else {
        console.warn(`⚠️ Lead investor "${fr.leadInvestorSlug}" not found. Skipping lead.`);
      }
    }
    const coInvestorSlugs = fr.coInvestorSlugs || [];
    await prisma.fundingRound.create({
      data: {
        companyId: company.id,
        roundType: fr.roundType,
        amount: fr.amount,
        currency: 'USD',
        date: new Date(fr.date),
        leadInvestorId: leadInvestorId || undefined,
        coInvestors: coInvestorSlugs,
      },
    });
  }

  // Add similar blocks for newsArticles and relationships when data is ready

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await disconnectPrisma();
  });