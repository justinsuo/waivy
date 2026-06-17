"use client";

import { useSettings } from "@/lib/settings/SettingsStore";
import { Chatbot } from "./Chatbot";

/**
 * Renders the floating Pesto assistant only when the user has it enabled
 * (Settings → AI features → Pesto chat) and the AI master switch is on.
 * Mounting it conditionally means it does no work when hidden.
 */
export function ChatbotGate() {
  const { settings } = useSettings();
  if (!settings.ai.pestoChat || !settings.ai.enabled) return null;
  return <Chatbot />;
}
