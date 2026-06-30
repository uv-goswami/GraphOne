import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { z } from 'zod';
import { StatsService } from '../services/stats.service';
import { getCached, setCache } from '../utils/cache';

const CACHE_KEY = 'stats';

export const statsRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/stats', {
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
  }, async () => {
    const cached = getCached<Awaited<ReturnType<typeof StatsService.getStats>>>(CACHE_KEY);
    if (cached) {
      return {
        data: cached,
        meta: { timestamp: new Date().toISOString(), cached: true },
        error: null,
      };
    }
    const data = await StatsService.getStats();
    setCache(CACHE_KEY, data);
    return {
      data,
      meta: { timestamp: new Date().toISOString(), cached: false },
      error: null,
    };
  });
};