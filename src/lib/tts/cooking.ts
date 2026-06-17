/**
 * Turn a recipe step into a natural spoken line — the plain instruction plus
 * any beginner cues attached to the matching `detailedSteps` entry (heat level,
 * texture/taste cues, tip, safety note). Used by guided cooking.
 */

import type { Recipe } from "@/lib/types";

/**
 * Premium tone steering for gpt-4o-mini-tts — a warm, encouraging cooking
 * instructor. Ignored by the system voice (and by tts-1).
 */
export const COOKING_VOICE_INSTRUCTIONS =
  "Speak like a warm, encouraging cooking instructor guiding a beginner. " +
  "Calm, clear, and supportive, at a natural pace. Don't rush.";

const HEAT_LABEL: Record<string, string> = {
  low: "low",
  "medium-low": "medium-low",
  medium: "medium",
  "medium-high": "medium-high",
  high: "high",
};

export function composeStepSpeech(recipe: Recipe, index: number): string {
  const parts: string[] = [];
  const stepText = recipe.steps[index];
  if (stepText) parts.push(stepText.trim());

  // detailedSteps only aligns when it's 1:1 with steps (AI recipes provide it).
  const detail =
    recipe.detailedSteps && recipe.detailedSteps.length === recipe.steps.length
      ? recipe.detailedSteps[index]
      : undefined;

  if (detail) {
    if (detail.heatLevel && detail.heatLevel !== "none" && HEAT_LABEL[detail.heatLevel]) {
      parts.push(`Keep the heat ${HEAT_LABEL[detail.heatLevel]}.`);
    }
    if (detail.textureCue) parts.push(`Look for ${stripTrailingDot(detail.textureCue)}.`);
    if (detail.tasteCue) parts.push(`Taste as you go: ${stripTrailingDot(detail.tasteCue)}.`);
    if (detail.beginnerTip) parts.push(`Tip: ${stripTrailingDot(detail.beginnerTip)}.`);
    if (detail.safetyNote) parts.push(`Safety note: ${stripTrailingDot(detail.safetyNote)}.`);
  }
  return parts.join(" ");
}

function stripTrailingDot(s: string): string {
  return s.trim().replace(/[.!]+$/, "");
}
