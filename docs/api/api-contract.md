# GraphOne API Contract

## Base URL
`https://api.graphone.dev/v1` (or your deployed URL)

## Common Response Format
All responses are JSON objects with the following shape:

```json
{
  "data": object | array | null,
  "meta": {
    "pagination": { "next_cursor": string | null, "limit": number },
    "timestamp": "2026-06-29T12:00:00Z"
  },
  "error": null | { "code": "NOT_FOUND", "message": "string" }
}
```

## Authentication
- Read endpoints: no auth required.
- Write endpoints (POST, PUT, DELETE): require `X-API-Key` header (admin key).

## Rate Limiting
- 100 requests per minute per IP (standard endpoints).
- Admin endpoints (POST, PUT, DELETE) have a higher limit: 200 requests per minute per IP.
- Returns `429 Too Many Requests` with `Retry-After` header.

## Caching
- `GET /companies/trending` and `GET /stats` are cached in‑memory with TTL = 5 minutes.

---

## Endpoints

### Companies
| Method | Path | Description |
|--------|------|-------------|
| GET | `/companies` | List companies with filters: `category`, `stage`, `country`, `sort=trending\|funded\|new`, `limit`, `cursor` |
| GET | `/companies/:slug` | Full company profile including founders, funding rounds, products, investors |
| GET | `/companies/:slug/funding` | Funding rounds timeline |
| GET | `/companies/:slug/products` | Products of the company |
| GET | `/companies/trending` | Top 10 companies by trending score (cached) |
| GET | `/companies/:slug/graph` | 1‑hop ecosystem graph (investors, co‑investors, competitors, products, tags) |
| POST | `/companies` | Create a new company (admin only). **URL validation required** on `website` and `logo_url`. |
| POST | `/companies/:slug/claim` | Claim a company profile (requires API key). Returns `200` or `409` if already claimed. |

### Investors
| Method | Path | Description |
|--------|------|-------------|
| GET | `/investors` | List investors with filters: `type`, `stage_focus`, `sector`, `limit`, `cursor` |
| GET | `/investors/:slug` | Full investor profile + portfolio breakdown |
| GET | `/investors/most-active` | Ranked by deal count (last 90 days) |
| GET | `/investors/:slug/investments` | Paginated investment history (funding rounds this investor participated in) |
| GET | `/investors/:slug/co-investors` | Syndication partners and frequency |

### Feed
| Method | Path | Description |
|--------|------|-------------|
| GET | `/feed` | Ranked activity feed (news, funding rounds, new companies) based on recency + relevance score |

### Products & News
| Method | Path | Description |
|--------|------|-------------|
| GET | `/products` | List products with `category` filter and sort by `popular`/`newest` |
| GET | `/products/:slug` | Product detail |
| GET | `/news` | Paginated news feed with `tag` filter |
| GET | `/news/trending` | Most read news in the last 24 hours |

### Search
| Method | Path | Description |
|--------|------|-------------|
| GET | `/search?q=` | Cross‑entity search (companies, investors, founders, products, tags) |

### Stats
| Method | Path | Description |
|--------|------|-------------|
| GET | `/stats` | Aggregate counts and totals (cached) |

### Founders
| Method | Path | Description |
|--------|------|-------------|
| GET | `/founders/:slug` | Founder profile with linked companies |

---

## Validation Rules
- All `POST` and `PUT` inputs must be validated using **Zod**.
- `website`, `logo_url`, `linkedin`, `twitter`, `photo_url` must be valid URLs (Zod `.url()`).
- `slug` must be URL‑friendly (lowercase, alphanumeric, hyphens only).

## Error Codes
| Code | Meaning |
|------|---------|
| `BAD_REQUEST` | Malformed request or validation failure |
| `UNAUTHORIZED` | Missing or invalid API key |
| `FORBIDDEN` | Authenticated but not allowed to perform this action |
| `NOT_FOUND` | Resource does not exist |
| `CONFLICT` | Resource already exists (e.g., claim already taken) |
| `RATE_LIMITED` | Too many requests |
| `INTERNAL_ERROR` | Server error |

---

## Example Requests

### List companies (trending)
```
GET /companies?sort=trending&limit=10
```

### Company detail
```
GET /companies/openai
```

### Trending companies (cached)
```
GET /companies/trending
```

### Ecosystem graph
```
GET /companies/openai/graph
```

### Investor investments
```
GET /investors/sequoia/investments?limit=20&cursor=abc123
```

### Activity feed
```
GET /feed?limit=20
```

### Claim a company
```
POST /companies/openai/claim
X-API-Key: your-admin-key
