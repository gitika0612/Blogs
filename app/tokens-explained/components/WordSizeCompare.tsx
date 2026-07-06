"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

const LETTERS = "unbelievable".split("");
const OTHER_WORDS = [
  "extraordinary",
  "internationalization",
  "hippopotamus",
  "serendipity",
  "photosynthesis",
  "incomprehensible",
  "…and millions more",
];
const TOKEN_CHUNKS = ["un", "believ", "able"];

export default function WordSizeCompare() {
  const shouldReduceMotion = useReducedMotion();

  const rowInitial = shouldReduceMotion ? undefined : { opacity: 0, y: 16 };
  const rowWhileInView = shouldReduceMotion ? undefined : { opacity: 1, y: 0 };
  const rowViewport = { once: true, margin: "-60px" };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-16">
      {/* Too small — letters */}
      <motion.div
        initial={rowInitial}
        whileInView={rowWhileInView}
        viewport={rowViewport}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
          Too small — letters
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {LETTERS.map((letter, index) => {
            const letterInitial = shouldReduceMotion
              ? undefined
              : { opacity: 0, scale: 0.8 };
            const letterWhileInView = shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: 1 };
            return (
              <motion.div
                key={`${letter}-${index}`}
                initial={letterInitial}
                whileInView={letterWhileInView}
                viewport={rowViewport}
                transition={{
                  duration: 0.3,
                  delay: shouldReduceMotion ? 0 : index * 0.045,
                }}
                className="relative flex h-8 w-8 items-center justify-center rounded-md border-2 sm:h-9 sm:w-9"
                style={{
                  borderColor: `${GOLD}99`,
                  background: "#FAF6F0",
                }}
              >
                <span
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-sm text-[#1C1810]/80 sm:text-base"
                >
                  {letter}
                </span>
                <span
                  className="absolute -right-1 -top-1.5 text-[9px] leading-none"
                  style={{ color: `${GOLD}99` }}
                >
                  ?
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm italic text-[#5B564C]">
          One letter at a time → meaningless confetti.
        </p>
      </motion.div>

      {/* Too big — whole words */}
      <motion.div
        initial={rowInitial}
        whileInView={rowWhileInView}
        viewport={rowViewport}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
          Too big — whole words
        </p>

        <div className="flex items-end justify-center gap-5 sm:gap-8">
          <div
            className="flex items-center justify-center rounded-2xl border-2 px-5 py-4 sm:px-6 sm:py-5"
            style={{
              borderColor: GOLD,
              background: "#FAF6F0",
            }}
          >
            <span
              style={{ fontFamily: "Georgia, serif" }}
              className="text-base text-[#1C1810] sm:text-lg"
            >
              unbelievable
            </span>
          </div>

          <div className="relative h-36 w-40 overflow-hidden sm:h-40 sm:w-48">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-[#FAF6F0] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col-reverse gap-1">
              {OTHER_WORDS.map((word) => (
                <div
                  key={word}
                  className="truncate rounded-md border px-2 py-1 text-center text-[9px] leading-tight text-[#1C1810]/70 sm:text-[10px]"
                  style={{
                    borderColor: `${GOLD}66`,
                    background: "#FAF6F0",
                  }}
                >
                  {word}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-sm italic text-[#5B564C]">
          A brick for every word → an impossible box.
        </p>
      </motion.div>

      {/* Just right — tokens */}
      <motion.div
        initial={rowInitial}
        whileInView={rowWhileInView}
        viewport={rowViewport}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
          Just right — tokens
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {TOKEN_CHUNKS.map((chunk, index) => {
            const chunkInitial = shouldReduceMotion
              ? undefined
              : { opacity: 0, scale: 0.85 };
            const chunkWhileInView = shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: [0.85, 1.08, 1] };
            return (
              <motion.div
                key={chunk}
                initial={chunkInitial}
                whileInView={chunkWhileInView}
                viewport={rowViewport}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : 0.3 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center justify-center rounded-2xl border-2 px-4 py-3 sm:px-5 sm:py-4"
                style={{
                  borderColor: GOLD,
                  background:
                    "linear-gradient(180deg, rgba(184,134,11,0.14), rgba(184,134,11,0.04))",
                  boxShadow: "0 0 26px rgba(184,134,11,0.25)",
                }}
              >
                <span
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-base text-[#1C1810] sm:text-lg"
                >
                  {chunk}
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-5 text-center text-sm italic text-[#5B564C]">
          A few common chunks → just right.
        </p>
      </motion.div>
    </div>
  );
}
