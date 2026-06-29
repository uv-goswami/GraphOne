import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { SearchService } from '../services/search.service';

const querySchema = z.object({
  q: z.string().min(1, 'Query is required'),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export async function searchRoutes(server: FastifyInstance) {
  // GET /search
  server.get(
    '/search',
    {
      schema: {
        querystring: querySchema,
        response: {
          200: z.object({
            data: z.array(z.any()),
            meta: z.object({
              query: z.string(),
              count: z.number(),
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
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
    }
  );
}