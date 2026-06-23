"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import { bestEffortNutrition } from "@/lib/nutritionEngine";
import type { Recipe } from "@/lib/types";
import type { DayTotals, TargetSnapshot } from "@/lib/nourish/types";
import { findMacroFitRecipes } from "@/lib/nourish/recipeIntegration";

interface Props {
  recipes: Recipe[];
  targets: TargetSnapshot;
  consumed: DayTotals;
}

export function MacroFitSuggestions({ recipes, targets, consumed }: Props) {
  const remaining = {
    kcal: Math.max(0, targets.calorieTarget - consumed.kcal),
    proteinG: Math.max(0, targets.proteinG - consumed.proteinG),
    carbG: Math.max(0, targets.carbG - consumed.carbG),
    fatG: Math.max(0, targets.fatG - consumed.fatG),
  };

  if (remaining.kcal < 100) return null;

  const fits = findMacroFitRecipes(
    recipes,
    remaining.kcal,
    remaining.proteinG,
    remaining.carbG,
    remaining.fatG,
  );

  if (fits.length === 0) return null;

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-ink-muted">
        Fits your remaining budget
        <span className="ml-1.5 text-xs font-normal text-ink-faint">
          ~{Math.round(remaining.kcal)} kcal left
        </span>
      </h3>
      <div className="space-y-1.5">
        {fits.map((recipe) => {
          const { estimate } = bestEffortNutrition(recipe);
          return (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className={clsx(
                "flex items-center justify-between rounded-xl border border-line bg-surface px-3 py-2.5 transition-all hover:border-emerald-200 dark:border-emerald-900 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xl shrink-0" aria-hidden>{recipe.emoji}</span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{recipe.name}</p>
                  <p className="text-[10px] text-ink-faint">
                    {estimate.calories} kcal · {estimate.protein}g P · {estimate.carbs}g C · {estimate.fat}g F
                  </p>
                </div>
              </div>
              <ArrowRight size={14} className="shrink-0 text-stone-300" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
