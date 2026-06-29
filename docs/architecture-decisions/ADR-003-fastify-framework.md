# ADR-003: Fastify as Web Framework + Zod for Validation

## Context
We need a Node.js framework that is fast, type‑safe, and has built‑in validation and logging. Additionally, the assessment explicitly requires input validation using Zod (Node).

## Decision
Use **Fastify** (instead of Express) for the backend API. Fastify offers:
- High performance (JSON schema validation, low overhead).
- Built‑in request/response validation with JSON Schema.
- Out‑of‑the‑box logging.
- Excellent plugin ecosystem.

For validation, we will use **Zod** alongside `@fastify/type-provider-zod`. This allows us to:
- Define Zod schemas for all request bodies, query strings, and params.
- Automatically infer TypeScript types from the Zod schemas.
- Return rich `400` validation errors with field‑level details.

All `POST`, `PUT`, and `PATCH` inputs will be validated with Zod. URL fields (`website`, `logo_url`, etc.) will use `z.string().url()`.

## Consequences
- More structured than Express.
- Steeper learning curve but better for production.
- Type‑safe validation with minimal boilerplate.
- Clear separation between validation logic and business logic.