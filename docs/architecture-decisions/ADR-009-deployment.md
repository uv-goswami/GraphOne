# ADR-009: Render Deployment for Backend

## Context
The assessment requires deploying the backend on Render, Railway, or Vercel (free tier). We choose **Render** for its simplicity, automatic SSL, and seamless GitHub integration.

## Decision
Deploy the Node.js Fastify backend as a **Render Web Service**.

- **Build command:** `pnpm install && pnpm run build`
- **Start command:** `pnpm run start:prod`
- **Environment variables:** `DATABASE_URL`, `OPENAI_API_KEY`, `REDIS_URL` (if used), `CACHE_TTL`, `ADMIN_API_KEY`, etc.
- **Auto‑deploy:** Enabled on `main` branch push.
- **Plan:** Free tier (will spin down after inactivity, but acceptable for trial).

## Consequences
- No need to manage EC2 instances or NGINX.
- Easy to monitor logs via Render dashboard.
- Cost‑free for the trial.
- Slight cold‑start delay on free tier, mitigated by having the frontend trigger a keep‑alive ping.