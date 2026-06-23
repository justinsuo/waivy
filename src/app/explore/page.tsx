"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Search,
  Globe,
  Clock,
  SlidersHorizontal,
  X,
  Star,
  Info,
  Sparkles,
} from "lucide-react";
import type { ExploreFilters, ExternalRecipe } from "@/lib/externalTypes";
import { searchExternalRecipes } from "@/lib/services/exploreService";
import { resolveRecipeImage, getCuisineGradient } from "@/lib/foodPhotos";
import { SkeletonRecipeGrid } from "@/components/ui/SkeletonRecipeCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";

// ─── Filter option lists ──────────────────────────────────────────────────────

const CUISINES = [
  "Chinese", "Japanese", "Korean", "Thai", "Vietnamese", "Indian",
  "Italian", "French", "Mexican", "Greek", "Moroccan", "Lebanese",
  "Turkish", "American", "Spanish", "Brazilian", "Jamaican", "Ethiopian",
];

const DIETS = [
  "vegetarian", "vegan", "gluten-free", "dairy-free", "keto", "paleo",
];
const TIMES = [
  { label: "≤15 min", value: 15 },
  { label: "≤30 min", value: 30 },
  { label: "≤60 min", value: 60 },
];

const DEFAULT_FILTERS: ExploreFilters = {
  query: "",
  cuisine: "",
  region: "",
  diet: "",
  mealType: "",
  difficulty: "",
  maxTime: null,
  maxCost: null,
  spiceLevel: null,
  proteinType: "",
  studentMode: false,
  sort: "popular",
  page: 1,
};

// ─── Recipe Card ──────────────────────────────────────────────────────────────
//
// Every card always renders the same row order so missing metadata never
// makes one card look broken next to another:
//   1. Image (with seeded picsum fallback)
//   2. Cuisine pill, overlaid bottom-left of image
//   3. Title (always)
//   4. Meta row: time + difficulty (graceful fallbacks)
//   5. Rating row (always — shows "Not rated" if unrated)
//   6. Diet chips (always — shows "—" if none)

