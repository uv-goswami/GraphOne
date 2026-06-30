import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import helmet from '@fastify/helmet';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import {
  serializerCompiler,
  validatorCompiler,
} from '@fastify/type-provider-zod';
import { ZodError } from 'zod';

import { prisma } from './lib/prisma';

import { companyRoutes } from './routes/companies';
import { investorRoutes } from './routes/investors';
import { productRoutes } from './routes/products';
import { newsRoutes } from './routes/news';
import { searchRoutes } from './routes/search';
import { statsRoutes } from './routes/stats';
import { feedRoutes } from './routes/feed';
import { graphRoutes } from './routes/graph';

const server = fastify({
  logger:
    process.env.NODE_ENV === 'development'
      ? {
          level: process.env.LOG_LEVEL || 'info',
          transport: {
            target: 'pino-pretty',
            options: {
              translateTime: 'HH:MM:ss Z',
              ignore: 'pid,hostname',
            },
          },
        }
      : {
          level: process.env.LOG_LEVEL || 'info',
        },
});

server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

// Plugins
server.register(cors, {
  origin: process.env.CORS_ORIGIN?.split(',') || true,
  credentials: true,
});

server.register(helmet, {
  contentSecurityPolicy: false,
});

server.register(rateLimit, {
  max: 100,
  timeWindow: 60 * 1000,
  global: true,
  keyGenerator: (req) => req.ip || 'unknown',
});

// Swagger/OpenAPI
server.register(swagger, {
  openapi: {
    openapi: '3.0.3',
    info: {
      title: 'GraphOne API',
      description: 'API documentation for GraphOne',
      version: '1.0.0',
    },
    servers: [
      {
        url: process.env.API_URL || 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    tags: [
      { name: 'Companies' },
      { name: 'Investors' },
      { name: 'Products' },
      { name: 'News' },
      { name: 'Search' },
      { name: 'Stats' },
      { name: 'Feed' },
      { name: 'Graph' },
    ],
  },
});

// Routes
server.register(companyRoutes);
server.register(investorRoutes);
server.register(productRoutes);
server.register(newsRoutes);
server.register(searchRoutes);
server.register(statsRoutes);
server.register(feedRoutes);
server.register(graphRoutes);

// Swagger UI (must come after routes)
server.register(swaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false,
  },
  staticCSP: true,
  transformSpecificationClone: true,
});

// Global error handler
server.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: {
        code: 'BAD_REQUEST',
        message: 'Validation failed',
        details: error.issues.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
        statusCode: 400,
      },
    });
  }

  if (
    error &&
    typeof error === 'object' &&
    'statusCode' in error &&
    error.statusCode === 429
  ) {
    return reply.status(429).send({
      error: {
        code: 'RATE_LIMITED',
        message: 'Too many requests, please try again later.',
        statusCode: 429,
      },
    });
  }

  server.log.error(error);

  return reply.status(500).send({
    error: {
      code: 'INTERNAL_ERROR',
      message:
        process.env.NODE_ENV === 'development'
          ? (error as Error).message
          : 'An unexpected error occurred',
      statusCode: 500,
    },
  });
});

// Health endpoint
server.get('/health', {
  schema: {
    tags: ['Health'],
    summary: 'Health check',
  },
}, async () => ({
  status: 'ok',
  timestamp: new Date().toISOString(),
  environment: process.env.NODE_ENV || 'development',
}));

// Root endpoint
server.get('/', {
  schema: {
    tags: ['Health'],
    summary: 'API information',
  },
}, async () => ({
  name: 'GraphOne API',
  version: '1.0.0',
  status: 'running',
  documentation: '/docs',
}));

const shutdown = async () => {
  server.log.info('Shutting down...');
  await server.close();
  await prisma.$disconnect();
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';

    await server.listen({ port, host });

    server.log.info(`Server running on http://${host}:${port}`);
    server.log.info(`Swagger UI: http://${host}:${port}/docs`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

export { server };