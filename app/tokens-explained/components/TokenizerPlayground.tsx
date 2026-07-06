"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { encode, decode } from "gpt-tokenizer";

const GOLD = "#B8860B";

type Preset = { label: string; value: string };

const PRESETS: Preset[] = [
  { label: "hellooo", value: "hellooo" },
  { label: "🎈 vs 🫵", value: "🎈 vs 🫵" },
  { label: "1234567890", value: "1234567890" },
  { label: "नमस्ते", value: "नमस्ते, आप कैसे हैं?" },
];

const SHADES = [
  {
    borderColor: GOLD,
    background:
      "linear-gradient(180deg, rgba(184,134,11,0.24), rgba(184,134,11,0.07))",
  },
  {
    borderColor: `${GOLD}99`,
    background:
      "linear-gradient(180deg, rgba(184,134,11,0.13), rgba(184,134,11,0.03))",
  },
  {
    borderColor: `${GOLD}CC`,
    background:
      "linear-gradient(180deg, rgba(184,134,11,0.32), rgba(184,134,11,0.11))",
  },
];

type Chunk = { key: string; text: string };

function displayChunk(text: string) {
  if (text.length === 0) return " ";
  return text.replace(/\n/g, "⏎").replace(/\t/g, "⇥").replace(/ /g, "·");
}

function useTokenChunks(text: string): { chunks: Chunk[]; error: boolean } {
  return useMemo(() => {
    if (!text) return { chunks: [], error: false };
    try {
      const ids = encode(text);
      const chunks = ids.map((id, index) => ({
        key: `${index}-${id}`,
        text: decode([id]),
      }));
      return { chunks, error: false };
    } catch {
      return { chunks: [], error: true };
    }
  }, [text]);
}

export default function TokenizerPlayground() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);
  const [text, setText] = useState("नमस्ते");
  const { chunks, error } = useTokenChunks(text);
  const charCount = useMemo(() => [...text].length, [text]);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => setText(preset.value)}
            className="cursor-pointer rounded-full border border-[#B8860B]/35 px-3 py-1.5 font-mono text-xs text-[#B8860B]/80 transition-colors hover:border-[#B8860B] hover:bg-[#B8860B]/5 hover:text-[#B8860B]"
          >
            {preset.label}
          </button>
        ))}
      </div>

      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={2}
        spellCheck={false}
        placeholder="Type anything..."
        aria-label="Text to tokenize"
        className="mt-5 w-full resize-none rounded-2xl border-2 border-[#B8860B]/35 bg-white/70 px-4 py-3 font-mono text-base text-[#1C1810] shadow-sm outline-none transition-colors focus:border-[#B8860B] focus:bg-white sm:text-lg"
      />

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="font-mono text-sm text-[#B8860B] sm:text-base">
          {chunks.length}{" "}
          <span className="text-[#5B564C]">
            {chunks.length === 1 ? "token" : "tokens"}
          </span>
        </span>
        <span className="font-mono text-sm text-[#5B564C] sm:text-base">
          {charCount} {charCount === 1 ? "character" : "characters"}
        </span>
      </div>

      <div
        className="mt-4 flex min-h-[64px] flex-wrap items-center justify-center gap-1.5 rounded-2xl border-2 px-4 py-4 sm:min-h-[76px]"
        style={{
          borderColor: `${GOLD}33`,
          background: "rgba(241,233,216,0.5)",
        }}
      >
        {error ? (
          <p className="text-sm text-[#5B564C]">
            That text uses a reserved token sequence &mdash; try editing it.
          </p>
        ) : chunks.length === 0 ? (
          <p className="text-sm text-[#5B564C]">
            Type something above to see it tokenized.
          </p>
        ) : (
          <AnimatePresence mode="popLayout" initial={false}>
            {chunks.map((chunk, index) => {
              const shade = SHADES[index % SHADES.length];
              return (
                <motion.span
                  key={chunk.key}
                  layout
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.7 }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 320, damping: 26 }
                  }
                  className="whitespace-pre rounded-lg border px-2.5 py-1.5 font-mono text-xs text-[#1C1810] sm:text-sm"
                  style={shade}
                >
                  {displayChunk(chunk.text)}
                </motion.span>
              );
            })}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
