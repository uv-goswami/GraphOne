import { CompanyRepository, CompanyListOptions } from '../repositories/company.repository';
import { prisma } from '../lib/prisma';

export class CompanyService {
  static async listCompanies(options: CompanyListOptions) {
    return CompanyRepository.findAll(options);
  }

  static async getCompanyBySlug(slug: string) {
    const company = await CompanyRepository.findBySlug(slug);
    if (!company) throw new Error('NOT_FOUND');
    return company;
  }

  static async createCompany(data: any) {
    // Implement create logic
    return prisma.company.create({
      data: {
        ...data,
        dataConfidenceScore: 0.5,
        growthScore: 0,
        isUnicorn: data.isUnicorn || false,
      },
    });
  }

  static async claimCompany(slug: string, claimedBy: string) {
    const existing = await prisma.company.findUnique({ where: { slug } });
    if (!existing) throw new Error('NOT_FOUND');
    if (existing.claimedBy) throw new Error('ALREADY_CLAIMED');
    return prisma.company.update({
      where: { slug },
      data: { claimedBy, claimedAt: new Date() },
    });
  }
}