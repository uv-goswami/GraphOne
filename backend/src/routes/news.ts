import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { NewsService } from '../services/news.service';

const listQuerySchema = z.object({
  tag: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export async function newsRoutes(server: FastifyInstance) {
  server.get('/news', {
    schema: { querystring: listQuerySchema },
  }, async (request: FastifyRequest) => {
    const query = request.query as z.infer<typeof listQuerySchema>;
    const result = await NewsService.listNews({
      tag: query.tag,
      limit: query.limit,
      cursor: query.cursor,
    });
    return {
      data: result.data,
      meta: {
        pagination: { nextCursor: result.nextCursor, limit: query.limit },
        timestamp: new Date().toISOString(),
      },
      error: null,
    };
  });

  server.get('/news/trending', {
    schema: { querystring: z.object({ limit: z.coerce.number().int().min(1).max(50).default(10) }) },
  }, async (request: FastifyRequest) => {
    const { limit } = request.query as { limit: number };
    const data = await NewsService.getTrending(limit);
    return {
      data,
      meta: { timestamp: new Date().toISOString() },
      error: null,
    };
  });
}