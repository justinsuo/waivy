# Waivy — Comprehensive Session Handoff

> Paste into a new session (or read this file) to continue seamlessly. Internal dev notes — **no secrets**. Repo is public, so don't commit secrets here.

---

## 0. TL;DR for a fresh session
Waivy = a student cooking app, **web (Next.js static export → GitHub Pages)** + **mobile (Expo/React Native)**, sharing one recipe catalog. Recently shipped: full **dark mode** (both platforms), a **"Most makeable" pantry sort**, **home-page de-prioritization** of baking/big recipes, a **cheaper AI-image pipeline** in the Cloudflare Worker (coded, not yet deployed), and **recipe-data fixes** (deduped 24 colliding ids, fixed 14 zero-quantity ingredients). Everything below is current as of this handoff.

---

## 1. Project layout & stack
- **WEB root:** `~/waivy`. Next.js 16 (App Router), React 19, TypeScript 5 strict, **Tailwind v4** (CSS-first, **no `tailwind.config.js`** — tokens live in `src/app/globals.css`), lucide-react icons, clsx. `output:"export"` (fully static), `basePath:"/waivy"`. Hosted on **GitHub Pages**: https://justinsuo.github.io/waivy ; repo **github.com/justinsuo/waivy** (gh CLI authed as justinsuo).
- **MOBILE:** `~/waivy/mobile` (Expo / React Native, expo-router). Imports web data/logic via the `@/` alias (→ web `src`) and `@shared/` (→ `~/waivy/shared/src`). Has its own `~/` alias (→ `mobile/src`).
- **SHARED:** `~/waivy/shared` — cross-platform kv facade `@shared/platform/kv` (web = `window.localStorage` with **no key prefix**; mobile binds an AsyncStorage-backed sync mirror via `setKV()` at boot).
- **WORKER:** `~/waivy/worker` — Cloudflare Worker (Hono-ish) that proxies OpenAI (key never reaches browser) and now also does Workers-AI image gen + R2 caching + cross-device sync (KV).
- **AI:** OpenAI via the Worker (`NEXT_PUBLIC_WORKER_URL`). **Anthropic Haiku** (`claude-haiku-4-5-20251001`) called **directly from the browser** (`NEXT_PUBLIC_ANTHROPIC_API_KEY`) for vision/voice/quick AI-Chef options/the "Pesto" chatbot. Both optional — app degrades gracefully with no keys.
- **No test framework.** Verify with: `npx tsc --noEmit`, `npm run lint` (eslint, `--max-warnings 0`), `npm run build` (static export → `out/`). Mobile: `cd mobile && npx tsc --noEmit`.
- **Routes:** `/`, `/ai-chef`, `/pantry`, `/cheap-recipes`, `/explore`, `/grocery-list`, `/saved`, `/recipe-studio`, `/recipe-studio/new`, `/recipes/[id]`, `/recipes/custom`, `/about`, `/settings`, `/not-found`.

## 2. Hard rules (do not violate)
- **Begin every reply with "Justin".**
- Commit with **`git commit --no-verify`** (a `.githooks/pre-push` runs a screenshot script that loops — bypass it). Work on `main`; **pushing to main auto-deploys the web app** (`.github/workflows/deploy.yml`, ~3 min, concurrency group `pages`).
- **Secret scan before every commit:** grep the staged diff for the Anthropic API-key prefix and the Google OAuth client-secret prefix; the count must be **0**. Secrets (Anthropic API keys, Google OAuth client secrets, Firebase config) live ONLY in gitignored `.env.local` / `mobile/.env.local`. (See `CLAUDE.md` for the exact patterns.)
- **Never rename `srf:*` storage keys** (legacy "Student Recipe Finder" prefix) — renaming wipes every user's pantry/grocery/saved/custom/diary.
- Static export must keep working. App must run with **no AI/Firebase config**.
- **Don't take screenshots while the user is on the computer** (focus contention sends clicks to the IDE). Trust the code and ship to live. To show the sim: `open -a Simulator`.
- User working style: **do everything end-to-end, pick the best option and go, minimal back-and-forth, show results.**

## 3. Build / deploy / sim commands
```
# web
npm run dev            # localhost:3000
npm run lint           # 0 warnings required
npm run build          # static export → out/
npx tsc --noEmit
# deploy = push to main; watch: gh run watch <id> --exit-status
# audits:
npx tsx scripts/validateCatalog.ts        # invalid ids, dup ids, dup names, empty
npx tsx scripts/auditRecipePricing.ts     # cost/serving + per-ingredient flags (advisory)
npx tsx scripts/auditRecipeNutrition.ts   # macro coverage (advisory)
npx tsx scripts/generateCatalogDocs.ts    # regenerate docs/catalog/

# mobile (Metro on :8081 must be running for a dev build to load JS)
cd mobile && npx tsc --noEmit
# sim: iPhone 17 Pro, UDID AB20FBAE-EE87-4BFD-8B76-CF1634C76250, bundle com.waivy.app
xcrun simctl terminate <UDID> com.waivy.app; xcrun simctl launch <UDID> com.waivy.app   # reload app
open -a Simulator      # bring sim window to front
```

