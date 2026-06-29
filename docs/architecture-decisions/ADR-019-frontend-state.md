# ADR-019: Frontend State Management

## Context
The frontend needs to manage API data, caching, and UI state.

## Decision
Use React Query (`@tanstack/react-query`) for server‑state management (caching, revalidation, pagination). Local UI state with React hooks or Zustand.

## Consequences
- Minimal boilerplate.
- Automatic caching and background updates.
- Separates server and client state.