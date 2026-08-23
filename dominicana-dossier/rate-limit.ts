type Bucket = { count: number; resetAt: number };

const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 8;
const buckets = new Map<string, Bucket>();

function prune(now: number) {
  if (buckets.size < 200) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function consumeUnlockAttempt(ip: string): {
  ok: boolean;
  retryAfterSec: number;
} {
  const now = Date.now();
  prune(now);
  const current = buckets.get(ip);
  if (!current || current.resetAt <= now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfterSec: Math.ceil(WINDOW_MS / 1000) };
  }
  if (current.count >= MAX_ATTEMPTS) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }
  current.count += 1;
  return { ok: true, retryAfterSec: Math.ceil((current.resetAt - now) / 1000) };
}
