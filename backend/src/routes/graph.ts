import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { GraphService } from '../services/graph.service';

const paramsSchema = z.object({
  slug: z.string(),
});

export const graphRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/companies/:slug/graph', {
    schema: {
      params: paramsSchema,
      tags: ['Companies'], // This is a company sub‑resource, so tag as Companies
    },
  }, async (request) => {
    const { slug } = request.params;
    try {
      const graph = await GraphService.getEcosystemGraph(slug);
      return {
        data: graph,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'Company not found') {
        throw { statusCode: 404, message: `Company with slug "${slug}" not found` };
      }
      throw err;
    }
  });
};