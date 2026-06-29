import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CompanyService } from '../services/company.service';

const querySchema = z.object({
  category: z.string().optional(),
  stage: z.string().optional(),
  country: z.string().optional(),
  sort: z.enum(['trending', 'funded', 'new']).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

export async function companyRoutes(server: FastifyInstance) {
  // GET /companies
  server.get(
    '/companies',
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
      const query = request.query as z.infer<typeof querySchema>;

      const result = await CompanyService.listCompanies({
        category: query.category,
        stage: query.stage,
        country: query.country,
        sort: query.sort,
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

  // GET /companies/:slug
  server.get(
    '/companies/:slug',
    {
      schema: {
        params: z.object({
          slug: z.string(),
        }),
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
        const company = await CompanyService.getCompanyBySlug(slug);
        return {
          data: company,
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
              message: `Company with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        throw err;
      }
    }
  );
}