## 4. Data model (`src/lib/types.ts`)
- **Recipe:** `id, name, description, mealType("breakfast"|"lunch"|"dinner"|"snack"|"meal-prep"|"drink"), servings, ingredients[{ingredientId, quantity, optional?, note?}], steps[], totalTimeMinutes, difficulty("easy"|"medium"|"hard"), equipment[](Equipment: "microwave"|"stovetop"|"oven"|"rice-cooker"|"air-fryer"|"blender"|"no-kitchen"), dietTags[](DietTag: "vegetarian"|"vegan"|"high-protein"|"gluten-free"|"dairy-free"), cheapTips[], substitutions[{forIngredientId,swap,savings?}], estimatedNutrition{calories,protein,carbs,fat,fiber}, emoji, accentColor(tailwind bg-* class), cuisine?, tags?, prepTimeMinutes?, cookTimeMinutes?, primaryCookingMethod?, noStovetopRequired?, …`
- **Ingredient:** `id, name, category(IngredientCategory), estimatedUnitCost(per `unit`), unit, commonPackageSize?, shelfLifeDays?, tags?`.
- **RecipeImage:** `src, alt, sourceName, sourceUrl, license, attributionRequired, attributionText?, verifiedMatch`.
- **PRICING RULE (critical):** cost = `quantity × ingredient.estimatedUnitCost`, and **`quantity` MUST be in the ingredient's catalog `unit`** (flour per cup, sugar/butter/oil/cream-cheese/etc. per **tbsp**, eggs per egg, canned per can, spirits per oz/serving). Unit mismatch → wild over/under-pricing. (Baking batch 1 needed 624 quantity corrections via a note-parser; batch 2 was authored in correct units.)

## 5. Recipe catalog assembly (`src/data/`)
- `recipes.ts` imports & spreads: `RECIPES` (base), `MACRO_RECIPES`, `WEB_RECIPES`, `GEN_RECIPES`, `SOCIAL_RECIPES`, `RICE_COOKER_RECIPES`, `DRINK_RECIPES`, `CURATED_RECIPES` (+ `cur2-…`), `BAKING_RECIPES`, `BAKING_RECIPES_2`.
  - `REMOVED_RECIPE_IDS` (19 brand protein shakes) + `notRemoved` filter.
  - `originalVariantsOnly(MACRO_RECIPES)` strips `-cf`/`-pf` variants for **CATALOG_RECIPES** (browseable, `dedupeByName`, ~7,200); full MACRO in **ALL_RECIPES** (9,212). `RECIPE_MAP` keyed by id from ALL (**last-wins**).
- `ingredients.ts` (`INGREDIENTS` array + `INGREDIENT_MAP` with aliases; 781), `ingredientNutrition.ts` (`BASE_INGREDIENT_NUTRITION`).
- `recipeImages.ts` (`RECIPE_IMAGES` map + `getRecipeImage(id)`); ~673 hand-verified CC photos (Wikimedia/Unsplash). Recipes without a photo show a **gradient+emoji placeholder** — NO substituted "borrowed" photo (built then reverted, see §7).
- **MACRO_RECIPES** = `src/data/macroRecipes/` → `index.ts` concatenates `batch-001..101.ts` then **dedupes by id (keep first)**. ⚠️ batch files use **two formats**: early batches spaced (`id: "…", quantity: 0`), batch-006+ compact (`id:"…",quantity:0`), and `bakingRecipes2.ts` is JSON-formatted (multi-line).
- Pricing helper `calculateCostPerServing(recipe)` in `src/lib/recipeScoring.ts` (has `COST_OVERRIDES` for AI/imported). Nutrition `bestEffortNutrition(recipe)` in `src/lib/nutritionEngine.ts`.

## 6. The recipe-addition pipeline (proven, reused)
Curate dishes → collision-check vs `ALL_RECIPES` names/ids → **Workflow** (author each with valid catalog ids **in catalog units** → strict pastry/chef **judge that rejects slop**, keep `verdict==="keep" && qualityScore>=7 && authentic` → **vision-verify** a Wikimedia Commons CC image by `Read`-ing the downloaded file) → validate ids/pricing/nutrition + note-parser to normalize quantities → drop collisions → emit `<name>Recipes.ts` + `<name>RecipePhotos.ts` → wire into `recipes.ts` (CATALOG + ALL spreads) and `recipeImages.ts` (`...PHOTOS` spread) → tsc/lint/audits/build → commit + push `--no-verify`. Helper scripts: `scripts/prepBaking2.ts`, `scripts/assembleBaking2.ts`.

