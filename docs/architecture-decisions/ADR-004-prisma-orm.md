# ADR-004: Prisma as ORM

## Context
We need an ORM that works with Postgres and provides type safety, migrations, and a clean query API.

## Decision
Use Prisma as the database ORM. It generates TypeScript types from the schema, handles migrations, and supports eager loading.

## Consequences
- Type‑safe queries.
- Auto‑generated migration files.
- Excellent developer experience.
- Slight performance overhead vs raw SQL.