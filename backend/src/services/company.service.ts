import { CompanyRepository, CompanyListOptions } from '../repositories/company.repository';

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
}