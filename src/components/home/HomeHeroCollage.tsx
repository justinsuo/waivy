"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Coins } from "lucide-react";
import type { Recipe } from "@/lib/types";
import { RECIPE_IMAGES } from "@/data/recipeImages";
import { calculateCostPerServing } from "@/lib/recipeScoring";
import { pickHomeShowcase } from "@/lib/homeShowcase";

/**
 * Hero collage (one big featured card + two square cards). Rotates on mount so
 * the home spotlight is different each visit. First render uses the deterministic
 * top of the pool to keep the static HTML and first client render in sync.
 * Every pool item is guaranteed to have a photo (pool is built from
 * recipes-with-photos), so the imagery never falls back here.
 */
export function HomeHeroCollage({ pool }: { pool: Recipe[] }) {
  const [picks, setPicks] = useState<Recipe[]>(() => pool.slice(0, 3));

  useEffect(() => {
    // Reseed after mount only — keeps the static HTML and first client render in
    // sync (no hydration mismatch), then rotates the spotlight. pool is stable.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPicks(pickHomeShowcase(pool, 3, Date.now(), { maxSweet: 1, maxPerCuisine: 1 }));
  }, [pool]);

  const featured = picks[0];
  const secondaries = picks.slice(1, 3);
  if (!featured) return null;

  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-3 sm:gap-4">
        <Link
          href={`/recipes/${featured.id}`}
          className="group relative col-span-2 overflow-hidden rounded-3xl shadow-md motion-safe:animate-[fadeUp_700ms_ease-out_both]"
          style={{ aspectRatio: "16 / 10", animationDelay: "120ms" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={RECIPE_IMAGES[featured.id].src}
            alt={RECIPE_IMAGES[featured.id].alt || featured.name}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow shadow-emerald-900/30">
            <Coins size={11} /> ${calculateCostPerServing(featured).toFixed(2)}/serving
          </span>
          <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink backdrop-blur">
            Fresh pick
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-5">
            <p className="text-base font-semibold sm:text-lg">{featured.name}</p>
            <p className="mt-1 text-xs sm:text-sm">
              {featured.totalTimeMinutes} min ·{" "}
              {featured.estimatedNutrition.protein}g protein ·{" "}
              {featured.estimatedNutrition.calories} cal
            </p>
          </div>
        </Link>
        {secondaries.map((r, i) => (
          <Link
            key={r.id}
            href={`/recipes/${r.id}`}
            className="group relative aspect-square overflow-hidden rounded-3xl shadow-sm motion-safe:animate-[fadeUp_700ms_ease-out_both]"
            style={{ animationDelay: `${260 + i * 110}ms` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={RECIPE_IMAGES[r.id].src}
              alt={RECIPE_IMAGES[r.id].alt || r.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <p className="text-sm font-semibold leading-tight">{r.name}</p>
              <p className="mt-0.5 text-[11px] opacity-90">
                ${calculateCostPerServing(r).toFixed(2)}/serving
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
