# ADR-005: PostgreSQL as Database

## Context
We need a reliable, ACID‑compliant relational database with good JSON support and full‑text search.

## Decision
Use PostgreSQL. We will deploy on Supabase (managed Postgres) for the trial, but the schema is portable.

## Consequences
- Great for relational data and graph‑like queries with recursive CTEs.
- Supabase provides free tier with easy access.
- Full‑text search is available for the `/search` endpoint.