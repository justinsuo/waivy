"use client";

/**
 * Data & privacy helpers for the Settings page: export everything as JSON,
 * clear individual data categories, or reset everything. All operate on the
 * `srf:*` localStorage namespace directly.
 */

export const DATA_CATEGORIES = {
  pantry: { label: "Pantry", keys: ["srf:pantry"] },
  grocery: { label: "Grocery list", keys: ["srf:grocery"] },
  saved: { label: "Saved recipes", keys: ["srf:saved"] },
  custom: {
    label: "Custom & AI recipes",
    keys: ["srf:custom-recipes", "srf:custom-recipe-images"],
  },
  images: {
    label: "AI image cache",
    keys: ["srf:custom-recipe-images", "srf:cook-step-images"],
  },
} as const;

export type DataCategory = keyof typeof DATA_CATEGORIES;

function allSrfKeys(): string[] {
  if (typeof window === "undefined") return [];
  const keys: string[] = [];
  try {
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith("srf:")) keys.push(k);
    }
  } catch {
    /* ignore */
  }
  return keys;
}

function safeParse(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

/** Collect every `srf:*` key into a plain object for download. */
export function exportAllData(): Record<string, unknown> {
  const out: Record<string, unknown> = {
    _meta: { app: "Waivy", exportedAt: new Date().toISOString() },
  };
  if (typeof window === "undefined") return out;
  for (const k of allSrfKeys()) {
    const raw = window.localStorage.getItem(k);
    out[k] = raw ? safeParse(raw) : null;
  }
  return out;
}

/** Trigger a client-side JSON file download. */
export function downloadJson(filename: string, data: unknown): void {
  if (typeof window === "undefined") return;
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Remove the keys for one data category. */
export function clearCategory(category: DataCategory): void {
  if (typeof window === "undefined") return;
  for (const k of DATA_CATEGORIES[category].keys) {
    try {
      window.localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  }
}

/** Remove every `srf:*` key (full reset). */
export function resetEverything(): void {
  if (typeof window === "undefined") return;
  for (const k of allSrfKeys()) {
    try {
      window.localStorage.removeItem(k);
    } catch {
      /* ignore */
    }
  }
}
