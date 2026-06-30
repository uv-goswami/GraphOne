import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { SearchService } from '../services/search.service';

const querySchema = z.object({
  q: z.string().min(1, 'Query is required'),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export const searchRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/search', {
    schema: { querystring: querySchema },
  }, async (request) => {
    const { q, limit } = request.query;
    const results = await SearchService.search(q, limit);
    return {
      data: results,
      meta: {
        query: q,
        count: results.length,
        timestamp: new Date().toISOString(),
      },
      error: null,
    };
  });
};