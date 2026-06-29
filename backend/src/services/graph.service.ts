import { GraphRepository } from '../repositories/graph.repository';

export class GraphService {
  static async getEcosystemGraph(slug: string) {
    const graph = await GraphRepository.getEcosystemGraph(slug);
    return graph;
  }
}