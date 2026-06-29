import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { ProductService } from '../services/product.service';

const listQuerySchema = z.object({
  category: z.string().optional(),
  sort: z.enum(['popular', 'newest']).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

const slugParamsSchema = z.object({
  slug: z.string(),
});

export async function productRoutes(server: FastifyInstance) {
  // GET /products
  server.get(
    '/products',
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

      const result = await ProductService.listProducts({
        category: query.category,
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

  // GET /products/:slug
  server.get(
    '/products/:slug',
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
        const product = await ProductService.getProductBySlug(slug);
        return {
          data: product,
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
              message: `Product with slug "${slug}" not found`,
              statusCode: 404,
            },
          });
        }
        throw err;
      }
    }
  );
}