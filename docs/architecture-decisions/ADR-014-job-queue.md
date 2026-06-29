# ADR-014: Job Queue for Background Tasks

## Context
We have background tasks: scraping, re‑ranking, email notifications.

## Decision
Use Bull (or BullMQ) with Redis as a job queue. Enqueue tasks like "update trending scores" and process them asynchronously.

## Consequences
- Decouples heavy tasks from API responses.
- Requires Redis (extra dependency).
- Good for scalability.