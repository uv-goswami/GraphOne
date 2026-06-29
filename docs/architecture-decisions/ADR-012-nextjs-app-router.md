# ADR-012: Next.js App Router for Frontend

## Context
The frontend is a separate Next.js application.

## Decision
Use Next.js 14 with the App Router for its built‑in routing, server components, and API routes (optional). The frontend will consume the backend API.

## Consequences
- Modern React patterns.
- Server‑side rendering and static generation.
- Full‑stack capabilities, but we keep backend separate.