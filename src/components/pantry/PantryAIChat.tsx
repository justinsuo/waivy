"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, Loader2, Sparkles } from "lucide-react";
import { useAppStore } from "@/lib/AppStore";
import { isAiEnabled, pantryChat, type PantryChatTurn } from "@/lib/anthropic";
import { INGREDIENT_MAP } from "@/data/ingredients";

const STARTERS = [
  "What can I cook tonight with what I have?",
  "What's the cheapest meal I can make right now?",
  "Suggest a high-protein lunch from my pantry.",
  "What should I buy next to unlock more meals?",
];

export function PantryAIChat() {
  const { pantry } = useAppStore();
  const [messages, setMessages] = useState<PantryChatTurn[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const pantryDescription = useMemo(() => {
    if (pantry.length === 0) return "";
    return pantry
      .map((p) => {
        const ing = INGREDIENT_MAP.get(p.ingredientId);
        if (!ing) return null;
        return `- ${ing.name}${p.useSoon ? " (use soon)" : ""}`;
      })
      .filter(Boolean)
      .join("\n");
  }, [pantry]);

  if (!isAiEnabled()) return null;

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setError(null);
    const newHistory: PantryChatTurn[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newHistory);
    setInput("");
    setLoading(true);
    try {
      const reply = await pantryChat(pantryDescription, newHistory);
      setMessages([...newHistory, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/40/40 p-5 sm:p-6">
      <div>
        <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
          <MessageCircle size={16} /> Ask Pesto about your pantry
        </h2>
        <p className="mt-1 text-sm text-emerald-900 dark:text-emerald-300">
          Pesto knows what&apos;s in your pantry and can suggest meals, swaps,
          and what to grab next.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="mt-4 max-h-80 space-y-3 overflow-y-auto rounded-2xl bg-surface p-4"
      >
        {messages.length === 0 && (
          <div className="text-sm text-ink-muted">
            <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              <Sparkles size={12} /> Try asking
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-muted hover:border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:bg-emerald-950/40"
                >
                  {s}
                </button>
              ))}
            </div>
            {pantry.length === 0 && (
              <p className="mt-3 text-xs text-ink-muted">
                Tip: add a few pantry items above for more personalized
                answers.
              </p>
            )}
          </div>
        )}

        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} content={m.content} />
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-sm text-ink-muted">
            <Loader2 size={14} className="animate-spin" /> Pesto is thinking…
          </div>
        )}
        {error && (
          <div className="rounded-xl bg-red-50 dark:bg-red-950/40 px-3 py-2 text-xs text-red-800 dark:text-red-300">
            {error}
          </div>
        )}
      </div>

      <form
        className="mt-3 flex items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a recipe, swap, or what to cook tonight…"
          className="flex-1 rounded-full border border-line bg-surface px-4 py-2 text-sm focus:border-emerald-400 focus:outline-none"
          disabled={loading}
          aria-label="Pantry chat message"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white disabled:opacity-40"
          aria-label="Send"
        >
          <Send size={16} />
        </button>
      </form>
    </section>
  );
}

function ChatBubble({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          isUser
            ? "max-w-[85%] rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm text-white"
            : "max-w-[85%] rounded-2xl bg-surface-sunken px-4 py-2.5 text-sm text-ink"
        }
      >
        <div className="whitespace-pre-wrap leading-relaxed">
          {renderMarkdown(content)}
        </div>
      </div>
    </div>
  );
}

function renderMarkdown(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <strong key={`b-${key++}`} className="font-semibold">
        {match[1]}
      </strong>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
