import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { NewsService } from '../services/news.service';

const listQuerySchema = z.object({
  tag: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export const newsRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/news', {
    schema: { querystring: listQuerySchema },
  }, async (request) => {
    const query = request.query;
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
  }, async (request) => {
    const { limit } = request.query;
    const data = await NewsService.getTrending(limit);
    return {
      data,
      meta: { timestamp: new Date().toISOString() },
      error: null,
    };
  });
};