function ExploreCard({
  recipe,
  onClick,
}: {
  recipe: ExternalRecipe;
  onClick: () => void;
}) {
  const time = recipe.totalTimeMinutes;
  const difficulty = recipe.difficulty;
  const [imgErrored, setImgErrored] = useState(false);
  const photoUrl = resolveRecipeImage(recipe);
  const showImage = photoUrl && !imgErrored;

  return (
    <button
      onClick={onClick}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-sunken">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={recipe.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgErrored(true)}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 p-4"
            style={{ background: getCuisineGradient(recipe.cuisine ?? "") }}
          >
            <span className="text-3xl" aria-hidden>🍽️</span>
            <span className="text-center text-xs font-semibold text-white/90 leading-snug line-clamp-2">
              {recipe.title}
            </span>
          </div>
        )}
        {recipe.cuisine && (
          <div className="absolute bottom-2 left-2">
            <span className="rounded-full bg-black/55 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              {recipe.cuisine}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-emerald-700 dark:text-emerald-300">
          {recipe.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {time ? `${time} min` : "Time varies"}
          </span>
          {difficulty ? (
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                difficulty === "Easy"
                  ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                  : difficulty === "Medium"
                    ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300"
                    : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300"
              }`}
            >
              {difficulty}
            </span>
          ) : (
            <span className="rounded-full bg-surface-sunken px-2 py-0.5 text-[11px] font-medium text-ink-muted">
              Any level
            </span>
          )}
        </div>
        {recipe.rating && (
          <div className="flex items-center gap-1 text-xs">
            <Star size={11} className="fill-amber-400 text-amber-400" />
            <span className="font-semibold text-ink">
              {recipe.rating.toFixed(1)}
            </span>
          </div>
        )}
        <div className="mt-auto flex flex-wrap gap-1 pt-1">
          {recipe.diets.length > 0 ? (
            recipe.diets.slice(0, 2).map((d) => (
              <span
                key={d}
                className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-300"
              >
                {d}
              </span>
            ))
          ) : (
            <span className="rounded-full bg-surface px-2 py-0.5 text-[11px] font-medium text-ink-muted">
              Flexible diet
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function DetailPanel({
  recipe,
  onClose,
}: {
  recipe: ExternalRecipe;
  onClose: () => void;
}) {
  const [step, setStep] = useState<number | null>(null);

  // Escape closes — matches the other modals in the app so users learn
  // one close model.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div
        aria-hidden
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={recipe.title}
        className="relative z-10 max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl bg-surface shadow-2xl sm:max-w-2xl sm:rounded-3xl"
      >
        <div className="relative aspect-[3/1] overflow-hidden rounded-t-3xl">
          {resolveRecipeImage(recipe) ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={resolveRecipeImage(recipe)!}
              alt={recipe.title}
              className="h-full w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{ background: getCuisineGradient(recipe.cuisine ?? "") }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white transition hover:bg-black/60"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-xl font-extrabold leading-tight text-white">
              {recipe.title}
            </h2>
          </div>
        </div>

        <div className="space-y-5 p-5">
          <div className="flex flex-wrap gap-2 text-sm text-ink-muted">
            {recipe.cuisine && (
              <span className="rounded-full bg-surface-sunken px-3 py-1 text-xs font-medium">
                {recipe.cuisine}
              </span>
            )}
            {recipe.totalTimeMinutes && (
              <span className="flex items-center gap-1 rounded-full bg-surface-sunken px-3 py-1 text-xs font-medium">
                <Clock size={12} /> {recipe.totalTimeMinutes} min
              </span>
            )}
            {recipe.servings && (
              <span className="rounded-full bg-surface-sunken px-3 py-1 text-xs font-medium">
                {recipe.servings} servings
              </span>
            )}
            {recipe.difficulty && (
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  recipe.difficulty === "Easy"
                    ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
                    : recipe.difficulty === "Medium"
                      ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300"
                      : "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300"
                }`}
              >
                {recipe.difficulty}
              </span>
            )}
            {recipe.diets.map((d) => (
              <span
                key={d}
                className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300"
              >
                {d}
              </span>
            ))}
          </div>

          {(recipe.calories || recipe.protein) && (
            <div className="grid grid-cols-4 gap-2">
              {[
                ["Calories", recipe.calories, ""],
                ["Protein", recipe.protein, "g"],
                ["Carbs", recipe.carbs, "g"],
                ["Fat", recipe.fat, "g"],
              ].map(([label, val, unit]) =>
                val != null ? (
                  <div
                    key={String(label)}
                    className={`rounded-2xl p-2.5 text-center ${label === "Calories" ? "bg-amber-50 dark:bg-amber-950/40" : "bg-surface"}`}
                  >
                    <p className="text-xs text-ink-muted">{label}</p>
                    <p className="text-sm font-bold text-ink">
                      {Math.round(Number(val))}
                      {unit}
                    </p>
                  </div>
                ) : null,
              )}
            </div>
          )}

          {recipe.ingredients.length > 0 && (
            <div>
              <h3 className="mb-2.5 font-semibold text-ink">
                Ingredients
              </h3>
              <ul className="divide-y divide-stone-100">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex gap-3 py-2 text-sm">
                    {ing.amount && (
                      <span className="w-16 shrink-0 font-medium text-emerald-700 dark:text-emerald-300">
                        {ing.amount} {ing.unit ?? ""}
                      </span>
                    )}
                    <span className="text-ink">{ing.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {recipe.instructions.length > 0 && (
            <div>
              <h3 className="mb-2.5 font-semibold text-ink">
                Instructions
              </h3>
              <ol className="space-y-3">
                {recipe.instructions.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => setStep(step === i ? null : i)}
                    className={`flex cursor-pointer gap-3 rounded-2xl p-3 transition ${step === i ? "bg-emerald-50 dark:bg-emerald-950/40" : "hover:bg-surface"}`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${step === i ? "bg-emerald-600 text-white" : "bg-surface-sunken text-ink-muted"}`}
                    >
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-ink">
                      {s}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {recipe.culturalNote && (
            <div className="rounded-2xl border border-line bg-surface p-4 text-sm leading-relaxed text-ink-muted">
              <span className="font-semibold text-ink">
                Did you know?{" "}
              </span>
              {recipe.culturalNote}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ExplorePage() {
  const [filters, setFilters] = useState<ExploreFilters>(DEFAULT_FILTERS);
  const [inputValue, setInputValue] = useState("");
  // We accumulate recipes across "Load more" clicks so the page feels
  // continuous instead of paging back and forth.
  const [recipes, setRecipes] = useState<ExternalRecipe[]>([]);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selected, setSelected] = useState<ExternalRecipe | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [resultSource, setResultSource] = useState<string>("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  // Race guard: each in-flight load gets a monotonic request id. When a
  // result returns, we only apply it if its id is still the latest. Without
  // this, fast typing can let an older response overwrite a newer one
  // (e.g. "ch" results land after the user has already typed "chicken").
  const loadReqRef = useRef(0);
  // Demo banner shows only if the live result set actually came back as
  // "mock" (a fallback path). The configured source from env isn't enough
  // because TheMealDB is keyless and is used by default.
  const isDemo = resultSource === "mock";

  const load = useCallback(
    async (f: ExploreFilters, append: boolean) => {
      const myReq = ++loadReqRef.current;
      if (append) setLoadingMore(true);
      else setLoading(true);
      const result = await searchExternalRecipes(f);
      // Drop stale responses.
      if (myReq !== loadReqRef.current) return;
      setRecipes((prev) =>
        append ? [...prev, ...result.recipes] : result.recipes,
      );
      setTotal(result.total);
      setHasMore(result.hasMore);
      setResultSource(result.source);
      if (append) setLoadingMore(false);
      else setLoading(false);
    },
    [],
  );

  // Initial + filter changes — always start from page 1. `load` itself sets
  // state (intentional here), and we list granular filter fields so we don't
  // re-fetch on `page` changes during pagination.
  /* eslint-disable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */
  useEffect(() => {
    load({ ...filters, page: 1 }, false);
  }, [
    filters.query,
    filters.cuisine,
    filters.region,
    filters.diet,
    filters.mealType,
    filters.difficulty,
    filters.maxTime,
    filters.maxCost,
    filters.spiceLevel,
    filters.proteinType,
    filters.studentMode,
    filters.sort,
    load,
  ]);
  /* eslint-enable react-hooks/set-state-in-effect, react-hooks/exhaustive-deps */

  function handleQueryChange(v: string) {
    setInputValue(v);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(
      () => setFilters((f) => ({ ...f, query: v, page: 1 })),
      400,
    );
  }

  function setFilter(key: keyof ExploreFilters, val: unknown) {
    setFilters((f) => ({ ...f, [key]: val, page: 1 }));
  }

  function clearAllFilters() {
    setFilters(DEFAULT_FILTERS);
    setInputValue("");
  }

  function loadMore() {
    const nextPage = filters.page + 1;
    setFilters((f) => ({ ...f, page: nextPage }));
    load({ ...filters, page: nextPage }, true);
  }

  // ── Active filter chips ──
  const activeChips: { key: string; label: string; clear: () => void }[] = [];
  if (filters.query.trim())
    activeChips.push({
      key: "q",
      label: `"${filters.query.trim()}"`,
      clear: () => {
        setInputValue("");
        setFilters((f) => ({ ...f, query: "", page: 1 }));
      },
    });
  if (filters.cuisine)
    activeChips.push({
      key: "cuisine",
      label: filters.cuisine,
      clear: () => setFilter("cuisine", ""),
    });
  if (filters.diet)
    activeChips.push({
      key: "diet",
      label: filters.diet,
      clear: () => setFilter("diet", ""),
    });
  if (filters.maxTime)
    activeChips.push({
      key: "time",
      label: `≤${filters.maxTime} min`,
      clear: () => setFilter("maxTime", null),
    });
  if (filters.sort !== DEFAULT_FILTERS.sort) {
    const lbl: Record<ExploreFilters["sort"], string> = {
      popular: "Most popular",
      rating: "Highest rated",
      fastest: "Fastest",
      cheapest: "Cheapest",
      easiest: "Easiest",
      score: "Best score",
    };
    activeChips.push({
      key: "sort",
      label: `Sort: ${lbl[filters.sort]}`,
      clear: () => setFilter("sort", DEFAULT_FILTERS.sort),
    });
  }

  const visibleCount = recipes.length;
  const showingCopy = loading
    ? "Searching…"
    : total === 0
      ? "No recipes match"
      : !hasMore && visibleCount === total
        ? `Showing all ${total.toLocaleString()} recipes`
        : `Showing ${visibleCount.toLocaleString()} of ${total.toLocaleString()} recipes`;

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <Globe size={11} /> World Recipes
          </span>
        }
        title="Explore global cuisine."
        description="Discover authentic recipes from around the world. Search by cuisine, diet, or cooking time."
        tone="sky"
      />

      {isDemo && (
        <div className="flex items-start gap-3 rounded-2xl border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/40 px-4 py-3 text-sm text-amber-900 dark:text-amber-300 shadow-sm">
          <Info size={16} className="mt-0.5 shrink-0" />
          <p>
            <span className="font-semibold">Demo mode</span> — showing a small
            sample library. Live recipe search will load many more once a
            recipe API is connected.
          </p>
        </div>
      )}
      {resultSource === "themealdb" && !isDemo && (
        <div className="flex items-start gap-3 rounded-2xl border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/40 px-4 py-3 text-sm text-sky-900 dark:text-sky-300 shadow-sm">
          <Info size={16} className="mt-0.5 shrink-0" />
          <p>
            <span className="font-semibold">Powered by TheMealDB</span> — a free, open recipe database.
            Connect Spoonacular or Edamam in your environment variables for broader search coverage.
          </p>
        </div>
      )}

      {/* Search + filter bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          />
          <input
            value={inputValue}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search any cuisine, dish, or ingredient…"
            className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-4 text-sm focus:border-emerald-400 focus:bg-surface focus:outline-none"
          />
        </div>
        <button
          onClick={() => setFiltersOpen((o) => !o)}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-2 text-sm font-medium transition ${filtersOpen ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300" : "border-line bg-surface text-ink-muted hover:border-line-strong"}`}
        >
          <SlidersHorizontal size={15} /> Filters
        </button>
      </div>

      {/* Expanded filters */}
      {filtersOpen && (
        <div className="space-y-4 rounded-3xl border border-line bg-surface p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Cuisine
              </p>
              <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto">
                {CUISINES.map((c) => (
                  <button
                    key={c}
                    onClick={() =>
                      setFilter("cuisine", filters.cuisine === c ? "" : c)
                    }
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${filters.cuisine === c ? "border-emerald-600 bg-emerald-600 text-white" : "border-line text-ink-muted hover:border-emerald-300 dark:border-emerald-800"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Diet
              </p>
              <div className="flex flex-wrap gap-1.5">
                {DIETS.map((d) => (
                  <button
                    key={d}
                    onClick={() =>
                      setFilter("diet", filters.diet === d ? "" : d)
                    }
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${filters.diet === d ? "border-emerald-600 bg-emerald-600 text-white" : "border-line text-ink-muted hover:border-emerald-300 dark:border-emerald-800"}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Max Time
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TIMES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() =>
                      setFilter(
                        "maxTime",
                        filters.maxTime === t.value ? null : t.value,
                      )
                    }
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${filters.maxTime === t.value ? "border-emerald-600 bg-emerald-600 text-white" : "border-line text-ink-muted hover:border-emerald-300 dark:border-emerald-800"}`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="mb-2 mt-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Sort
              </p>
              <div className="flex flex-wrap gap-1.5">
                {(
                  [
                    ["popular", "Most popular"],
                    ["fastest", "Fastest"],
                    ["cheapest", "Cheapest"],
                    ["easiest", "Easiest"],
                    ["score", "Best score"],
                  ] as const
                ).map(([v, l]) => (
                  <button
                    key={v}
                    onClick={() => setFilter("sort", v)}
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${filters.sort === v ? "border-emerald-600 bg-emerald-600 text-white" : "border-line text-ink-muted hover:border-emerald-300 dark:border-emerald-800"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <p className="mb-2 mt-3 text-xs font-semibold uppercase tracking-wide text-ink-muted">
                Student Mode
              </p>
              <button
                onClick={() => setFilter("studentMode", !filters.studentMode)}
                className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${filters.studentMode ? "border-emerald-600 bg-emerald-600 text-white" : "border-line text-ink-muted hover:border-emerald-300 dark:border-emerald-800"}`}
              >
                🎓 {filters.studentMode ? "On — budget & beginner only" : "Off"}
              </button>
            </div>
          </div>
          <button
            onClick={clearAllFilters}
            className="text-xs text-ink-muted transition hover:text-ink-muted"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Active filter chips */}
      {activeChips.length > 0 && (
        <div className="sticky top-16 z-20 -mx-2 px-2 py-1">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-surface/85 p-3 shadow-sm backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Active filters
            </span>
            {activeChips.map((chip) => (
              <button
                key={chip.key}
                onClick={chip.clear}
                className="group inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white shadow-sm shadow-emerald-200 transition-all motion-safe:animate-[popIn_240ms_ease-out] hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label={`Remove filter ${chip.label}`}
              >
                {chip.label}
                <X
                  size={11}
                  aria-hidden
                  className="transition-transform motion-safe:group-hover:rotate-90"
                />
              </button>
            ))}
            <button
              onClick={clearAllFilters}
              className="ml-auto text-xs font-semibold text-ink-muted transition hover:text-emerald-700 dark:text-emerald-300 hover:underline"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Results header — count */}
      <p className="text-sm text-ink-muted">
        {loading || total === 0 ? (
          showingCopy
        ) : (
          <>
            Showing{" "}
            <span className="font-semibold text-ink">
              <AnimatedNumber value={visibleCount} duration={500} />
            </span>{" "}
            of{" "}
            <span className="font-semibold text-ink">
              <AnimatedNumber value={total} duration={500} />
            </span>{" "}
            recipes
          </>
        )}
      </p>

      {/* Grid + states */}
      {loading ? (
        <SkeletonRecipeGrid count={8} />
      ) : recipes.length === 0 ? (
        <div className="flex flex-col items-center rounded-3xl border-2 border-dashed border-line bg-surface px-6 py-16 text-center">
          <span
            className="mb-4 text-6xl motion-safe:animate-[emojiFloat_3.2s_ease-in-out_infinite]"
            aria-hidden
          >
            🍽️
          </span>
          <h3 className="mb-1 text-lg font-semibold text-ink">
            No recipes match your filters
          </h3>
          <p className="max-w-md text-sm text-ink-muted">
            Try clearing filters, or have AI Chef invent a custom recipe from
            what you have.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700"
            >
              Clear filters
            </button>
            <Link
              href="/ai-chef"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-semibold text-ink hover:bg-surface"
            >
              <Sparkles size={14} /> Ask AI Chef
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe, i) => (
            <div
              key={recipe.id}
              className="h-full motion-safe:animate-[fadeUp_520ms_ease-out_both]"
              style={{ animationDelay: `${Math.min(i, 11) * 30}ms` }}
            >
              <ExploreCard
                recipe={recipe}
                onClick={() => setSelected(recipe)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Load more */}
      {!loading && recipes.length > 0 && hasMore && (
        <div className="flex justify-center pt-2">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-surface disabled:opacity-60"
          >
            {loadingMore ? "Loading…" : "Load more recipes"}
          </button>
        </div>
      )}
      {!loading && recipes.length > 0 && !hasMore && (
        <p className="pt-2 text-center text-xs text-ink-faint">
          You&apos;ve reached the end.
        </p>
      )}

      {/* Detail panel */}
      {selected && (
        <DetailPanel recipe={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
