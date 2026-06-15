/**
 * Multiple saved pantries.
 *
 * The ACTIVE pantry's items live in `srf:pantry` — the single key every screen
 * and the recipe/cost engines already read — so all existing code is untouched.
 * `srf:pantries` stores the named list, `srf:active-pantry` the active id. The
 * active entry's items are reconciled from `srf:pantry` on read, so live edits
 * (even ones made on the website) always win.
 */
import { useCallback, useEffect } from "react";
import { kv } from "@shared/platform/kv";
import { storage } from "@/lib/storage";
import { useKVRaw } from "../store";
import { randomMeaningfulPantry } from "~/lib/surprise";
import type { PantryItem } from "@/lib/types";

export type SavedPantry = { id: string; name: string; items: PantryItem[] };

const K_LIST = "srf:pantries";
const K_ACTIVE = "srf:active-pantry";
const SURPRISE_NAME = "🎲 Surprise";

function read<T>(key: string, fallback: T): T {
  try {
    const r = kv().getItem(key);
    return r ? (JSON.parse(r) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, v: unknown) {
  kv().setItem(key, JSON.stringify(v));
}
function newId(): string {
  return "pan-" + Math.random().toString(36).slice(2, 9);
}

function storedList(): SavedPantry[] | null {
  const r = read<SavedPantry[] | null>(K_LIST, null);
  return Array.isArray(r) && r.length ? r : null;
}
// Pure (no writes) so it's safe to call during render.
function listOrDefault(): SavedPantry[] {
  return storedList() ?? [{ id: "default", name: "My Pantry", items: storage.getPantry() }];
}
function activeId(): string {
  const list = listOrDefault();
  const id = read<string>(K_ACTIVE, "");
  return id && list.some((p) => p.id === id) ? id : list[0]?.id ?? "default";
}
// Active entry's items always reflect the live srf:pantry.
function reconciled(): SavedPantry[] {
  const id = activeId();
  const live = storage.getPantry();
  return listOrDefault().map((p) => (p.id === id ? { ...p, items: live } : p));
}
// Persist the live active items into the list (before switching away).
function persistLive(list: SavedPantry[]): SavedPantry[] {
  const id = activeId();
  const live = storage.getPantry();
  return list.map((p) => (p.id === id ? { ...p, items: live } : p));
}

export function usePantries() {
  useKVRaw(K_LIST);
  useKVRaw(K_ACTIVE);
  useKVRaw("srf:pantry");

  // One-time migration of the legacy single pantry into the named list.
  useEffect(() => {
    if (!storedList()) {
      write(K_LIST, listOrDefault());
      write(K_ACTIVE, "default");
    }
  }, []);

  const pantries = reconciled();
  const active = activeId();

  const switchTo = useCallback((id: string) => {
    const list = persistLive(listOrDefault());
    const target = list.find((p) => p.id === id);
    if (!target) return;
    write(K_LIST, list);
    write(K_ACTIVE, id);
    storage.setPantry(target.items);
  }, []);

  const createPantry = useCallback((name: string, copyCurrent = false) => {
    const list = persistLive(listOrDefault());
    const id = newId();
    const items = copyCurrent ? storage.getPantry() : [];
    write(K_LIST, [...list, { id, name: name.trim() || `Pantry ${list.length + 1}`, items }]);
    write(K_ACTIVE, id);
    storage.setPantry(items);
    return id;
  }, []);

  const rename = useCallback((id: string, name: string) => {
    if (!name.trim()) return;
    write(K_LIST, listOrDefault().map((p) => (p.id === id ? { ...p, name: name.trim() } : p)));
  }, []);

  const removePantry = useCallback((id: string) => {
    let list = listOrDefault().filter((p) => p.id !== id);
    if (list.length === 0) list = [{ id: "default", name: "My Pantry", items: [] }];
    write(K_LIST, list);
    if (activeId() === id) {
      write(K_ACTIVE, list[0].id);
      storage.setPantry(list[0].items);
    }
  }, []);

  // Roll a fresh, meaningful random pantry into a dedicated "🎲 Surprise" pantry
  // and switch to it — so your curated pantries are never overwritten. Repeated
  // shuffles re-roll the same Surprise pantry. Returns its name.
  const shuffle = useCallback(() => {
    const items = randomMeaningfulPantry().map((ingredientId) => ({ ingredientId }));
    const list = persistLive(listOrDefault());
    const existing = list.find((p) => p.name === SURPRISE_NAME);
    const id = existing ? existing.id : newId();
    const next = existing
      ? list.map((p) => (p.id === id ? { ...p, items } : p))
      : [...list, { id, name: SURPRISE_NAME, items }];
    write(K_LIST, next);
    write(K_ACTIVE, id);
    storage.setPantry(items);
    return SURPRISE_NAME;
  }, []);

  return { pantries, active, switchTo, createPantry, rename, removePantry, shuffle };
}