## 7. Features shipped THIS session (with key files)
- **Baking batch 2** (130 quality-gated recipes) + mango sago + 4 new ingredients. ~256 baking-tagged total. Files: `src/data/bakingRecipes2.ts`, `bakingRecipePhotos2.ts`.
- **`docs/catalog/`** — browseable visual catalog: `README.md` index + per-collection gallery pages (image + ingredients + steps + real cost) + **`all-recipes.csv`** (all browseable recipes). Generator: `scripts/generateCatalogDocs.ts` (uses `calculateCostPerServing` + `bestEffortNutrition`). Linked from the main `README.md`.
- **DARK MODE — web + mobile, 100%, shipped.** Warm-charcoal; **System/Light/Dark** in Settings (default **light**, unchanged).
  - **Web mechanics** (`src/app/globals.css`): `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`; semantic tokens in `:root` + `@theme inline` (`--color-surface/-soft/-sunken`, `--color-ink/-muted/-faint`, `--color-line/-strong`); `[data-theme="dark"]{…}` overrides those + `--background/--surface/--text-main/--foreground/--primary` + safety-net re-point of `--color-stone-50/100/200/300`. Dark palette: bg `#120e0b`, surface `#1c1714`, surface-soft `#262019`, surface-sunken `#15110e`, line `#3a312a`, line-strong `#4d423a`, ink `#f3ece2`, ink-muted `#b6a896`, ink-faint `#8a7c6c`, primary `#34cf7c`.
  - **Web sweep** (~93 files): `bg-white`→`bg-surface`, `bg-stone-50`→`bg-surface`, `bg-stone-100`→`bg-surface-sunken`, `text-stone-900/800`→`text-ink`, `text-stone-700/600/500`→`text-ink-muted`, `text-stone-400`→`text-ink-faint`, `border-stone-200/100`→`border-line`, `border-stone-300`→`border-line-strong`, white gradient stops→`*-surface`, `ring-offset-2`→`+ring-offset-background`. EXCLUDED: `text-stone-100/200/300` (light-on-dark), `bg-stone-800/900`, `text-white`. Hex tone-maps (`Badge/CategoryChip/IconTile/StatCard/VisualEmptyState`) + accent chips got `dark:` companions. `RecipeImage` placeholder → `to-surface` + dark dim. Shells: `layout.tsx` (body `bg-background text-ink` + **no-flash inline script** reading `srf:settings`), `Navbar.tsx`, `BottomNav.tsx`.
  - **Settings**: `appearance.theme` in `src/lib/settings/{types.ts,SettingsStore.tsx}` (applies `data-theme` to `<html>`; "system" follows `matchMedia`, live); UI in `src/components/settings/AppearanceSection.tsx`.
  - **Mobile mechanics**: `mobile/src/theme/index.ts` (`colorsLight`/`colorsDark`/`Palette`/`makeAccent`; kept `colors`/`accent` light for back-compat) + **`mobile/src/theme/ThemeProvider.tsx`** (`useTheme()` reads `srf:settings-theme` via `useKVRaw` + `useColorScheme()`; `useThemedStyles(factory)`). Shell: `mobile/src/app/_layout.tsx` (ThemeProvider + `RootShell` for Stack `contentStyle`/StatusBar), `(tabs)/_layout.tsx`, `components/Screen.tsx`. **All ~31 screens converted**: `components/ui.tsx` primitives, `RecipeCard.tsx`, every tab + secondary screen; module-level `StyleSheet.create` → `makeStyles(palette)` factories or moved into components. **Toast/Celebration kept fixed-dark pills (`#241A12`)** so white text stays readable. Picker in `mobile/src/app/settings.tsx` writes `srf:settings-theme`.
