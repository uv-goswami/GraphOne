# ADR-007: JWT Authentication for Admin Users

## Context
Only write endpoints need authentication. We may need user accounts in the future.

## Decision
Use JWT for authentication. For the trial, we also accept `X-API-Key` for simplicity.

## Consequences
- Stateless, easy to scale.
- We'll issue JWTs upon login (not implemented for trial).
- API‑key header is a fallback.