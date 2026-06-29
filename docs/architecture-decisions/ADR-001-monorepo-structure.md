# ADR-001: Monorepo Structure

## Context
We need to manage the backend API, frontend (Next.js), and shared types.

## Decision
We use a monorepo with `apps/backend` and `apps/frontend`, sharing a `packages/shared` for TypeScript types and validation schemas. We use `pnpm` workspaces.

## Consequences
- Single repository, easy to version and deploy together.
- Shared types ensure API contract consistency.
- Slightly higher complexity for build pipelines.