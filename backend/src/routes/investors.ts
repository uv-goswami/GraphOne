import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { InvestorService } from '../services/investor.service';

const listQuerySchema = z.object({
  type: z.string().optional(),
  stageFocus: z.string().optional(),
  sector: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

const slugParamsSchema = z.object({ slug: z.string() });
const investmentsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export async function investorRoutes(server: FastifyInstance) {
  server.get('/investors', {
    schema: { querystring: listQuerySchema },
  }, async (request: FastifyRequest) => {
    const query = request.query as z.infer<typeof listQuerySchema>;
    const result = await InvestorService.listInvestors({
      type: query.type,
      stageFocus: query.stageFocus,
      sector: query.sector,
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

  server.get('/investors/:slug', {
    schema: { params: slugParamsSchema },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    try {
      const investor = await InvestorService.getInvestorBySlug(slug);
      return {
        data: investor,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Investor with slug "${slug}" not found` };
      }
      throw err;
    }
  });

  server.get('/investors/most-active', {
    schema: { querystring: z.object({ limit: z.coerce.number().int().min(1).max(50).default(10) }) },
  }, async (request: FastifyRequest) => {
    const { limit } = request.query as { limit: number };
    const data = await InvestorService.getMostActive(limit);
    return {
      data,
      meta: { timestamp: new Date().toISOString() },
      error: null,
    };
  });

  server.get('/investors/:slug/investments', {
    schema: { params: slugParamsSchema, querystring: investmentsQuerySchema },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    const { limit, cursor } = request.query as { limit: number; cursor?: string };
    try {
      const result = await InvestorService.getInvestments(slug, limit, cursor);
      return {
        data: result.data,
        meta: {
          pagination: { nextCursor: result.nextCursor, limit },
          timestamp: new Date().toISOString(),
        },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Investor with slug "${slug}" not found` };
      }
      throw err;
    }
  });

  server.get('/investors/:slug/co-investors', {
    schema: { params: slugParamsSchema },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    try {
      const data = await InvestorService.getCoInvestors(slug);
      return {
        data,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Investor with slug "${slug}" not found` };
      }
      throw err;
    }
  });
}