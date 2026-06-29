import { InvestorRepository, InvestorListOptions } from '../repositories/investor.repository';

export class InvestorService {
  static async listInvestors(options: InvestorListOptions) {
    return InvestorRepository.findAll(options);
  }

  static async getInvestorBySlug(slug: string) {
    const investor = await InvestorRepository.findBySlug(slug);
    if (!investor) {
      throw new Error('NOT_FOUND');
    }
    return investor;
  }

  static async getMostActive(limit?: number) {
    return InvestorRepository.findMostActive(limit || 10);
  }

  static async getInvestments(slug: string, limit: number, cursor?: string) {
    const result = await InvestorRepository.findInvestments(slug, limit, cursor);
    if (!result) {
      throw new Error('NOT_FOUND');
    }
    return result;
  }

  static async getCoInvestors(slug: string) {
    const result = await InvestorRepository.findCoInvestors(slug);
    if (!result) {
      throw new Error('NOT_FOUND');
    }
    return result;
  }
}