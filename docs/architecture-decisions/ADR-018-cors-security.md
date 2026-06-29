# ADR-018: CORS and Security

## Context
The frontend is hosted on a different domain (Vercel). The backend must allow cross‑origin requests.

## Decision
Enable CORS in Fastify with a whitelist of allowed origins (e.g., Vercel URL). Use Helmet for security headers.

## Consequences
- Secure by default.
- Prevents malicious domains from accessing the API.
- Easy to configure.