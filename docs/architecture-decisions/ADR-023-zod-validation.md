# ADR-023: Zod Validation for All Inputs

## Context
The assessment explicitly requires validation with Zod (Node). We must validate all request bodies, query parameters, and URL parameters.

## Decision
- Use Zod for all validation.
- Integrate with Fastify via `@fastify/type-provider-zod`.
- Define a shared Zod schema library in `packages/shared/validations`.
- Reuse the same Zod schemas on the frontend for type‑safe form validation (optional).

## Validation Rules
- All string fields must be trimmed.
- Slug must match regex: `^[a-z0-9-]+$`.
- URL fields (`website`, `logo_url`, `linkedin`, `twitter`) must pass `z.string().url()`.
- Fields that are optional must handle `undefined` and `null` gracefully.

## Consequences
- Type safety across the API layer.
- Automatic JSON schema generation from Zod (via Fastify).
- Consistent validation errors.
- Easy to test validation logic in isolation.