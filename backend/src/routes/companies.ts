import { FastifyInstance, FastifyRequest } from 'fastify';
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

const slugParamsSchema = z.object({
  slug: z.string(),
});

const createBodySchema = z.object({
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().optional(),
  category: z.string().min(1),
  fundingTotal: z.coerce.number().optional(),
  employeeCount: z.coerce.number().optional(),
  foundedYear: z.coerce.number().optional(),
  hqCity: z.string().optional(),
  hqCountry: z.string().optional(),
  logoUrl: z.string().url().optional(),
  website: z.string().url().optional(),
  stage: z.string().optional(),
  isUnicorn: z.boolean().optional(),
  valuation: z.coerce.number().optional(),
});

const claimBodySchema = z.object({
  claimedBy: z.string().email(),
});

export async function companyRoutes(server: FastifyInstance) {
  // GET /companies
  server.get('/companies', {
    schema: { querystring: querySchema },
  }, async (request: FastifyRequest) => {
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
        pagination: { nextCursor: result.nextCursor, limit: query.limit },
        timestamp: new Date().toISOString(),
      },
      error: null,
    };
  });

  // GET /companies/:slug
  server.get('/companies/:slug', {
    schema: { params: slugParamsSchema },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    try {
      const company = await CompanyService.getCompanyBySlug(slug);
      return {
        data: company,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Company with slug "${slug}" not found` };
      }
      throw err;
    }
  });

  // POST /companies (admin)
  server.post('/companies', {
    schema: {
      body: createBodySchema,
      security: [{ apiKey: [] }],  // ✅ now inside schema
    },
    preHandler: async (request: FastifyRequest) => {
      const apiKey = request.headers['x-api-key'];
      if (apiKey !== process.env.ADMIN_API_KEY) {
        throw { statusCode: 401, message: 'Invalid or missing API key' };
      }
    },
  }, async (request: FastifyRequest) => {
    const body = request.body as z.infer<typeof createBodySchema>;
    const company = await CompanyService.createCompany(body);
    return {
      data: company,
      meta: { timestamp: new Date().toISOString() },
      error: null,
    };
  });

  // POST /companies/:slug/claim
  server.post('/companies/:slug/claim', {
    schema: {
      params: slugParamsSchema,
      body: claimBodySchema,
      security: [{ apiKey: [] }],  // ✅ now inside schema
    },
    preHandler: async (request: FastifyRequest) => {
      const apiKey = request.headers['x-api-key'];
      if (apiKey !== process.env.ADMIN_API_KEY) {
        throw { statusCode: 401, message: 'Invalid or missing API key' };
      }
    },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    const { claimedBy } = request.body as z.infer<typeof claimBodySchema>;
    try {
      const company = await CompanyService.claimCompany(slug, claimedBy);
      return {
        data: company,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Company with slug "${slug}" not found` };
      }
      if (err instanceof Error && err.message === 'ALREADY_CLAIMED') {
        throw { statusCode: 409, message: 'Company already claimed' };
      }
      throw err;
    }
  });
}