import { CompanyRepository, CompanyListOptions } from '../repositories/company.repository';
import { prisma } from '../lib/prisma';
import { CreateCompanyInput, ClaimCompanyInput } from '../schemas/company.schema';

export class CompanyService {
  static async listCompanies(options: CompanyListOptions) {
    return CompanyRepository.findAll(options);
  }

  static async getCompanyBySlug(slug: string) {
    const company = await CompanyRepository.findBySlug(slug);
    if (!company) {
      throw new Error('NOT_FOUND');
    }
    return company;
  }

  static async createCompany(data: CreateCompanyInput) {
    // Check if slug already exists
    const existing = await prisma.company.findUnique({
      where: { slug: data.slug },
    });
    if (existing) {
      throw new Error('SLUG_ALREADY_EXISTS');
    }

    const company = await prisma.company.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description || null,
        category: data.category,
        fundingTotal: data.fundingTotal || null,
        employeeCount: data.employeeCount || null,
        foundedYear: data.foundedYear || null,
        hqCity: data.hqCity || null,
        hqCountry: data.hqCountry || null,
        logoUrl: data.logoUrl || null,
        website: data.website || null,
        stage: data.stage || null,
        isUnicorn: data.isUnicorn || false,
        valuation: data.valuation || null,
        growthScore: 0,
        dataConfidenceScore: 0.5,
      },
    });
    return company;
  }

  static async claimCompany(slug: string, claimedBy: string) {
    const company = await prisma.company.findUnique({
      where: { slug },
    });
    if (!company) {
      throw new Error('NOT_FOUND');
    }
    if (company.claimedBy) {
      throw new Error('ALREADY_CLAIMED');
    }

    const updated = await prisma.company.update({
      where: { slug },
      data: {
        claimedBy,
        claimedAt: new Date(),
      },
    });
    return updated;
  }
}