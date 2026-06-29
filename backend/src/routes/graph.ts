import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { GraphService } from '../services/graph.service';

const paramsSchema = z.object({
  slug: z.string(),
});

export async function graphRoutes(server: FastifyInstance) {
  // GET /companies/:slug/graph
  server.get(
    '/companies/:slug/graph',
    {
      schema: {
        params: paramsSchema,
        response: {
          200: z.object({
            data: z.object({
              nodes: z.array(z.any()),
              edges: z.array(z.any()),
            }),
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
        const graph = await GraphService.getEcosystemGraph(slug);
        return {
          data: graph,
          meta: {
            timestamp: new Date().toISOString(),
          },
          error: null,
        };
      } catch (err) {
        if (err instanceof Error && err.message === 'Company not found') {
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