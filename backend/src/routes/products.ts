import { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { ProductService } from '../services/product.service';

const listQuerySchema = z.object({
  category: z.string().optional(),
  sort: z.enum(['popular', 'newest']).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
  cursor: z.string().optional(),
});

const slugParamsSchema = z.object({ slug: z.string() });

export async function productRoutes(server: FastifyInstance) {
  server.get('/products', {
    schema: { querystring: listQuerySchema },
  }, async (request: FastifyRequest) => {
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
        pagination: { nextCursor: result.nextCursor, limit: query.limit },
        timestamp: new Date().toISOString(),
      },
      error: null,
    };
  });

  server.get('/products/:slug', {
    schema: { params: slugParamsSchema },
  }, async (request: FastifyRequest) => {
    const { slug } = request.params as { slug: string };
    try {
      const product = await ProductService.getProductBySlug(slug);
      return {
        data: product,
        meta: { timestamp: new Date().toISOString() },
        error: null,
      };
    } catch (err) {
      if (err instanceof Error && err.message === 'NOT_FOUND') {
        throw { statusCode: 404, message: `Product with slug "${slug}" not found` };
      }
      throw err;
    }
  });
}