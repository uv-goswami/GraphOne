
# GraphOne Database Design

## Overview
We use PostgreSQL with Prisma as the ORM. The schema supports the core entities and their relationships.

## Entity Relationship Diagram (ERD)

```
Company
  id UUID PK
  name TEXT
  slug TEXT UNIQUE
  description TEXT
  category TEXT
  funding_total BIGINT
  employee_count INT
  founded_year INT
  hq_city TEXT
  hq_country TEXT
  logo_url TEXT
  website TEXT
  stage TEXT
  is_unicorn BOOLEAN
  valuation BIGINT
  growth_score FLOAT
  last_scraped_at TIMESTAMPTZ
  data_confidence_score FLOAT
  claimed_by TEXT (nullable, stores admin/claimer identifier)
  claimed_at TIMESTAMPTZ (nullable)

Investor
  id UUID PK
  name TEXT
  slug TEXT UNIQUE
  type TEXT (VC|Angel|Corporate)
  bio TEXT
  aum BIGINT
  portfolio_count INT
  stage_focus TEXT[]
  sector_focus TEXT[]
  location TEXT
  logo_url TEXT
  avg_check_size BIGINT
  fund_number INT

Founder
  id UUID PK
  name TEXT
  slug TEXT UNIQUE
  title TEXT
  company_id UUID -> Company.id
  bio TEXT
  twitter TEXT
  linkedin TEXT
  location TEXT
  photo_url TEXT

Product
  id UUID PK
  company_id UUID -> Company.id
  name TEXT
  slug TEXT UNIQUE
  description TEXT
  category TEXT
  launch_date DATE
  upvotes INT
  website_url TEXT

FundingRound
  id UUID PK
  company_id UUID -> Company.id
  round_type TEXT
  amount BIGINT
  currency TEXT
  date DATE
  lead_investor_id UUID -> Investor.id
  co_investors UUID[] (references Investor.id)

NewsArticle
  id UUID PK
  title TEXT
  url TEXT
  published_at TIMESTAMPTZ
  source TEXT
  tag TEXT
  related_company_ids UUID[] (references Company.id)
  summary TEXT

Tag
  id UUID PK
  name TEXT
  slug TEXT UNIQUE
  type TEXT (company | product | news)

CompanyRelationship
  id UUID PK
  source_company_id UUID -> Company.id
  target_company_id UUID -> Company.id
  relationship_type TEXT (competitor | partner | subsidiary | parent)
  UNIQUE(source_company_id, target_company_id, relationship_type)
```

## Indexes
- `slug` on Company, Investor, Founder, Product, Tag (for fast lookups).
- `category` on Company.
- `stage` on Company.
- `type` on Investor.
- `published_at` on NewsArticle.
- `company_id` on FundingRound and Product (foreign keys).
- `relationship_type` on CompanyRelationship.

## Relationships
- A Company has many Founders, Products, FundingRounds, and NewsArticles.
- A FundingRound has one lead Investor and many co‑investors.
- A NewsArticle can relate to many Companies.
- Companies can be related to each other via CompanyRelationship (competitors, partners, etc.).
- Tags can be applied to Companies, Products, and NewsArticles (polymorphic via `type` field).

## Trending Score
- Stored in `growth_score` column.
- Computed by a background job every hour using the formula defined in the domain model.
- Cached endpoint `/companies/trending` returns top 10 sorted by `growth_score`.

## Caching Strategy
- `growth_score` is updated periodically, so querying by it is efficient.
- In‑memory cache (node‑cache) for `/companies/trending` and `/stats` with TTL 5 minutes.

## Migration
- Prisma migrations are used to version the schema.
- Seed script populates the database with **realistic AI companies**: OpenAI, Anthropic, Mistral AI, Cursor, Perplexity, Midjourney, Runway, Synthesia, Glean, Reka, Hugging Face, Pika, Cohere, xAI, Google DeepMind, and at least 40 others (total 50+).
- **Real investors** (20+): Sequoia Capital, Andreessen Horowitz, Y Combinator, Lightspeed, Accel, General Catalyst, Khosla Ventures, SoftBank, Tiger Global, Microsoft, etc.
- **Real news articles** (100+) from sources like TechCrunch, The Information, Reuters, and official company blogs, with proper published dates and tags.

## Validation
- All URL fields (`website`, `logo_url`, `twitter`, `linkedin`, `photo_url`) are validated using Zod's `.url()` validator.
- Inputs on `POST /companies` and `POST /companies/:slug/claim` are strictly typed and validated via Zod schemas.

## Supabase Setup
- Create a new Supabase project.
- Use the `DATABASE_URL` in `.env`.
- Run `prisma db push` or `prisma migrate deploy`.
- Run seed script: `npm run seed`.
