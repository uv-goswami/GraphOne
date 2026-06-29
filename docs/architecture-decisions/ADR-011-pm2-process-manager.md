# ADR-011: PM2 for Process Management

## Context
We need to keep the Node.js server running on the EC2 instance and handle restarts.

## Decision
Use PM2 to manage the Fastify server process. It handles logs, restarts, and clustering.

## Consequences
- Production‑ready process management.
- Easy to start/stop.
- Simple setup.