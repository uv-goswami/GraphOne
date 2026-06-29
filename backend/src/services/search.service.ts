import { SearchRepository, SearchResult } from '../repositories/search.repository';

export class SearchService {
  static async search(query: string, limit?: number): Promise<SearchResult[]> {
    if (!query || query.trim().length < 2) {
      return [];
    }
    return SearchRepository.search(query.trim(), limit || 20);
  }
}