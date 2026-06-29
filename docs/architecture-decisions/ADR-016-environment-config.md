# ADR-016: Environment Configuration

## Context
Different environments (dev, test, production) require different configs.

## Decision
Use `dotenv` with environment‑specific files (`.env.development`, `.env.production`). Use a configuration object that loads from `process.env` with defaults.

## Consequences
- Secure secret management.
- Easy to switch environments.
- Avoid hard‑coded values.