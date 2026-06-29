import { prisma } from '../lib/prisma';
import { Prisma } from '../generated/prisma/client';

export interface NewsListOptions {
  tag?: string;
  limit: number;
  cursor?: string;
}

export class NewsRepository {
  static async findAll(options: NewsListOptions) {
    const { tag, limit, cursor } = options;

    const where: Prisma.NewsArticleWhereInput = {};
    if (tag) where.tag = tag;

    const cursorObj: Prisma.NewsArticleWhereUniqueInput | undefined = cursor
      ? { id: cursor }
      : undefined;

    const articles = await prisma.newsArticle.findMany({
      where,
      orderBy: { publishedAt: 'desc' },
      take: limit + 1,
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
    });

    let nextCursor: string | null = null;
    if (articles.length > limit) {
      const last = articles.pop();
      nextCursor = last?.id || null;
    }

    return {
      data: articles,
      nextCursor,
    };
  }

  static async findTrending(limit: number = 10) {
    // Get most recent news articles (last 24 hours)
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    return prisma.newsArticle.findMany({
      where: {
        publishedAt: {
          gte: twentyFourHoursAgo,
        },
      },
      orderBy: { publishedAt: 'desc' },
      take: limit,
    });
  }
}