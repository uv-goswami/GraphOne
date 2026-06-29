import NodeCache from 'node-cache';

const TTL = Number(process.env.CACHE_TTL) || 300;
export const cache = new NodeCache({
  stdTTL: TTL,
  checkperiod: TTL * 0.2,
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