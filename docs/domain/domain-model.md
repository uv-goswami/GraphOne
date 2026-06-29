
# GraphOne Domain Model

## Core Concepts
- **Company** – an AI startup or established AI company.
- **Investor** – a venture capital firm, angel, or corporate VC.
- **Founder** – an individual who founded or leads a company.
- **Product** – a specific AI product (e.g., ChatGPT, Claude, Sora).
- **FundingRound** – a financing event for a company.
- **NewsArticle** – a piece of relevant news about a company, product, or the industry.
- **Tag** – a label that can be applied to Companies, Products, or NewsArticles (e.g., "AI Agents", "Open Source").
- **CompanyRelationship** – an explicit edge between two companies, denoting a competitor, partner, subsidiary, or parent relationship.

## Aggregates
- **Company** is the central aggregate. It owns its Products, FundingRounds, Founders, and outgoing/incoming CompanyRelationships.
- **Investor** is an aggregate that contains its portfolio companies (via FundingRound) and its co‑investor network.
- **NewsArticle** is a value object but can be related to multiple Companies.
- **Tag** is a shared value object, used across multiple entity types.

## Business Rules
1. A Company must have a unique `slug`.
2. A FundingRound must have a valid `company_id` and a valid `lead_investor_id`.
3. A Product belongs to exactly one Company.
4. A Founder belongs to exactly one Company (at the time of data capture).
5. A CompanyRelationship must be unique per (source, target, relationship_type).
6. Tags are uniquely identified by `slug` and have a `type` that restricts which entity they attach to.
7. The `/companies/:slug/graph` endpoint returns a 1‑hop graph containing:
   - Direct investors (from FundingRounds)
   - Co‑investors (other investors in the same rounds)
   - Competitors (via CompanyRelationship where relationship_type = 'competitor')
   - Products of the company
   - Tags associated with the company
   - Founders (optional, to enrich the graph)

## Trending Score Formula (Open‑Ended Challenge)

The `growth_score` is computed hourly and stored in the database. The formula uses signals from the schema to capture real momentum:

```
Trending Score =
  (0.25 × Funding Momentum) +
  (0.20 × News Velocity) +
  (0.20 × Employee Growth) +
  (0.15 × Product Upvotes) +
  (0.10 × Investor Quality) +
  (0.10 × Recency Decay)
```

**Definitions:**
- **Funding Momentum:** Sum of all funding round amounts in the last 90 days, multiplied by 1.5 to give extra weight to recent capital.
- **News Velocity:** Number of unique news articles mentioning the company in the last 7 days, with a logarithmic boost (log1p) to smooth out spikes.
- **Employee Growth:** Percentage change in `employee_count` over the last 90 days. If not available, default to 0.
- **Product Upvotes:** Weighted average of upvotes across all products, with a recency boost for products launched in the last 6 months.
- **Investor Quality:** Average of (fund_count / 100) + (log10(AUM) / 5) across all investors that have participated in funding rounds for this company. Normalised to a 0‑1 scale.
- **Recency Decay:** Exponential decay factor: `exp(-days_since_last_activity / 30)`, where `last_activity` is the most recent funding or news date. This ensures older companies naturally drop off.

All signals are normalised to a 0‑1 scale using min‑max scaling across the entire dataset before applying the weights.

## Co‑Investor Logic
- Co‑investors are found by looking at the `co_investors` array in FundingRound.
- For a given investor slug, we collect all rounds they led or co‑invested in.
- We aggregate the frequency of every other investor appearing in the `co_investors` array of those rounds.
- The result is sorted by frequency, with tie‑breakers by average deal size.

## Ecosystem Graph Query (1‑hop)
- Fetch the target Company by slug.
- Fetch all FundingRounds where this company is the target.
- From those rounds, collect all Investors (lead + co‑investors).
- Fetch all CompanyRelationship rows where source = target (competitors/partners).
- Fetch all Products owned by the target.
- Fetch all Tags linked to the target.
- Return a unified structure with `nodes` (distinct entities) and `edges` (relationships: funded_by, co_invested_with, competes_with, owns_product, tagged_as).

## Repository Interfaces
- `CompanyRepository`: find by slug, list with filters, find trending, find graph.
- `InvestorRepository`: find by slug, list, most active, find investments, find co‑investors.
- `ProductRepository`: list by category, find by slug.
- `NewsRepository`: list, find trending.
- `TagRepository`: find by type, attach/detach.
- `CompanyRelationshipRepository`: find by company, create, delete.
- `SearchRepository`: cross‑entity full‑text search over companies, investors, founders, products, and tags.

## Service Layer
- `CompanyService`: orchestrates retrieval of company with related data (funding, products, founders, graph).
- `InvestorService`: retrieves profile, investments, and co‑investor networks.
- `TrendingService`: computes and caches trending score; triggered by the scheduler.
- `FeedService`: builds ranked feed by merging news, funding, and new companies using a recency + relevance score.
- `SearchService`: queries multiple repositories and ranks results.
- `ClaimService`: handles the claim logic, checking for existing claims (CONFLICT).

## Value Objects
- `Slug`: ensures URL‑friendly identifiers.
- `Money`: amount + currency.
- `Stage`: enum (Seed, Series A, etc.).
- `Category`: enum (AI Agents, AI Coding, etc.).
- `RelationshipType`: enum (competitor, partner, subsidiary, parent).
- `TagType`: enum (company, product, news).

## Implementation
- Domain models are implemented as TypeScript classes/interfaces in the `packages/shared` library.
- Prisma models map to the database tables but are used primarily in repositories.
- Services use repositories and return domain objects.
