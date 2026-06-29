import { NewsRepository, NewsListOptions } from '../repositories/news.repository';

export class NewsService {
  static async listNews(options: NewsListOptions) {
    return NewsRepository.findAll(options);
  }

  static async getTrending(limit?: number) {
    return NewsRepository.findTrending(limit || 10);
  }
}