import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { FeedService } from '../services/feed.service';

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
});

export const feedRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/feed', {
    schema: { querystring: querySchema },
  }, async (request) => {
    const { limit, cursor } = request.query;
    const result = await FeedService.getFeed(limit, cursor);
    return {
      data: result.data,
      meta: {
        pagination: { nextCursor: result.nextCursor, limit },
        timestamp: new Date().toISOString(),
      },
      error: null,
    };
  });
};