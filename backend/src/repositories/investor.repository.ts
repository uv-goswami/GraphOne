import { prisma } from '../lib/prisma';
import { Prisma } from '../generated/prisma/client';

export interface InvestorListOptions {
  type?: string;
  stageFocus?: string;
  sector?: string;
  limit: number;
  cursor?: string;
}

export class InvestorRepository {
  static async findAll(options: InvestorListOptions) {
    const { type, stageFocus, sector, limit, cursor } = options;

    // Build where clause
    const where: Prisma.InvestorWhereInput = {};
    if (type) where.type = type;
    if (stageFocus) where.stageFocus = { has: stageFocus };
    if (sector) where.sectorFocus = { has: sector };

    const cursorObj: Prisma.InvestorWhereUniqueInput | undefined = cursor
      ? { id: cursor }
      : undefined;

    const investors = await prisma.investor.findMany({
      where,
      take: limit + 1,
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      orderBy: { name: 'asc' },
      select: {
        id: true,
        name: true,
        slug: true,
        type: true,
        bio: true,
        aum: true,
        portfolioCount: true,
        stageFocus: true,
        sectorFocus: true,
        location: true,
        logoUrl: true,
        avgCheckSize: true,
        fundNumber: true,
      },
    });

    // Convert BigInt to Number
    const transformed = investors.map((inv) => ({
      ...inv,
      aum: inv.aum ? Number(inv.aum) : null,
      avgCheckSize: inv.avgCheckSize ? Number(inv.avgCheckSize) : null,
    }));

    let nextCursor: string | null = null;
    if (investors.length > limit) {
      const last = investors.pop();
      nextCursor = last?.id || null;
    }

    return {
      data: transformed,
      nextCursor,
    };
  }

  static async findBySlug(slug: string) {
    const investor = await prisma.investor.findUnique({
      where: { slug },
      include: {
        leadRounds: {
          include: {
            company: true,
          },
          orderBy: { date: 'desc' },
        },
      },
    });

    if (!investor) return null;

    // Convert BigInts
    const transformed = {
      ...investor,
      aum: investor.aum ? Number(investor.aum) : null,
      avgCheckSize: investor.avgCheckSize ? Number(investor.avgCheckSize) : null,
      leadRounds: investor.leadRounds.map((round) => ({
        ...round,
        amount: round.amount ? Number(round.amount) : null,
        company: {
          ...round.company,
          fundingTotal: round.company.fundingTotal ? Number(round.company.fundingTotal) : null,
          valuation: round.company.valuation ? Number(round.company.valuation) : null,
        },
      })),
    };

    return transformed;
  }

  static async findMostActive(limit: number = 10) {
    // Get investors with the most funding rounds in the last 90 days
    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);

    const results = await prisma.$queryRaw`
      SELECT 
        i.id, i.name, i.slug, i.logo_url, i.type,
        COUNT(fr.id) as deal_count,
        SUM(fr.amount) as total_amount
      FROM investors i
      LEFT JOIN funding_rounds fr ON fr.lead_investor_id = i.id
      WHERE fr.date >= ${ninetyDaysAgo}
      GROUP BY i.id
      ORDER BY deal_count DESC, total_amount DESC
      LIMIT ${limit}
    `;

