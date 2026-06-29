# ADR-010: EventBridge Scheduler for Re‑ranking

## Context
We need to update the trending score periodically (e.g., every hour).

## Decision
Use AWS EventBridge Scheduler to trigger a Lambda or a cron job inside the backend that recomputes trending scores and updates the `growth_score` column.

## Consequences
- Serverless, reliable.
- No need to keep an extra process running.
- Costs are minimal.