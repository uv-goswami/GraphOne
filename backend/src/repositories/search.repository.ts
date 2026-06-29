import { prisma } from '../lib/prisma';

export interface SearchResult {
  id: string;
  type: 'company' | 'investor' | 'founder' | 'product' | 'tag';
  name: string;
  slug: string;
  description?: string | null;
  score: number;
  // Additional fields for display
  logoUrl?: string | null;
  category?: string | null;
  typeLabel?: string | null; // e.g., "VC" for investor, stage for company
}

export class SearchRepository {
  static async search(query: string, limit: number = 20): Promise<SearchResult[]> {
    const results: SearchResult[] = [];

    // Normalize query for ILIKE
    const searchTerm = `%${query}%`;

    // 1. Search Companies
    const companies = await prisma.company.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slug: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
          { hqCity: { contains: query, mode: 'insensitive' } },
          { hqCountry: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: Math.min(limit, 10), // Cap per entity to avoid too many
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        logoUrl: true,
        category: true,
        stage: true,
      },
    });

    for (const c of companies) {
      results.push({
        id: c.id,
        type: 'company',
        name: c.name,
        slug: c.slug,
        description: c.description,
        logoUrl: c.logoUrl,
        category: c.category || undefined,
        typeLabel: c.stage || undefined,
        score: 1.0, // simple weight
      });
    }

    // 2. Search Investors
    const investors = await prisma.investor.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slug: { contains: query, mode: 'insensitive' } },
          { bio: { contains: query, mode: 'insensitive' } },
          { location: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: Math.min(limit, 10),
      select: {
        id: true,
        name: true,
        slug: true,
        bio: true,
        logoUrl: true,
        type: true,
        location: true,
      },
    });

    for (const inv of investors) {
      results.push({
        id: inv.id,
        type: 'investor',
        name: inv.name,
        slug: inv.slug,
        description: inv.bio,
        logoUrl: inv.logoUrl,
        typeLabel: inv.type || undefined,
        score: 1.0,
      });
    }

    // 3. Search Founders
    const founders = await prisma.founder.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slug: { contains: query, mode: 'insensitive' } },
          { bio: { contains: query, mode: 'insensitive' } },
          { title: { contains: query, mode: 'insensitive' } },
          { location: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: Math.min(limit, 10),
      select: {
        id: true,
        name: true,
        slug: true,
        title: true,
        bio: true,
        photoUrl: true,
        location: true,
        company: {
          select: {
            name: true,
            slug: true,
          },
        },
      },
    });

    for (const f of founders) {
      results.push({
        id: f.id,
        type: 'founder',
        name: f.name,
        slug: f.slug,
        description: f.bio || f.title || undefined,
        logoUrl: f.photoUrl,
        typeLabel: f.company?.name || undefined,
        score: 1.0,
      });
    }

    // 4. Search Products
    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slug: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: Math.min(limit, 10),
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        category: true,
        websiteUrl: true,
        company: {
          select: {
            name: true,
            slug: true,
            logoUrl: true,
          },
        },
      },
    });

    for (const p of products) {
      results.push({
        id: p.id,
        type: 'product',
        name: p.name,
        slug: p.slug,
        description: p.description,
        logoUrl: p.company?.logoUrl,
        category: p.category || undefined,
        typeLabel: p.company?.name || undefined,
        score: 1.0,
      });
    }

    // 5. Search Tags
    const tags = await prisma.tag.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { slug: { contains: query, mode: 'insensitive' } },
        ],
      },
      take: Math.min(limit, 5),
      select: {
        id: true,
        name: true,
        slug: true,
        type: true,
      },
    });

    for (const t of tags) {
      results.push({
        id: t.id,
        type: 'tag',
        name: t.name,
        slug: t.slug,
        description: null,
        typeLabel: t.type,
        score: 1.0,
      });
    }

    // Sort by a simple relevance: exact name match first, then others
    // We'll rank matches where query is at start of name higher.
    const lowerQuery = query.toLowerCase();
    for (const r of results) {
      const nameLower = r.name.toLowerCase();
      if (nameLower === lowerQuery) {
        r.score = 10;
      } else if (nameLower.startsWith(lowerQuery)) {
        r.score = 5;
      } else if (nameLower.includes(lowerQuery)) {
        r.score = 2;
      } else {
        r.score = 1;
      }
    }

    // Sort by score descending, then name
    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.name.localeCompare(b.name);
    });

    // Limit overall results
    return results.slice(0, limit);
  }
}