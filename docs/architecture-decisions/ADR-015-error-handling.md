# ADR-015: Structured Error Handling

## Context
We need consistent error responses for the frontend.

## Decision
All errors are returned as `{ error: { code, message, statusCode } }`. Use a global error handler in Fastify that catches all thrown errors and maps them to appropriate HTTP statuses.

## Error Codes (Full List)
- `BAD_REQUEST` (400) – Malformed request or Zod validation failure.
- `UNAUTHORIZED` (401) – Missing or invalid API key.
- `FORBIDDEN` (403) – Authenticated but not allowed (e.g., trying to claim a company without admin privileges).
- `NOT_FOUND` (404) – Resource does not exist.
- `CONFLICT` (409) – Resource already exists (e.g., claim already taken).
- `RATE_LIMITED` (429) – Too many requests.
- `INTERNAL_ERROR` (500) – Unexpected server error.

## Consequences
- Predictable error format.
- Easy to debug.
- Custom error classes for domain errors (e.g., `ConflictError`, `ForbiddenError`).
- Zod validation errors are transformed into `BAD_REQUEST` with a `details` array.