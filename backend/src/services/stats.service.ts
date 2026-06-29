import { prisma } from '../lib/prisma';

export class StatsService {
  static async getStats() {
    // Run queries in parallel for efficiency
    const [
      companyCount,
      investorCount,
      productCount,
      totalFunding,
      unicornCount,
      fundingRoundCount,
    ] = await Promise.all([
      prisma.company.count(),
      prisma.investor.count(),
      prisma.product.count(),
      prisma.fundingRound.aggregate({
        _sum: {
          amount: true,
        },
      }),
      prisma.company.count({
        where: { isUnicorn: true },
      }),
      prisma.fundingRound.count(),
    ]);

    return {
      companies: companyCount,
      investors: investorCount,
      products: productCount,
      totalFunding: totalFunding._sum.amount ? Number(totalFunding._sum.amount) : 0,
      unicorns: unicornCount,
      fundingRounds: fundingRoundCount,
    };
  }
}