- **"Most makeable" sort** (`/cheap-recipes`): `recipeMakeability(recipe, pantrySet)` in `recipeScoring.ts` (score = `coverage*100 − missing*2 − min(missingCost,10)*0.4`). `Sort` type adds `"makeable"`; reads pantry via `useAppStore`; empty-pantry CTA hint. `/cheap-recipes` + `/pantry` ranking otherwise unchanged.
- **Home de-prioritization** (`src/app/page.tsx`): local `homeSurcharge(recipe)` ($/serving-equiv penalty: baking `+2.5`; `+ingredients>8 *0.06`, `+time>30 *0.012`, difficulty medium `+0.25`/hard `+0.7`, `+servings>6 *0.08`). Both the hero collage and "Today's Cheapest Picks" sort by `cost + homeSurcharge`. Result: home skews quick/cheap everyday meals (0 baking in top picks) without filtering anything; browse/pantry untouched.
- **Cheaper AI images** (`worker/src/index.ts`): `/generate-recipe-image` → (1) **R2 cache** by SHA-256 prompt hash, returns `/recipe-image/<hash>` URL; (2) **Cloudflare Workers AI `@cf/black-forest-labs/flux-1-schnell`** (~$0.0001/img vs ~$0.04 dall-e-3); (3) OpenAI fallback; (4) inline base64 if no R2. New `GET /recipe-image/:hash` streams from R2 (CDN-immutable). `wrangler.toml` adds `[ai] binding="AI"` + `[[r2_buckets]] binding="IMAGES" bucket_name="waivy-recipe-images"` (both optional/graceful). `/diagnostics` reports `bindings:{workersAI,imageCacheR2,sync}`. **Clients already handle `url` responses** (`mobile/src/lib/ai.ts` saves b64 OR url; `src/lib/workerClient.ts` `GenerateImageResult`).
- **Data fixes:** `macroRecipes/index.ts` now dedupes (`ALL_MACRO_BATCHES` → keep-first → `MACRO_RECIPES`), removing **24 colliding ids** (kept the "High-Protein"/"Classic" original generation; ALL_RECIPES 9236→9212). Fixed **14 ingredients** that had `quantity:0` (gave sensible catalog-unit amounts; left 2 intentional `optional` garnishes).

## 8. Open / pending
- **Activate the cheap-image path:** `cd worker && wrangler r2 bucket create waivy-recipe-images && wrangler deploy` (Workers AI must be enabled on the CF account; `[ai]` needs no id). Verify at `https://<worker>/diagnostics`. Until then it falls back to OpenAI.
- **Optional vision audit:** confirm each of the 632 photos actually depicts its dish (run as an opt-in multi-agent Workflow; metadata says all `verifiedMatch:true`, so expect few).
- **Optional:** mirror the home baking/big de-prioritization on **mobile** home.
- **Optional:** trim a few legit-but-steep recipes flagged "suspiciously high" (e.g. `af-crispy-mushrooms-rice` uses 8× mushroom = $9.60/serving).
- Borrowed-photo matching was intentionally **removed** — do not re-add unless asked.

## 9. Audit status (current, clean)
0 invalid ingredient ids · 0 duplicate ids · 0 empty recipes · **0 dead image URLs** (all 632 return 200) · 0 attribution gaps (every CC BY/SA has text) · 0 nutrition macro-concerns. Pricing: ~57 "suspiciously high" flags, mostly legit (salmon/paneer/cauliflower); ~335 "ingredient too cheap" are noise (salt/spices). 34 photos reused (mostly fine; some generic Unsplash rice-bowl stock).

## 10. Counts (approx, current)
Browseable ~7,200 · ALL_RECIPES **9,212** · ingredients **781** · baking-tagged ~256 · verified photos ~673 · static pages built ~9,240.

## 11. Gotchas learned this session
- **zsh does NOT word-split unquoted vars** — pass explicit file args or use arrays (don't rely on `$files` splitting).
- **Recipe detail-page images render client-side after hydration** — they're NOT in the prerendered static HTML, so curling `out/recipes/<id>/index.html` won't show them (verify via the matcher/data instead).
- `grep 'quantity: 0'` also matches `0.5` (substring) — use exact match / `(?![.\d])` lookahead (JS regex), not `\b`.
- macro batch files have **mixed formatting** (spaced vs compact) — match flexibly (`ingredientId"?\s*:\s*"X"\s*,\s*"?quantity"?\s*:\s*0`).
- `ingredientCostBreakdown` return shape is not `{totalCost}` — for manual cost use `estimatedUnitCost × quantity`.
- Build ≈ 3 min; background long commands notify on completion; stale `.next/` chunks can pollute `grep -r` (use `--include='*.ts'`).
- Commit message `$`/backticks: escape `\$` in heredoc-style `-m` to avoid shell expansion.

## 12. Recent commit trail (main)
`6d3c3b5`/`3efac48` baking → `4b8cec4` catalog docs → `c69da6e` web dark mode → `9f2b676` makeable sort → `b7b4ede` mobile dark foundation → `f54cfcd` mobile main screens → `b4eb296` RecipeCard dark fix → `48a28b9` borrowed-photo matcher → `72e0359` worker FLUX+R2 → `66a3e90` mobile dark complete → `be7537e` revert borrowed photos → `e8a185d` home de-prioritize baking/big → `a5be91c` data fixes (dedupe + zero-qty).
