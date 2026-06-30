import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
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

export const companyRoutes: FastifyPluginAsyncZod = async (server) => {
  server.get('/companies', {
    schema: {
      querystring: querySchema,
      tags: ['Companies'],
    },
  }, async (request) => {
    const query = request.query;
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

  server.get('/companies/:slug', {
    schema: {
      params: slugParamsSchema,
      tags: ['Companies'],
    },
  }, async (request) => {
    const { slug } = request.params;
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

  server.post('/companies', {
    schema: {
      body: createBodySchema,
      tags: ['Companies'],
    },
    preHandler: async (request) => {
      const apiKey = request.headers['x-api-key'];
      if (apiKey !== process.env.ADMIN_API_KEY) {
        throw { statusCode: 401, message: 'Invalid or missing API key' };
      }
    },
  }, async (request) => {
    const body = request.body;
    const company = await CompanyService.createCompany(body);
    return {
      data: company,
      meta: { timestamp: new Date().toISOString() },
      error: null,
    };
  });

  server.post('/companies/:slug/claim', {
    schema: {
      params: slugParamsSchema,
      body: claimBodySchema,
      tags: ['Companies'],
    },
    preHandler: async (request) => {
      const apiKey = request.headers['x-api-key'];
      if (apiKey !== process.env.ADMIN_API_KEY) {
        throw { statusCode: 401, message: 'Invalid or missing API key' };
      }
    },
  }, async (request) => {
    const { slug } = request.params;
    const { claimedBy } = request.body;
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
};