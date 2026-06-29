# ADR-006: TF‑IDF Clustering for Company Similarity

## Context
We need to find similar companies based on descriptions and categories.

## Decision
Use TF‑IDF vectorisation and cosine similarity on company descriptions. Cluster companies using k‑means for "similar companies" recommendations.

## Consequences
- Simple and interpretable.
- Computed offline and cached (not real‑time).
- Requires periodic re‑computation.