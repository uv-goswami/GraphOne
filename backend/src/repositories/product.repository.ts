import { prisma } from '../lib/prisma';
import { Prisma } from '../../generated/prisma';

export interface ProductListOptions {
  category?: string;
  sort?: 'popular' | 'newest';
  limit: number;
  cursor?: string;
}

export class ProductRepository {
  static async findAll(options: ProductListOptions) {
    const { category, sort, limit, cursor } = options;

    const where: Prisma.ProductWhereInput = {};
    if (category) where.category = category;

    let orderBy: Prisma.ProductOrderByWithRelationInput = {};
    switch (sort) {
      case 'popular':
        orderBy = { upvotes: 'desc' };
        break;
      case 'newest':
        orderBy = { launchDate: 'desc' };
        break;
      default:
        orderBy = { name: 'asc' };
    }

    const cursorObj: Prisma.ProductWhereUniqueInput | undefined = cursor
      ? { id: cursor }
      : undefined;

    const products = await prisma.product.findMany({
      where,
      orderBy,
      take: limit + 1,
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      include: {
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
            logoUrl: true,
          },
        },
        tags: true,
      },
    });

    const transformed = products.map((product) => ({
      ...product,
      company: {
        ...product.company,
      },
    }));

    let nextCursor: string | null = null;
    if (products.length > limit) {
      const last = products.pop();
      nextCursor = last?.id || null;
    }

    return {
      data: transformed,
      nextCursor,
    };
  }

  static async findBySlug(slug: string) {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
            logoUrl: true,
            description: true,
            category: true,
            stage: true,
          },
        },
        tags: true,
      },
    });

    if (!product) return null;
    return product;
  }
}