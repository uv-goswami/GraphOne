# ADR-002: Python for Web Scraping

## Context
GraphOne needs to scrape company data, funding rounds, and news from multiple sources.

## Decision
We will build a separate Python service (FastAPI + BeautifulSoup/Scrapy) for scraping and enrichment. This service will push data to Supabase via API calls.

## Consequences
- Python has superior scraping libraries.
- Separation of concerns: API server remains focused on serving data.
- Additional infrastructure (EC2/container) needed.