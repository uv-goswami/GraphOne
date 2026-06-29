# ADR-022: In‑Memory Caching Strategy

## Context
The assessment requires caching on at least one endpoint. We also want to reduce database load for frequently requested endpoints.

## Decision
Use `node-cache` (in‑memory) with a TTL of 5 minutes.

- **Cached endpoints:** `GET /companies/trending` and `GET /stats`.
- **Cache key:** full URL path (e.g., `/companies/trending`).
- **TTL:** 300 seconds (5 minutes).
- The cache is cleared/invalidated when the scheduled cron job (ADR-021) updates the trending scores, to ensure fresh data.

## Consequences
- Fast responses (sub‑ms).
- Simple implementation.
- Cache is per‑instance; if we scale to multiple instances, we would need Redis (but the trial is single‑instance).
- Reduces database load for the two most heavily hit endpoints.