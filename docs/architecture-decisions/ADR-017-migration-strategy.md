# ADR-017: Migration Strategy

## Context
We need to evolve the database schema over time.

## Decision
Use Prisma migrations. Migrations are versioned and applied via `prisma migrate deploy`. Seed data is applied separately using a seed script.

## Consequences
- Versioned schema changes.
- Rollback possible (with caution).
- Seed script must stay in sync with schema.