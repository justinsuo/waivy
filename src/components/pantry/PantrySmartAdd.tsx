"use client";

import { useState } from "react";
import { Loader2, Plus, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/lib/AppStore";
import {
  isWorkerConfigured,
  resolveIngredients,
  type ResolvedIngredient,
} from "@/lib/workerClient";
import {
  findExistingByName,
  getCachedResolution,
  resolvedToCustom,
  saveCustomIngredient,
  setCachedResolution,
} from "@/lib/customIngredientStorage";
import { INGREDIENTS } from "@/data/ingredients";
import { useToast } from "@/components/ui/Toast";
import { hapticLight, hapticSuccess } from "@/lib/haptics";
import { bumpProgress, milestoneMessage } from "@/lib/userProgress";

/**
 * Type or paste a messy ingredient list. The AI groups multi-word
 * ingredients like "apple cider vinegar" and keeps notes like "old" or
 * "half a bag".
 */
export function PantrySmartAdd() {
  const { addPantryItem, pantry } = useAppStore();
  const toast = useToast();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState<ResolvedIngredient[] | null>(null);
  const [ignoredText, setIgnoredText] = useState<string[]>([]);
  const [addedKeys, setAddedKeys] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  if (!isWorkerConfigured()) return null;

  async function resolve() {
    const t = text.trim();
    if (!t) return;
    setLoading(true);
    setError(null);
    setResolved(null);
    setIgnoredText([]);
    setAddedKeys(new Set());
    try {
      let items = getCachedResolution(t);
      if (!items) {
        const res = await resolveIngredients(t, "typed");
        items = res.ingredients;
        setIgnoredText(res.ignoredText || []);
        setCachedResolution(t, items);
      }
      setResolved(items);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't process input");
    } finally {
      setLoading(false);
    }
  }

  function addOne(r: ResolvedIngredient): boolean {
    const existing = findExistingByName(
      r.canonicalName,
      INGREDIENTS.map((i) => ({ name: i.name, id: i.id })),
    );
    let id: string;
    if (existing) {
      id = existing.id;
    } else {
      const custom = resolvedToCustom(r);
      saveCustomIngredient(custom);
      id = custom.id;
    }
    let added = false;
    if (!pantry.some((p) => p.ingredientId === id)) {
      addPantryItem({ ingredientId: id, useSoon: r.useSoon });
      added = true;
    }
    setAddedKeys((prev) => new Set([...prev, r.canonicalName.toLowerCase()]));
    return added;
  }

  function celebratePantryAdds(addedCount: number) {
    if (addedCount <= 0) return;
    const count = bumpProgress("pantryItemsAdded", addedCount);
    const milestone = milestoneMessage("pantryItemsAdded", count);
    if (milestone) toast.reward(milestone);
  }

  function handleAddOne(r: ResolvedIngredient) {
    hapticLight();
    const added = addOne(r);
    if (added) celebratePantryAdds(1);
  }

  function addAll() {
    if (!resolved) return;
    let addedCount = 0;
    for (const r of resolved) {
      if (addOne(r)) addedCount += 1;
    }
    if (addedCount > 0) {
      hapticSuccess();
      celebratePantryAdds(addedCount);
    }
  }

  return (
    <section className="rounded-3xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40/50 p-5 sm:p-6">
      <div>
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-300">
          <Sparkles size={16} /> Smart paste
        </h2>
        <p className="mt-1 text-sm text-amber-900 dark:text-amber-300">
          Type or paste any ingredient list — even messy. The AI groups
          multi-word items like &ldquo;apple cider vinegar&rdquo; correctly.
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="apple cider vinegar, eggs, half a bag of frozen broccoli, laoganma chili crisp, old tortillas"
          className="w-full rounded-2xl border border-line bg-surface p-3 text-sm focus:border-emerald-400 focus:outline-none"
        />
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={resolve}
            disabled={!text.trim() || loading}
            leftIcon={
              loading ? (
                <Loader2 size={14} className="animate-spin" />
              ) : (
                <Sparkles size={14} />
              )
            }
            size="sm"
          >
            {loading ? "Understanding…" : "Understand & add"}
          </Button>
          {(resolved || text) && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                setText("");
                setResolved(null);
                setIgnoredText([]);
                setAddedKeys(new Set());
                setError(null);
              }}
            >
              Clear
            </Button>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-3 flex items-start gap-2 rounded-2xl bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm text-red-800 dark:text-red-300">
          <AlertCircle size={16} className="mt-0.5 flex-none" /> {error}
        </div>
      )}

      {resolved && (
        <div className="mt-4 rounded-2xl bg-surface p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink">
              Recognized ({resolved.length})
            </h3>
            {resolved.length > 0 && (
              <Button size="sm" leftIcon={<Plus size={14} />} onClick={addAll}>
                Add all
              </Button>
            )}
          </div>
          {resolved.length === 0 ? (
            <p className="mt-2 text-sm text-ink-muted">
              Didn&apos;t recognize any ingredients here.
            </p>
          ) : (
            <div className="mt-3 flex flex-wrap gap-2">
              {resolved.map((r, idx) => {
                const key = r.canonicalName.toLowerCase();
                const already = addedKeys.has(key);
                return (
                  <button
                    key={`${key}-${idx}`}
                    disabled={already}
                    onClick={() => handleAddOne(r)}
                    title={`${r.category} · ${r.ingredientRole}`}
                    className={
                      already
                        ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300"
                        : "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink hover:border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:bg-emerald-950/40"
                    }
                  >
                    {already ? <CheckCircle2 size={12} /> : <Plus size={12} />}
                    {r.displayName || r.canonicalName}
                    {r.useSoon && (
                      <span className="ml-0.5 rounded-full bg-amber-200 px-1.5 text-[10px] font-semibold text-amber-900 dark:text-amber-300">
                        use soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
          {ignoredText.length > 0 && (
            <p className="mt-3 text-xs text-ink-muted">
              Skipped non-food: {ignoredText.join(", ")}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
