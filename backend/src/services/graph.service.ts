import { GraphRepository, GraphNode, GraphEdge } from '../repositories/graph.repository';

export class GraphService {
  static async getEcosystemGraph(slug: string): Promise<{ nodes: GraphNode[]; edges: GraphEdge[] }> {
    return GraphRepository.getEcosystemGraph(slug);
  }
}