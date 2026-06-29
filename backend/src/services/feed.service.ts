import { prisma } from '../lib/prisma';

type FeedItem = {
  id: string;
  type: 'news' | 'funding' | 'company';
  title: string;
  description?: string;
  timestamp: Date;
  data: any;
};

export class FeedService {
  static async getFeed(limit: number = 20, cursor?: string) {
    const cursorObj = cursor ? { id: cursor } : undefined;

    // Get recent news
    const news = await prisma.newsArticle.findMany({
      take: Math.min(limit, 10),
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      orderBy: { publishedAt: 'desc' },
    });

    // Get recent funding rounds
    const funding = await prisma.fundingRound.findMany({
      take: Math.min(limit, 10),
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      orderBy: { date: 'desc' },
      include: {
        company: true,
        leadInvestor: true,
      },
    });

    // Get recent companies
    const companies = await prisma.company.findMany({
      take: Math.min(limit, 10),
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      orderBy: { lastScrapedAt: 'desc' },
      where: {
        lastScrapedAt: {
          not: null,
        },
      },
    });

    const feedItems: FeedItem[] = [];

    // News items
    for (const item of news) {
      feedItems.push({
        id: item.id,
        type: 'news',
        title: item.title,
        description: item.summary || undefined,
        timestamp: item.publishedAt,
        data: item,
      });
    }

    // Funding rounds - convert BigInts
    for (const item of funding) {
      const companyName = item.company?.name || 'Unknown';
      const amount = item.amount ? Number(item.amount) : null;
      const amountDisplay = amount ? `$${(amount / 1000000).toFixed(1)}M` : 'funding';
      
      feedItems.push({
        id: item.id,
        type: 'funding',
        title: `${companyName} raised ${amountDisplay}`,
        description: `Round: ${item.roundType} • Lead: ${item.leadInvestor?.name || 'Unknown'}`,
        timestamp: item.date,
        data: {
          ...item,
          amount: amount,
          company: item.company ? {
            ...item.company,
            fundingTotal: item.company.fundingTotal ? Number(item.company.fundingTotal) : null,
            valuation: item.company.valuation ? Number(item.company.valuation) : null,
          } : null,
          leadInvestor: item.leadInvestor ? {
            ...item.leadInvestor,
            aum: item.leadInvestor.aum ? Number(item.leadInvestor.aum) : null,
            avgCheckSize: item.leadInvestor.avgCheckSize ? Number(item.leadInvestor.avgCheckSize) : null,
          } : null,
        },
      });
    }

    // Companies - convert BigInts
    for (const item of companies) {
      feedItems.push({
        id: item.id,
        type: 'company',
        title: `${item.name} joined GraphOne`,
        description: `${item.category} • ${item.hqCity || ''}`,
        timestamp: item.lastScrapedAt || new Date(),
        data: {
          ...item,
          fundingTotal: item.fundingTotal ? Number(item.fundingTotal) : null,
          valuation: item.valuation ? Number(item.valuation) : null,
        },
      });
    }

    // Sort by timestamp descending
    feedItems.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

    // Return limited items
    const result = feedItems.slice(0, limit);
    const nextCursor = result.length > 0 ? result[result.length - 1].id : null;

    return {
      data: result,
      nextCursor,
    };
  }
}