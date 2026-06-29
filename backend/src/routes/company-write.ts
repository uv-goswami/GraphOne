import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { CompanyService } from '../services/company.service';
import { createCompanySchema, claimCompanySchema } from '../schemas/company.schema';

// Helper to check API key
function isAdmin(request: FastifyRequest): boolean {
  const apiKey = request.headers['x-api-key'] || request.headers['X-API-Key'];
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) {
    throw new Error('ADMIN_API_KEY not configured');
  }
  return apiKey === expected;
}

export async function companyWriteRoutes(server: FastifyInstance) {
  // POST /companies
  server.post(
    '/companies',
    {
      schema: {
        body: createCompanySchema,
        response: {
          201: z.object({
            data: z.any(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
          400: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.string(),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
          401: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('UNAUTHORIZED'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
          409: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('CONFLICT'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Check API key
      if (!isAdmin(request)) {
        return reply.status(401).send({
          data: null,
          meta: { timestamp: new Date().toISOString() },
          error: {
            code: 'UNAUTHORIZED',
            message: 'Invalid or missing API key',
            statusCode: 401,
          },
        });
      }

      try {
        const data = request.body as z.infer<typeof createCompanySchema>;
        const company = await CompanyService.createCompany(data);
        return reply.status(201).send({
          data: company,
          meta: { timestamp: new Date().toISOString() },
          error: null,
        });
      } catch (err) {
        if (err instanceof Error && err.message === 'SLUG_ALREADY_EXISTS') {
          return reply.status(409).send({
            data: null,
            meta: { timestamp: new Date().toISOString() },
            error: {
              code: 'CONFLICT',
              message: 'A company with this slug already exists',
              statusCode: 409,
            },
          });
        }
        throw err;
      }
    }
  );

  // POST /companies/:slug/claim
  server.post(
    '/companies/:slug/claim',
    {
      schema: {
        params: z.object({ slug: z.string() }),
        body: claimCompanySchema,
        response: {
          200: z.object({
            data: z.any(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.null(),
          }),
          401: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('UNAUTHORIZED'),
              message: z.string(),
              statusCode: z.number(),
            }),
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
          409: z.object({
            data: z.null(),
            meta: z.object({
              timestamp: z.string(),
            }),
            error: z.object({
              code: z.literal('CONFLICT'),
              message: z.string(),
              statusCode: z.number(),
            }),
          }),
        },
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      // Check API key
      if (!isAdmin(request)) {
        return reply.status(401).send({
          data: null,
          meta: { timestamp: new Date().toISOString() },
          error: {
            code: 'UNAUTHORIZED',
            message: 'Invalid or missing API key',
            statusCode: 401,
          },
        });
      }

      const { slug } = request.params as { slug: string };
      const { claimedBy } = request.body as z.infer<typeof claimCompanySchema>;

      try {
        const company = await CompanyService.claimCompany(slug, claimedBy);
        return {
          data: company,
          meta: { timestamp: new Date().toISOString() },
          error: null,
        };
      } catch (err) {
        if (err instanceof Error && err.message === 'NOT_FOUND') {
          return reply.status(404).send({
            data: null,
            meta: { timestamp: new Date().toISOString() },
            error: {
              code: 'NOT_FOUND',
              message: `Company with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        if (err instanceof Error && err.message === 'ALREADY_CLAIMED') {
          return reply.status(409).send({
            data: null,
            meta: { timestamp: new Date().toISOString() },
            error: {
              code: 'CONFLICT',
              message: 'This company has already been claimed',
              statusCode: 409,
            },
          });
        }
        throw err;
      }
    }
  );
}
