import NodeCache from 'node-cache';

// Create a cache instance with default TTL (5 minutes)
const TTL = Number(process.env.CACHE_TTL) || 300; // 5 minutes in seconds

export const cache = new NodeCache({
  stdTTL: TTL,
  checkperiod: TTL * 0.2, // Check for expired keys every 20% of TTL
});

export function getCached<T>(key: string): T | undefined {
  return cache.get<T>(key);
}

export function setCache<T>(key: string, value: T, ttl?: number): boolean {
  return cache.set(key, value, ttl);
}

export function deleteCache(key: string): number {
  return cache.del(key);
}

export function clearCache(): void {
  cache.flushAll();
}