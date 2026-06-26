"use client";

import { useEffect, useState } from "react";
import type { Recipe } from "@/lib/types";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { pickHomeShowcase } from "@/lib/homeShowcase";

/**
 * The home "cheapest picks" grid, but it rotates. The first render shows the
 * deterministic top of the pool (so the statically-exported HTML and the first
 * client render match — no hydration mismatch); after mount it reseeds to a
 * fresh, baking-capped, varied set so each visit/refresh looks different.
 */
export function RotatingShowcase({
  pool,
  count = 6,
}: {
  pool: Recipe[];
  count?: number;
}) {
  const [items, setItems] = useState<Recipe[]>(() => pool.slice(0, count));

  useEffect(() => {
    // Intentional: reseed AFTER mount so the static HTML and the first client
    // render stay identical (no hydration mismatch), then rotate to a fresh set.
    // pool/count are stable props, so this runs once per page load.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(pickHomeShowcase(pool, count, Date.now()));
  }, [pool, count]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}
