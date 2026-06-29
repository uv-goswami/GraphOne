import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { StatsService } from '../services/stats.service';
import { getCached, setCache } from '../utils/cache';

const CACHE_KEY = 'stats';

export async function statsRoutes(server: FastifyInstance) {
  // GET /stats
  server.get(
    '/stats',
    {
      schema: {
        response: {
          200: z.object({
            data: z.object({
              companies: z.number(),
              investors: z.number(),
              products: z.number(),
              totalFunding: z.number(),
              unicorns: z.number(),
              fundingRounds: z.number(),
            }),
            meta: z.object({
              timestamp: z.string(),
              cached: z.boolean(),
            }),
            error: z.null(),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Check cache first
      const cached = getCached<Awaited<ReturnType<typeof StatsService.getStats>>>(CACHE_KEY);

      if (cached) {
        return {
          data: cached,
          meta: {
            timestamp: new Date().toISOString(),
            cached: true,
          },
          error: null,
        };
      }

      // Cache miss – fetch fresh data
      const data = await StatsService.getStats();

      // Store in cache
      setCache(CACHE_KEY, data);

      return {
        data,
        meta: {
          timestamp: new Date().toISOString(),
          cached: false,
        },
        error: null,
      };
    }
  );
}
