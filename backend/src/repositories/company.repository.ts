import { prisma } from '../lib/prisma';
import { Prisma } from '../../generated/prisma/client';

export interface CompanyListOptions {
  category?: string;
  stage?: string;
  country?: string;
  sort?: 'trending' | 'funded' | 'new';
  limit: number;
  cursor?: string;
}

export class CompanyRepository {
  static async findAll(options: CompanyListOptions) {
    const { category, stage, country, sort, limit, cursor } = options;

    // Build where clause
    const where: Prisma.CompanyWhereInput = {};
    if (category) where.category = category;
    if (stage) where.stage = stage;
    if (country) where.hqCountry = country;

    // Build orderBy
    let orderBy: Prisma.CompanyOrderByWithRelationInput = {};
    switch (sort) {
      case 'trending':
        orderBy = { growthScore: 'desc' };
        break;
      case 'funded':
        orderBy = { fundingTotal: 'desc' };
        break;
      case 'new':
        orderBy = { foundedYear: 'desc' };
        break;
      default:
        orderBy = { name: 'asc' };
    }

    // Build cursor
    const cursorObj: Prisma.CompanyWhereUniqueInput | undefined = cursor
      ? { id: cursor }
      : undefined;

    const companies = await prisma.company.findMany({
      where,
      orderBy,
      take: limit + 1,
      cursor: cursorObj,
      skip: cursor ? 1 : 0,
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        category: true,
        fundingTotal: true,
        employeeCount: true,
        foundedYear: true,
        hqCity: true,
        hqCountry: true,
        logoUrl: true,
        website: true,
        stage: true,
        isUnicorn: true,
        valuation: true,
        growthScore: true,
        dataConfidenceScore: true,
      },
    });

    // Convert BigInt to Number for JSON serialization
    const transformed = companies.map((company) => ({
      ...company,
      fundingTotal: company.fundingTotal ? Number(company.fundingTotal) : null,
      valuation: company.valuation ? Number(company.valuation) : null,
    }));

    let nextCursor: string | null = null;
    if (companies.length > limit) {
      const last = companies.pop();
      nextCursor = last?.id || null;
    }

    return {
      data: transformed,
      nextCursor,
    };
  }

  static async findBySlug(slug: string) {
    const company = await prisma.company.findUnique({
      where: { slug },
      include: {
        founders: true,
        products: true,
        fundingRounds: {
          include: {
            leadInvestor: true,
          },
        },
        tags: true,
        relatedFrom: {
          include: {
            targetCompany: true,
          },
        },
        relatedTo: {
          include: {
            sourceCompany: true,
          },
        },
      },
    });

    if (!company) return null;

    // Convert all BigInt fields to numbers
    const transformed = {
      ...company,
      fundingTotal: company.fundingTotal ? Number(company.fundingTotal) : null,
      valuation: company.valuation ? Number(company.valuation) : null,
      founders: company.founders.map((f) => ({
        ...f,
      })),
      products: company.products.map((p) => ({
        ...p,
      })),
      fundingRounds: company.fundingRounds.map((fr) => ({
        ...fr,
        amount: fr.amount ? Number(fr.amount) : null,
        leadInvestor: fr.leadInvestor ? {
          ...fr.leadInvestor,
          aum: fr.leadInvestor.aum ? Number(fr.leadInvestor.aum) : null,
          avgCheckSize: fr.leadInvestor.avgCheckSize ? Number(fr.leadInvestor.avgCheckSize) : null,
        } : null,
      })),
      tags: company.tags,
      relatedFrom: company.relatedFrom.map((r) => ({
        ...r,
        targetCompany: {
          ...r.targetCompany,
          fundingTotal: r.targetCompany.fundingTotal ? Number(r.targetCompany.fundingTotal) : null,
          valuation: r.targetCompany.valuation ? Number(r.targetCompany.valuation) : null,
        },
      })),
      relatedTo: company.relatedTo.map((r) => ({
        ...r,
        sourceCompany: {
          ...r.sourceCompany,
          fundingTotal: r.sourceCompany.fundingTotal ? Number(r.sourceCompany.fundingTotal) : null,
          valuation: r.sourceCompany.valuation ? Number(r.sourceCompany.valuation) : null,
        },
      })),
    };

    return transformed;
  }
}