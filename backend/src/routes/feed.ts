import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { FeedService } from '../services/feed.service';

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
});

export async function feedRoutes(server: FastifyInstance) {
  // GET /feed
  server.get(
    '/feed',
    {
      schema: {
        querystring: querySchema,
        response: {
          200: z.object({
            data: z.array(z.any()),
            meta: z.object({
              pagination: z.object({
                nextCursor: z.string().nullable(),
                limit: z.number(),
              }),
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { limit, cursor } = request.query as { limit: number; cursor?: string };

      const result = await FeedService.getFeed(limit, cursor);

      return {
        data: result.data,
        meta: {
          pagination: {
            nextCursor: result.nextCursor,
            limit,
          },
          timestamp: new Date().toISOString(),
        },
        error: null,
      };
    }
  );
}import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { FeedService } from '../services/feed.service';

const querySchema = z.object({
  limit: z.coerce.number().int().min(1).max(50).default(20),
  cursor: z.string().optional(),
});

export async function feedRoutes(server: FastifyInstance) {
  server.get('/feed', {
    schema: { querystring: querySchema },
  }, async (request: FastifyRequest) => {
    const { limit, cursor } = request.query as { limit: number; cursor?: string };
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
}