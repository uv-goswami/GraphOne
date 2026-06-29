# ADR-021: Scheduled Jobs for Re‑ranking Trending Scores

## Context
The trending score (`growth_score`) must be updated periodically (every hour) to reflect the latest funding, news, and activity data.

## Decision
Use `node-cron` to run a scheduled job inside the backend process.

- **Cron expression:** `0 * * * *` (every hour).
- **Action:** Recompute the trending score for all companies using the formula defined in the domain model, and update the `growth_score` column in the database.
- The job runs in the background without blocking API requests.

## Alternatives Considered
- Bull/Redis: would require a separate Redis instance.
- AWS EventBridge: more complex for the trial.

## Consequences
- Simple, no extra infrastructure.
- The job runs inside the same Node process; if the process restarts, the job resumes automatically.
- For production, we could swap this for a serverless cron (EventBridge + Lambda) later.