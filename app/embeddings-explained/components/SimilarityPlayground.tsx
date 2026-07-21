"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TEAL = "#0D7377";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// The fixed 8-word vocabulary for the playground. Every word is both a
// selectable chip and a comparison target for every other word.
export const WORDS = [
  "cat",
  "dog",
  "king",
  "queen",
  "happy",
  "pizza",
  "ocean",
  "car",
] as const;

type Word = (typeof WORDS)[number];

function pairKey(a: Word, b: Word) {
  return [a, b].sort().join("|");
}

/**
 * Real, pre-computed pairwise cosine similarities for the fixed 8-word
 * vocabulary above. Symmetric (similarity(a, b) === similarity(b, a));
 * similarity(a, a) is treated as 1.0 in `getSimilarity` below. Keys are the
 * two words sorted alphabetically and joined with "|" (see `pairKey`).
 */
const SIMILARITY_MATRIX: Record<string, number> = {
  "car|cat": 0.19,
  "car|dog": 0.21,
  "car|happy": 0.22,
  "car|king": 0.23,
  "car|ocean": 0.23,
  "car|pizza": 0.2,
  "car|queen": 0.21,
  "cat|dog": 0.74,
  "cat|happy": 0.31,
  "cat|king": 0.28,
  "cat|ocean": 0.29,
  "cat|pizza": 0.22,
  "cat|queen": 0.27,
  "dog|happy": 0.33,
  "dog|king": 0.29,
  "dog|ocean": 0.3,
  "dog|pizza": 0.24,
  "dog|queen": 0.28,
  "happy|king": 0.26,
  "happy|ocean": 0.27,
  "happy|pizza": 0.3,
  "happy|queen": 0.28,
  "king|ocean": 0.24,
  "king|pizza": 0.19,
  "king|queen": 0.78,
  "ocean|pizza": 0.21,
  "ocean|queen": 0.25,
  "pizza|queen": 0.2,
};

function getSimilarity(a: Word, b: Word): number {
  if (a === b) return 1;
  return SIMILARITY_MATRIX[pairKey(a, b)] ?? 0;
}

export default function SimilarityPlayground() {
  const shouldReduceMotion = useReducedMotion();
  const [selected, setSelected] = useState<Word>("cat");

  const ranked = useMemo(() => {
    return WORDS.filter((w) => w !== selected)
      .map((word) => ({ word, score: getSimilarity(selected, word) }))
      .sort((a, b) => b.score - a.score);
  }, [selected]);

  return (
    <div className="mx-auto w-full max-w-xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {WORDS.map((word) => {
          const isSelected = word === selected;
          return (
            <button
              key={word}
              type="button"
              onClick={() => setSelected(word)}
              aria-pressed={isSelected}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition-colors sm:text-base ${
                isSelected
                  ? "border-[#0D7377] bg-[#0D7377] text-white"
                  : "border-[#0D7377]/35 text-[#0D7377]/80 hover:border-[#0D7377] hover:bg-[#0D7377]/5 hover:text-[#0D7377]"
              }`}
              style={{ fontFamily: "Georgia, serif" }}
            >
              &quot;{word}&quot;
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {ranked.map(({ word, score }, index) => {
          const pct = Math.round(score * 100);
          return (
            <div key={`${selected}-${word}`}>
              <div className="flex items-baseline justify-between gap-4">
                <span
                  className="text-base italic text-[#1C1810] sm:text-lg"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &quot;{word}&quot;
                </span>
                <span className="font-mono text-sm text-[#0D7377] sm:text-base">
                  {score.toFixed(2)}
                </span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-[#1C1810]/8">
                {shouldReduceMotion ? (
                  <div
                    className="h-full rounded-full"
                    style={{ backgroundColor: TEAL, width: `${pct}%` }}
                  />
                ) : (
                  <motion.div
                    key={`${selected}-${word}-bar`}
                    className="h-full rounded-full"
                    style={{ backgroundColor: TEAL }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${pct}%` }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.05,
                      ease: EASE_OUT,
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
