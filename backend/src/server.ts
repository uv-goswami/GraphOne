import 'dotenv/config';
import fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';
import helmet from '@fastify/helmet';
import { serializerCompiler, validatorCompiler } from '@fastify/type-provider-zod';
import { ZodError } from 'zod';
import { prisma } from './lib/prisma';
import { companyRoutes } from './routes/companies';
import { investorRoutes } from './routes/investors';

// Create Fastify instance
const server = fastify({
  logger: process.env.NODE_ENV === 'development'
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

// Register Zod as the validation compiler
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

// Register plugins
server.register(cors, {
  origin: process.env.CORS_ORIGIN?.split(',') || true,
  credentials: true,
});

server.register(helmet, {
  contentSecurityPolicy: false,
});

server.register(rateLimit, {
  max: 100,
  timeWindow: 60 * 1000, // 1 minute
  global: true,
  keyGenerator: (req) => req.ip || 'unknown',
});


// Register routes
server.register(companyRoutes);
server.register(investorRoutes);

// Global error handler
server.setErrorHandler((error, request, reply) => {
  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return reply.status(400).send({
      error: {
        code: 'BAD_REQUEST',
        message: 'Validation failed',
        details: error.errors.map((e) => ({
          field: e.path.join('.'),
          message: e.message,
        })),
        statusCode: 400,
      },
    });
  }

  // Handle rate limit errors
  if (error.statusCode === 429) {
    return reply.status(429).send({
      error: {
        code: 'RATE_LIMITED',
        message: 'Too many requests, please try again later.',
        statusCode: 429,
      },
    });
  }

  // Log unknown errors
  server.log.error(error);

  // Return generic internal error
  return reply.status(500).send({
    error: {
      code: 'INTERNAL_ERROR',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred',
      statusCode: 500,
    },
  });
});

// Health check endpoint
server.get('/health', async () => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  };
});

// Root route
server.get('/', async () => {
  return {
    name: 'GraphOne API',
    version: '1.0.0',
    status: 'running',
    documentation: '/docs',
  };
});

// Graceful shutdown
const shutdown = async () => {
  server.log.info('Shutting down server...');
  await server.close();
  await prisma.$disconnect();
  process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start server
const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || '0.0.0.0';
    
    await server.listen({ port, host });
    server.log.info(`Server running on http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

export { server };