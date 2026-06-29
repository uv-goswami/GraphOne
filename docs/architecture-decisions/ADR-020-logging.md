# ADR-020: Logging

## Context
We need structured logs for debugging and monitoring.

## Decision
Use Pino (Fastify's default logger) for structured JSON logging. Log to stdout and/or a file. Include request IDs, timestamps, and error stacks.

## Consequences
- Easy to parse and visualize.
- Low overhead.
- Consistent log format across services.