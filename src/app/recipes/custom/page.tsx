"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Clock,
  Coins,
  Flame,
  Sparkles,
  ChefHat,
  Loader2,
  ImagePlus,
  RefreshCw,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  getCustomRecipe,
  getStoredRecipeImage,
  imageDataUrl,
  saveCustomRecipe,
  storeRecipeImage,
} from "@/lib/customRecipeStorage";
import {
  generateRecipeImage,
  isWorkerConfigured,
} from "@/lib/workerClient";
import { useAppStore } from "@/lib/AppStore";
import type { CustomRecipe } from "@/lib/customRecipeTypes";

// Safe formatter — AI-saved recipes occasionally have missing/non-numeric costs.
function money(n: unknown): string {
  const v = typeof n === "number" ? n : Number(n);
  return Number.isFinite(v) ? v.toFixed(2) : "—";
}

export default function CustomRecipePageWrapper() {
  return (
    <Suspense fallback={<div className="text-ink-muted">Loading…</div>}>
      <CustomRecipePage />
    </Suspense>
  );
}

function CustomRecipePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") ?? "";
  const { isSaved, toggleSaved } = useAppStore();
  const [recipe, setRecipe] = useState<CustomRecipe | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);

  async function handleGenerateImage() {
    if (!recipe) return;
    setImageError(null);
    setImageLoading(true);
    try {
      const img = await generateRecipeImage({
        recipeName: recipe.name,
        ingredients: recipe.ingredients.map((i) => i.name).slice(0, 8),
        method: recipe.primaryCookingMethod,
      });
      let src: string | undefined;
      if (img.b64_json) {
        const stored = storeRecipeImage(id, img.b64_json, {
          prompt: img.prompt,
          model: img.model,
        });
        if (stored.ok) src = imageDataUrl(img.b64_json);
      } else if (img.url) {
        src = img.url;
      }
      if (!src) throw new Error("No image returned");
      setImageSrc(src);
      saveCustomRecipe({
        ...recipe,
        image: {
          src,
          alt: recipe.name,
          sourceName: "AI generated",
          license: "Generated image",
          isAIGenerated: true,
          isFallback: false,
          generatedPrompt: img.prompt,
          generatedAt: new Date().toISOString(),
          model: img.model,
        },
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Image generation failed";
      setImageError(
        /verified|verification|organization|403|401/i.test(msg)
          ? "Image generation needs OpenAI organization verification. Add a phone number at platform.openai.com/settings/organization/general."
          : msg,
      );
    } finally {
      setImageLoading(false);
    }
  }

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    if (!id) {
      setRecipe(null);
      setImageSrc(null);
      return;
    }
    const r = getCustomRecipe(id);
    setRecipe(r ?? null);
    if (r) {
      let src = r.image?.src;
      if (!src) {
        const stored = getStoredRecipeImage(id);
        if (stored?.b64) src = imageDataUrl(stored.b64);
      }
      setImageSrc(src ?? null);
    } else {
      // Recipe id changed to one that no longer exists — clear the
      // previous image src so a stale image doesn't render under
      // "Recipe not found".
      setImageSrc(null);
    }
  }, [id]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!id || !recipe) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-line bg-surface px-6 py-20 text-center">
        <div className="mb-3 text-6xl" aria-hidden>
          🍳
        </div>
        <h1 className="text-2xl font-bold text-ink">Recipe not found</h1>
        <p className="mt-2 max-w-md text-sm text-ink-muted">
          This generated/custom recipe lives only in this browser&apos;s
          storage. It may have been cleared.
        </p>
        <Link
          href="/saved"
          className="mt-5 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Back to saved
        </Link>
      </div>
    );
  }

  const saved = isSaved(id);

  return (
    <div className="space-y-8">
      <Link
        href="/saved"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-emerald-700 dark:text-emerald-300"
      >
        <ArrowLeft size={14} /> Back to saved
      </Link>

      <div className="overflow-hidden rounded-3xl shadow-sm">
        <div className="relative aspect-[16/9] bg-surface-sunken">
          {imageSrc ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={recipe.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={handleGenerateImage}
                disabled={imageLoading || !isWorkerConfigured()}
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur transition-colors hover:bg-surface disabled:opacity-60"
                title="Generate a new image — replaces the current one"
              >
                {imageLoading ? (
                  <>
                    <Loader2 size={12} className="animate-spin" /> Regenerating…
                  </>
                ) : (
                  <>
                    <RefreshCw size={12} /> Regenerate image
                  </>
                )}
              </button>
              {imageError && (
                <div className="absolute bottom-14 left-3 right-3 rounded-xl bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs text-red-700 dark:text-red-300 shadow-sm">
                  {imageError}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-emerald-100 to-amber-50 px-6 text-ink-muted">
              {imageLoading ? (
                <>
                  <Loader2 size={32} className="animate-spin text-emerald-600 dark:text-emerald-400" />
                  <p className="text-xs uppercase tracking-wide">
                    Generating image…
                  </p>
                </>
              ) : (
                <>
                  <ChefHat size={48} />
                  <p className="text-xs uppercase tracking-wide">
                    No image yet
                  </p>
                  <Button
                    onClick={handleGenerateImage}
                    disabled={!isWorkerConfigured()}
                    size="sm"
                    leftIcon={<ImagePlus size={14} />}
                  >
                    Generate image
                  </Button>
                  {imageError && (
                    <p className="max-w-xs text-center text-xs text-red-700 dark:text-red-300">
                      {imageError}
                    </p>
                  )}
                </>
              )}
            </div>
          )}
          <div className="absolute right-3 top-3">
            {recipe.isAIGenerated ? (
              <Badge tone="violet">
                <Sparkles size={11} className="mr-1" /> AI Generated
              </Badge>
            ) : (
              <Badge tone="emerald">Created by you</Badge>
            )}
          </div>
        </div>
      </div>

      <header className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge tone="green" icon={<Coins size={12} />}>
            ${money(recipe.estimatedCostPerServing)}/serving
          </Badge>
          <Badge tone="amber" icon={<Clock size={12} />}>
            {recipe.totalTimeMinutes} min
          </Badge>
          <Badge tone="stone" icon={<Flame size={12} />}>
            {recipe.difficulty}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold text-ink sm:text-4xl">
          {recipe.name}
        </h1>
        <p className="text-ink-muted">{recipe.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href={`/recipes/cook?id=${id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px hover:bg-emerald-700"
          >
            <ChefHat size={14} /> Cook step-by-step <ArrowRight size={14} />
          </Link>
          <Button
            variant="outline"
            onClick={() => toggleSaved(id)}
            leftIcon={
              saved ? (
                <BookmarkCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
              ) : (
                <Bookmark size={16} />
              )
            }
          >
            {saved ? "Saved" : "Save recipe"}
          </Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Ingredients
          </h2>
          <ul className="mt-3 divide-y divide-stone-100">
            {recipe.ingredients.map((ing, i) => (
              <li
                key={i}
                className="flex items-center justify-between py-2 text-sm"
              >
                <div>
                  <p className="font-medium text-ink">
                    {ing.name}{" "}
                    {ing.optional && (
                      <span className="text-xs text-ink-muted">(optional)</span>
                    )}
                  </p>
                  <p className="text-xs text-ink-muted">
                    {ing.quantity} {ing.unit}
                  </p>
                </div>
                <p className="font-medium text-ink">
                  ${money(ing.estimatedCost)}
                </p>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Steps
          </h2>
          <ol className="mt-3 space-y-3">
            {recipe.steps.map((s, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      {recipe.estimatedNutrition && (
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            🥗 Nutrition per serving
          </h2>
          <p className="mt-1 text-xs text-ink-muted">
            {recipe.isAIGenerated
              ? "Calculated from ingredient matches · estimated"
              : "From recipe author · estimated"}
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3">
            <NutritionCell label="Calories" value={recipe.estimatedNutrition.calories} unit="" />
            <NutritionCell label="Protein" value={recipe.estimatedNutrition.protein} unit="g" highlight />
            <NutritionCell label="Carbs" value={recipe.estimatedNutrition.carbs} unit="g" />
            <NutritionCell label="Fat" value={recipe.estimatedNutrition.fat} unit="g" />
          </div>
          {typeof recipe.estimatedNutrition.fiber === "number" && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              <NutritionCell label="Fiber" value={recipe.estimatedNutrition.fiber} unit="g" />
            </div>
          )}
          <p className="mt-3 text-xs text-ink-muted">
            Estimated from ingredients and serving size. Actual values vary by brand and preparation.
          </p>
        </Card>
      )}

      {(recipe.cheapTips?.length ?? 0) > 0 && (
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-300">
            Why it&apos;s cheap
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-ink-muted">
            {recipe.cheapTips!.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </Card>
      )}

      {recipe.storageInstructions && (
        <Card>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
            Storage &amp; reheating
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            {recipe.storageInstructions}
          </p>
          {recipe.reheatingInstructions && (
            <p className="mt-1 text-sm text-ink-muted">
              {recipe.reheatingInstructions}
            </p>
          )}
        </Card>
      )}
    </div>
  );
}

function NutritionCell({
  label,
  value,
  unit,
  highlight,
}: {
  label: string;
  value: number;
  unit: string;
  highlight?: boolean;
}) {
  const safe = Number.isFinite(Number(value)) ? Number(value) : 0;
  return (
    <div
      className={
        highlight
          ? "rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 px-3 py-3 text-center"
          : "rounded-2xl bg-surface-sunken px-3 py-3 text-center"
      }
    >
      <p
        className={
          highlight ? "text-xs font-medium text-emerald-800 dark:text-emerald-300" : "text-xs font-medium text-ink-muted"
        }
      >
        {label}
      </p>
      <p
        className={
          highlight
            ? "text-lg font-bold text-emerald-900 dark:text-emerald-300"
            : "text-lg font-bold text-ink"
        }
      >
        {safe}
        {unit}
      </p>
    </div>
  );
}
