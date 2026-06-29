import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { InvestorService } from '../services/investor.service';

const listQuerySchema = z.object({
  type: z.string().optional(),
  stageFocus: z.string().optional(),
  sector: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

const slugParamsSchema = z.object({
  slug: z.string(),
});

const investmentsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export async function investorRoutes(server: FastifyInstance) {
  // GET /investors
  server.get(
    '/investors',
    {
      schema: {
        querystring: listQuerySchema,
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
          pagination: {
            nextCursor: result.nextCursor,
            limit: query.limit,
          },
          timestamp: new Date().toISOString(),
        },
        error: null,
      };
    }
  );

  // GET /investors/:slug
  server.get(
    '/investors/:slug',
    {
      schema: {
        params: slugParamsSchema,
        response: {
          200: z.object({
            data: z.any(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
          404: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('NOT_FOUND'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { slug } = request.params as { slug: string };

      try {
        const investor = await InvestorService.getInvestorBySlug(slug);
        return {
          data: investor,
          meta: {
            timestamp: new Date().toISOString(),
          },
          error: null,
        };
      } catch (err) {
        if (err instanceof Error && err.message === 'NOT_FOUND') {
          return reply.status(404).send({
            data: null,
            meta: {
              timestamp: new Date().toISOString(),
            },
            error: {
              code: 'NOT_FOUND',
              message: `Investor with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        throw err;
      }
    }
  );

  // GET /investors/most-active
  server.get(
    '/investors/most-active',
    {
      schema: {
        querystring: z.object({
          limit: z.coerce.number().int().min(1).max(50).default(10),
        }),
        response: {
          200: z.object({
            data: z.array(z.any()),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { limit } = request.query as { limit: number };
      const data = await InvestorService.getMostActive(limit);
      return {
        data,
        meta: {
          timestamp: new Date().toISOString(),
        },
        error: null,
      };
    }
  );

  // GET /investors/:slug/investments
  server.get(
    '/investors/:slug/investments',
    {
      schema: {
        params: slugParamsSchema,
        querystring: investmentsQuerySchema,
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
          404: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('NOT_FOUND'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { slug } = request.params as { slug: string };
      const { limit, cursor } = request.query as { limit: number; cursor?: string };

      try {
        const result = await InvestorService.getInvestments(slug, limit, cursor);
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
      } catch (err) {
        if (err instanceof Error && err.message === 'NOT_FOUND') {
          return reply.status(404).send({
            data: null,
            meta: {
              timestamp: new Date().toISOString(),
            },
            error: {
              code: 'NOT_FOUND',
              message: `Investor with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        throw err;
      }
    }
  );

  // GET /investors/:slug/co-investors
  server.get(
    '/investors/:slug/co-investors',
    {
      schema: {
        params: slugParamsSchema,
        response: {
          200: z.object({
            data: z.array(z.any()),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
          404: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('NOT_FOUND'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { slug } = request.params as { slug: string };

      try {
        const data = await InvestorService.getCoInvestors(slug);
        return {
          data,
          meta: {
            timestamp: new Date().toISOString(),
          },
          error: null,
        };
      } catch (err) {
        if (err instanceof Error && err.message === 'NOT_FOUND') {
          return reply.status(404).send({
            data: null,
            meta: {
              timestamp: new Date().toISOString(),
            },
            error: {
              code: 'NOT_FOUND',
              message: `Investor with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        throw err;
      }
    }
  );
}