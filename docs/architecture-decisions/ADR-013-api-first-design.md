# ADR-013: API‑First Design

## Context
We want the frontend and any future clients to have a consistent interface.

## Decision
Design the API contract first (OpenAPI) and implement the backend to satisfy it. The frontend is developed against the same contract.

## Consequences
- Parallel development.
- Clear boundaries.
- Easier to test and document.