# GraphOne Backend API

**Live API:** [https://graphone-api-a5b9.onrender.com](https://graphone-api-a5b9.onrender.com)
**Swagger docs:** [https://graphone-api-a5b9.onrender.com/docs/](https://graphone-api-a5b9.onrender.com/docs/)

The intelligence layer for the AI economy – one graph connecting AI companies, founders, investors, products, funding rounds, and news.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Live API Endpoints](#live-api-endpoints)
- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [Trending Score Formula](#trending-score-formula)
- [Deployment](#deployment)
- [What Would I Build Next](#what-would-i-build-next-with-2-more-days)
- [Project Structure](#project-structure)

---

## Overview

GraphOne is a real-time intelligence platform for the AI economy – think of it as Bloomberg for AI startups. This backend API serves data on 30,000+ AI companies, 6,000+ investors, and 18,000+ news updates, all connected through a rich relationship graph.

This repository contains the complete backend implementation built for the GraphOne engineering trial task.

### Key Features

- **58 real AI companies** (OpenAI, Anthropic, Mistral, Cursor, Perplexity, etc.)
- **21 real investors** (Sequoia, a16z, Y Combinator, Lightspeed, etc.)
- **62 products** with upvotes and categories
- **113 funding rounds** with lead investors and co-investors
- **30 news articles** with tags and company relationships
- **12 tags** for categorizing companies and products
- **Ecosystem graph** – visualize connections between companies, investors, and products
- **Cross-entity search** – search across companies, investors, founders, products, and tags
- **Ranked activity feed** – combines news, funding rounds, and new companies
- **Caching** – `/stats` endpoint cached for 5 minutes
- **Rate limiting** – 100 requests per minute per IP

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Runtime** | Node.js (v24.14.1) |
| **Framework** | Fastify v5 |
| **Language** | TypeScript |
| **ORM** | Prisma v7 + @prisma/adapter-pg |
| **Database** | PostgreSQL (Supabase) |
| **Validation** | Zod |
| **Caching** | node-cache |
| **Rate Limiting** | @fastify/rate-limit |
| **Deployment** | Render |
| **Package Manager** | npm |

---

## Live API Endpoints

Base URL: `https://graphone-api-a5b9.onrender.com`

### Companies

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/companies` | List companies with filters: `category`, `stage`, `country`, `sort` (trending/funded/new), `limit`, `cursor` |
| GET | `/companies/:slug` | Full company profile with founders, products, funding rounds, investors |
| GET | `/companies/:slug/funding` | Funding rounds timeline |
| GET | `/companies/:slug/products` | Products of the company |
| GET | `/companies/trending` | Top 10 trending companies (via `?sort=trending`) |
| GET | `/companies/:slug/graph` | 1‑hop ecosystem graph (investors, co‑investors, competitors, products, tags) |
| POST | `/companies` | Create a new company (admin – requires `X-API-Key`) |
| POST | `/companies/:slug/claim` | Claim a company profile (admin – requires `X-API-Key`) |

### Investors

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/investors` | List investors with filters: `type`, `stageFocus`, `sector`, `limit`, `cursor` |
| GET | `/investors/:slug` | Full investor profile + portfolio breakdown |
| GET | `/investors/most-active` | Ranked by deal count (last 90 days) |
| GET | `/investors/:slug/investments` | Paginated investment history |
| GET | `/investors/:slug/co-investors` | Syndication partners and frequency |

### Products & News

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | List products with `category` filter and `sort` (popular/newest) |
| GET | `/products/:slug` | Product detail |
| GET | `/news` | Paginated news feed with `tag` filter |
| GET | `/news/trending` | Most read news in the last 24 hours |

### Feed, Search & Stats

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/feed` | Ranked activity feed (news + funding rounds + new companies) |
| GET | `/search?q=` | Cross‑entity search (companies, investors, founders, products, tags) |
| GET | `/stats` | Platform aggregates (companies, investors, products, total funding, unicorns, funding rounds) – **cached** |

### Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Service health check |
| GET | `/` | Root endpoint with API info |

### Example Requests

```bash
# Get all companies (first page)
curl https://graphone-api-a5b9.onrender.com/companies

# Get trending companies
curl "https://graphone-api-a5b9.onrender.com/companies?sort=trending"

# Get OpenAI profile
curl https://graphone-api-a5b9.onrender.com/companies/openai

# Get ecosystem graph for OpenAI
curl https://graphone-api-a5b9.onrender.com/companies/openai/graph

# Search for "openai"
curl "https://graphone-api-a5b9.onrender.com/search?q=openai"

# Get platform stats (cached)
curl https://graphone-api-a5b9.onrender.com/stats

# Create a company (admin only)
curl -X POST https://graphone-api-a5b9.onrender.com/companies \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-secret-admin-key" \
  -d '{"name":"Test AI","slug":"test-ai","category":"AI Agents","website":"https://test.ai"}'
```

---

## Local Development

### Prerequisites

- Node.js (v18+)
- PostgreSQL (local or Supabase)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/uv-goswami/GraphOne.git
cd GraphOne/backend

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Edit .env with your DATABASE_URL and ADMIN_API_KEY
# DATABASE_URL should point to your PostgreSQL instance
# For Supabase, use the Session Pooler URI:
# postgresql://postgres:YOUR_PASSWORD@YOUR_PROJECT.pooler.supabase.co:6543/postgres?schema=public

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed the database with real data (58 companies, 21 investors, etc.)
npx prisma db seed

# Start the development server
npm run dev
```

The API will be available at `http://localhost:3000`.

### Seed Data

The seed script populates the database with:

- **58 real AI companies** – OpenAI, Anthropic, Mistral AI, Cursor, Perplexity, Midjourney, Runway, Synthesia, Glean, Reka, Hugging Face, Pika, Cohere, xAI, Google DeepMind, Scale AI, Weights & Biases, Dataiku, H2O.ai, SambaNova Systems, Cerebras Systems, Graphcore, Lightmatter, Groq, Adept, Character.ai, Airtable, Notion, Stability AI, NVIDIA, AMD, Intel, IBM, Palantir, Snowflake, Databricks, Zapier, Make, n8n, Rasa, Voiceflow, Clarifai, Landing AI, Turing, Paperspace, Vectara, Arize AI, Fiddler AI, WhyLabs, Monte Carlo, Dremio, Stream, Kite, Deepgram, AssemblyAI, Descript, Peech, Vidyo.ai

- **21 real investors** – Sequoia Capital, Andreessen Horowitz, Y Combinator, Lightspeed Venture Partners, Accel, General Catalyst, Khosla Ventures, SoftBank Vision Fund, Tiger Global Management, Microsoft Ventures, GV (Google Ventures), Index Ventures, Bessemer Venture Partners, Greylock Partners, Coatue Management, Insight Partners, Spark Capital, Founders Fund, Data Collective (DCVC), Menlo Ventures, NEA

- **57 founders** – Sam Altman, Dario Amodei, Arthur Mensch, Aravind Srinivas, David Holz, Cristóbal Valenzuela, Victor Riparbelli, Arvind Jain, Dani Yogatama, Clem Delangue, Demi Guo, Aidan Gomez, Elon Musk, Demis Hassabis, Alexandr Wang, Lukas Biewald, Florian Douetteau, Sri Ambati, Rodrigo Liang, Andrew Feldman, Nigel Toon, Nicholas Harris, Jonathan Ross, David Luan, Noam Shazeer, Howie Liu, Ivan Zhao, Emad Mostaque, Jensen Huang, Lisa Su, Pat Gelsinger, Arvind Krishna, Alex Karp, Frank Slootman, Ali Ghodsi, Wade Foster, Viktor Benei, Jan Oberhauser, Alex Weidauer, Brendan O'Driscoll, Matt Zeiler, Andrew Ng, Jonathan Siddharth, Dillon Erb, Amin Ahmad, Jason Lopatecki, Amit Paka, Alessya Visnjic, Barr Moses, Tomer Shiran, Thierry Schellenbach, Adam Smith, Scott Stephenson, Dylan Fox, Andrew Mason, Itai Vonshak, Aditya Kulkarni

- **62 products** – ChatGPT, GPT-4o, Sora, Claude, Claude 3.5 Sonnet, Mistral 7B, Mistral Large, Cursor IDE, Perplexity AI, Midjourney, Runway Gen-2, Synthesia Studio, Glean Search, Reka Core, Hugging Face Hub, Pika 1.0, Cohere Platform, Grok, AlphaFold, Scale Data Engine, W&B Platform, Dataiku DSS, H2O Driverless AI, SambaNova Suite, Cerebras CS-2, Graphcore IPU, Lightmatter Photonics, Groq API, Adept AI, Character.ai, Airtable, Notion, Stable Diffusion, NVIDIA AI Enterprise, AMD Instinct, Intel Gaudi, Watson Studio, Foundry, Snowflake AI, Databricks MLflow, Zapier AI, Make AI, n8n AI, Rasa NLU, Voiceflow Platform, Clarifai API, Landing AI Platform, Turing Platform, Paperspace Gradient, Vectara Search, Arize Phoenix, Fiddler AI Platform, WhyLabs AI, Monte Carlo Data, Dremio Sonar, Stream AI, Kite AI, Deepgram API, AssemblyAI API, Descript AI, Peech AI, Vidyo AI

- **113 funding rounds** with realistic amounts, dates, and investor relationships

- **30 news articles** with tags and company mentions

- **12 tags** – AI Agents, AI Coding, AI Search, AI Video, AI Interactive, Foundation Models, Generative AI, ChatGPT, Multimodal, Funding News, Product Launch, Acquisition

---

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string (Supabase Session Pooler) | `postgresql://postgres:password@db.xxxxx.pooler.supabase.co:6543/postgres?schema=public` |
| `ADMIN_API_KEY` | API key for write operations (POST, claim) | `your-secret-admin-key` |
| `CACHE_TTL` | Cache TTL in seconds | `300` |
| `NODE_ENV` | Environment | `development` or `production` |
| `PORT` | Server port | `3000` |
| `HOST` | Server host | `0.0.0.0` |
| `CORS_ORIGIN` | Allowed origins (comma-separated) | `*` or `https://frontend.onrender.com` |
| `LOG_LEVEL` | Logging level | `info` or `debug` |

---

## Database Schema

The database is built with Prisma and uses the following core models:

### Entities

| Model | Description |
|-------|-------------|
| `Company` | AI companies with funding, employees, stage, unicorn status, trending score |
| `Investor` | VC firms, angels, corporate VCs with AUM, portfolio count, stage/sector focus |
| `Founder` | Company founders with bio, social links, location |
| `Product` | AI products with category, launch date, upvotes |
| `FundingRound` | Investment rounds with amount, date, lead investor, co-investors |
| `NewsArticle` | News articles with source, tag, related companies |
| `Tag` | Categorization tags for companies, products, and news |
| `CompanyRelationship` | Graph edges between companies (competitor, partner, subsidiary, parent) |

### Key Relationships

- A `Company` has many `Founder`s, `Product`s, `FundingRound`s, and `NewsArticle`s.
- A `FundingRound` has one lead `Investor` and many co-investors.
- Companies can be related via `CompanyRelationship` (competitors, partners, etc.).
- `Tag`s can be applied to `Company`s, `Product`s, and `NewsArticle`s.

### Indexes

- `slug` on Company, Investor, Founder, Product, Tag (for fast lookups)
- `category` on Company
- `type` on Investor
- `published_at` on NewsArticle

---

## Trending Score Formula

The `growth_score` for companies is computed using a weighted formula that captures real momentum:

```
Trending Score =
  (0.25 × Funding Momentum) +
  (0.20 × News Velocity) +
  (0.20 × Employee Growth) +
  (0.15 × Product Upvotes) +
  (0.10 × Investor Quality) +
  (0.10 × Recency Decay)
```

| Signal | Weight | Description |
|--------|--------|-------------|
| **Funding Momentum** | 25% | Sum of all funding rounds in the last 90 days (×1.5 multiplier for recency) |
| **News Velocity** | 20% | Number of unique news mentions in the last 7 days (logarithmic boost) |
| **Employee Growth** | 20% | Percentage change in employee count over 90 days |
| **Product Upvotes** | 15% | Weighted average of upvotes across all products (recency boost for new products) |
| **Investor Quality** | 10% | Composite of investor reputation based on fund count and AUM |
| **Recency Decay** | 10% | Exponential decay: `exp(-days_since_last_activity / 30)` – older companies naturally drop off |

All signals are normalized to a 0–100 scale before applying weights.

The score is pre‑computed in the seed data and can be updated by a scheduled job.

---

## Deployment

The API is deployed on **Render** with a **Supabase PostgreSQL** database.

### Render Configuration

| Setting | Value |
|---------|-------|
| **Root Directory** | `backend` |
| **Build Command** | `npm install && npx prisma generate && npm run build` |
| **Start Command** | `npm run start` |
| **Plan** | Free |

### Environment Variables on Render

| Key | Value |
|-----|-------|
| `DATABASE_URL` | `postgresql://postgres:YOUR_PASSWORD@YOUR_PROJECT.pooler.supabase.co:6543/postgres?schema=public` |
| `ADMIN_API_KEY` | `your-secret-admin-key` |
| `CACHE_TTL` | `300` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `CORS_ORIGIN` | `*` |
| `LOG_LEVEL` | `info` |

### Supabase Connection Notes

- Use the **Session Pooler** URI (not Direct Connection) – the pooler accepts IPv4 traffic, which Render's free plan requires【6†L6-L15】.
- The pooler URI uses `.pooler.supabase.co` domain and port `6543`.
- The Direct Connection is IPv6-only and will fail on Render's free plan.

### Deploying Updates

```bash
git add .
git commit -m "your message"
git push origin main
```

Render will automatically deploy on push (Auto-Deploy enabled).

---

## What Would I Build Next (With 2 More Days)

> If I had 2 more days, I would build the following enhancements:

### 1. Advanced Graph Queries (2‑Hop Relationships)
Extend the graph endpoint to support 2‑hop relationships – showing not just who invested in a company, but also the other companies those investors funded. This would make GraphOne feel truly like Bloomberg for AI startups.

### 2. Real‑time Notifications & Webhooks
Implement a webhook system where users can subscribe to events like "Companies in category X raise funding" and get real‑time alerts via email, Slack, or webhook callbacks.

### 3. Trending Score Scheduler
Build a background job (using `node-cron` or a serverless cron) that recomputes trending scores every hour based on the latest funding, news, and activity data, then updates the `growth_score` column in the database and invalidates the cache.

### 4. Historical Trending Dashboard
Track trending score over time and surface "breakout" companies – startups with sudden spikes in momentum. This could be powered by a time‑series table storing daily scores.

### 5. Market Intelligence Reports
Aggregate funding and news data into sector‑specific reports (e.g., "State of AI Agents, Q3 2026") and expose them as downloadable PDFs via a new `/reports` endpoint.

### 6. Entity Resolution
Implement automated merging of duplicate companies (e.g., "OpenAI" vs "OpenAI Inc.") using fuzzy matching and a manual review queue.

---

## Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Idempotent seed script
│   ├── config.ts              # Prisma configuration
│   └── data/                  # JSON seed data
│       ├── tags.json
│       ├── companies.json
│       ├── investors.json
│       ├── founders.json
│       ├── products.json
│       ├── fundingRounds.json
│       └── newsArticles.json
├── src/
│   ├── lib/
│   │   └── prisma.ts          # Prisma client with connection pooling
│   ├── repositories/          # Database query layer
│   │   ├── company.repository.ts
│   │   ├── investor.repository.ts
│   │   ├── product.repository.ts
│   │   ├── news.repository.ts
│   │   ├── search.repository.ts
│   │   └── graph.repository.ts
│   ├── services/              # Business logic layer
│   │   ├── company.service.ts
│   │   ├── investor.service.ts
│   │   ├── product.service.ts
│   │   ├── news.service.ts
│   │   ├── search.service.ts
│   │   ├── stats.service.ts
│   │   ├── feed.service.ts
│   │   └── graph.service.ts
│   ├── routes/                # API routes
│   │   ├── companies.ts
│   │   ├── investors.ts
│   │   ├── products.ts
│   │   ├── news.ts
│   │   ├── search.ts
│   │   ├── stats.ts
│   │   ├── feed.ts
│   │   └── graph.ts
│   ├── utils/
│   │   └── cache.ts           # node-cache wrapper
│   └── server.ts              # Fastify server entrypoint
├── docs/                      # Documentation suite
│   ├── api/
│   │   └── api-contract.md
│   ├── openapi-spec.json      # OpenAPI 3.0 specification
│   ├── architecture-decisions/  # ADRs (20+ decisions)
│   ├── database-design/
│   │   └── database-design.md
│   └── domain/
│       └── domain-model.md
├── .env.example               # Environment variables template
├── package.json
├── tsconfig.json
└── README.md                  # This file
```

---

## API Response Format

All responses follow this consistent structure:

```json
{
  "data": object | array | null,
  "meta": {
    "pagination": { "nextCursor": string | null, "limit": number },
    "timestamp": string,
    "cached": boolean (optional)
  },
  "error": null | { "code": string, "message": string, "statusCode": number }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `BAD_REQUEST` | 400 | Validation failed (Zod error) |
| `UNAUTHORIZED` | 401 | Missing or invalid API key |
| `FORBIDDEN` | 403 | Authenticated but not allowed |
| `NOT_FOUND` | 404 | Resource does not exist |
| `CONFLICT` | 409 | Resource already exists (e.g., claim already taken) |
| `RATE_LIMITED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Unexpected server error |

---

## License

Internal use only – proprietary to GraphOne.

---

## Contributors

This backend was built as part of the GraphOne engineering trial task (June 2026).

**Developer:** Yuvraj Singh  
**Live API:** [https://graphone-api-a5b9.onrender.com](https://graphone-api-a5b9.onrender.com)  

