# ADR-008: Rate Limiting

## Context
Prevent abuse and ensure fair usage. The assessment requires rate limiting.

## Decision
Implement rate limiting at the API gateway level using Fastify rate‑limiting plugin.

- **Standard endpoints (GET):** 100 requests per minute per IP.
- **Admin endpoints (POST, PUT, DELETE):** 200 requests per minute per IP (override).
- Endpoints that are cached (e.g., `/stats`, `/companies/trending`) count toward the limit but are less likely to hit it due to caching.

## Consequences
- Protects the database.
- Returns `429` with `Retry-After` header.
- Admin overrides are configured via a whitelist of route prefixes.
- Easy to adjust in configuration.