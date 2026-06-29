import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { SearchService } from '../services/search.service';

const querySchema = z.object({
  q: z.string().min(1, 'Query is required'),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export async function searchRoutes(server: FastifyInstance) {
  server.get('/search', {
    schema: { querystring: querySchema },
  }, async (request: FastifyRequest) => {
    const { q, limit } = request.query as { q: string; limit: number };
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
}