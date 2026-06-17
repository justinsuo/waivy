/**
 * Premium-audio cache. Keyed by hash(text) + voiceId + rate so the same
 * spoken line is fetched from the worker at most once.
 *
 *  - Session tier: an in-memory Map<key, Blob> (always on).
 *  - Cross-session tier: IndexedDB (best-effort; silently disabled if the
 *    browser blocks it, e.g. private mode). Audio blobs are kibibytes–hundreds
 *    of KB — they must NEVER touch localStorage, which is near its budget from
 *    recipe images.
 */

const DB_NAME = "waivy-tts";
const STORE = "audio";
const MEM_MAX = 60; // cap session map so a long cook session can't grow forever

// ── hashing (FNV-1a, 32-bit) ──────────────────────────────────────────────
function hashText(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16);
}

export function cacheKey(text: string, voiceId: string, rate: number): string {
  return `${voiceId}|${rate.toFixed(2)}|${hashText(text)}`;
}

// ── session (in-memory) ───────────────────────────────────────────────────
const mem = new Map<string, Blob>();

function memSet(key: string, blob: Blob) {
  if (mem.has(key)) mem.delete(key); // refresh LRU position
  mem.set(key, blob);
  if (mem.size > MEM_MAX) {
    const oldest = mem.keys().next().value;
    if (oldest !== undefined) mem.delete(oldest);
  }
}

// ── IndexedDB (cross-session, best-effort) ────────────────────────────────
let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(null);
    let req: IDBOpenDBRequest;
    try {
      req = indexedDB.open(DB_NAME, 1);
    } catch {
      return resolve(null);
    }
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => resolve(null);
  });
  return dbPromise;
}

function idbGet(key: string): Promise<Blob | null> {
  return openDb().then(
    (db) =>
      new Promise<Blob | null>((resolve) => {
        if (!db) return resolve(null);
        try {
          const tx = db.transaction(STORE, "readonly");
          const req = tx.objectStore(STORE).get(key);
          req.onsuccess = () =>
            resolve(req.result instanceof Blob ? req.result : null);
          req.onerror = () => resolve(null);
        } catch {
          resolve(null);
        }
      }),
  );
}

function idbPut(key: string, blob: Blob): Promise<void> {
  return openDb().then(
    (db) =>
      new Promise<void>((resolve) => {
        if (!db) return resolve();
        try {
          const tx = db.transaction(STORE, "readwrite");
          tx.objectStore(STORE).put(blob, key);
          tx.oncomplete = () => resolve();
          tx.onerror = () => resolve();
        } catch {
          resolve();
        }
      }),
  );
}

/** Look up cached audio (session first, then IndexedDB). */
export async function getCachedAudio(key: string): Promise<Blob | null> {
  const hit = mem.get(key);
  if (hit) return hit;
  const fromDb = await idbGet(key);
  if (fromDb) memSet(key, fromDb);
  return fromDb;
}

/** Store audio in both tiers. */
export async function putCachedAudio(key: string, blob: Blob): Promise<void> {
  memSet(key, blob);
  await idbPut(key, blob);
}