    // Cast results to proper type and convert BigInt
    return (results as any[]).map((row) => ({
      ...row,
      deal_count: Number(row.deal_count),
      total_amount: row.total_amount ? Number(row.total_amount) : null,
    }));
  }

  static async findInvestments(slug: string, limit: number, cursor?: string) {
    const investor = await prisma.investor.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!investor) return null;

    const cursorObj: Prisma.FundingRoundWhereUniqueInput | undefined = cursor
      ? { id: cursor }
      : undefined;

    const rounds = await prisma.fundingRound.findMany({
      where: {
        OR: [
          { leadInvestorId: investor.id },
          { coInvestors: { has: slug } }, // assumes coInvestors stores slugs
        ],
      },
      include: {
        company: true,
        leadInvestor: true,
      },
      orderBy: { date: 'desc' },
      take: limit + 1,
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
    });

    const transformed = rounds.map((round) => ({
      ...round,
      amount: round.amount ? Number(round.amount) : null,
      company: {
        ...round.company,
        fundingTotal: round.company.fundingTotal ? Number(round.company.fundingTotal) : null,
        valuation: round.company.valuation ? Number(round.company.valuation) : null,
      },
      leadInvestor: round.leadInvestor
        ? {
            ...round.leadInvestor,
            aum: round.leadInvestor.aum ? Number(round.leadInvestor.aum) : null,
            avgCheckSize: round.leadInvestor.avgCheckSize ? Number(round.leadInvestor.avgCheckSize) : null,
          }
        : null,
    }));

    let nextCursor: string | null = null;
    if (rounds.length > limit) {
      const last = rounds.pop();
      nextCursor = last?.id || null;
    }

    return {
      data: transformed,
      nextCursor,
    };
  }

  static async findCoInvestors(slug: string) {
    // Find all rounds where this investor participated (lead or co)
    const investor = await prisma.investor.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!investor) return null;

    // Get all rounds where this investor is lead or co-investor
    const rounds = await prisma.fundingRound.findMany({
      where: {
        OR: [
          { leadInvestorId: investor.id },
          { coInvestors: { has: slug } },
        ],
      },
      select: {
        coInvestors: true,
        leadInvestorId: true,
        leadInvestor: {
          select: {
            id: true,
            name: true,
            slug: true,
            logoUrl: true,
          },
        },
      },
    });

    // Count frequency of each co-investor
    const coInvestorMap: Record<string, { name: string; slug: string; logoUrl?: string; count: number }> = {};

    for (const round of rounds) {
      // Include the lead investor if they are not the current investor
      if (round.leadInvestor && round.leadInvestor.id !== investor.id) {
        const key = round.leadInvestor.id;
        if (!coInvestorMap[key]) {
          coInvestorMap[key] = {
            name: round.leadInvestor.name,
            slug: round.leadInvestor.slug,
            logoUrl: round.leadInvestor.logoUrl || undefined,
            count: 0,
          };
        }
        coInvestorMap[key].count += 1;
      }

      // Include co-investors from the array (which stores slugs)
      for (const coSlug of round.coInvestors) {
        if (coSlug === slug) continue; // skip self
        // We need to fetch investor info for these slugs
        // For simplicity, we'll query the database for each unique slug
        // This could be optimized by fetching all at once
        // But for MVP, we'll do a query per unique slug
        // We'll collect slugs and query later
        const coSlugKey = `slug:${coSlug}`;
        if (!coInvestorMap[coSlugKey]) {
          // We'll resolve the investor later
          coInvestorMap[coSlugKey] = {
            name: coSlug, // placeholder
            slug: coSlug,
            count: 0,
          };
        }
        coInvestorMap[coSlugKey].count += 1;
      }
    }

    // Resolve investor names for slugs that are not yet resolved
    const slugKeys = Object.keys(coInvestorMap).filter((k) => k.startsWith('slug:'));
    if (slugKeys.length > 0) {
      const slugs = slugKeys.map((k) => k.replace('slug:', ''));
      const investors = await prisma.investor.findMany({
        where: { slug: { in: slugs } },
        select: { id: true, name: true, slug: true, logoUrl: true },
      });
      for (const inv of investors) {
        const key = `slug:${inv.slug}`;
        if (coInvestorMap[key]) {
          coInvestorMap[key].name = inv.name;
          coInvestorMap[key].logoUrl = inv.logoUrl || undefined;
        }
      }
    }

    // Convert map to array, sort by count desc
    const result = Object.values(coInvestorMap)
      .filter((item) => item.count > 0)
      .sort((a, b) => b.count - a.count);

    return result;
  }
}