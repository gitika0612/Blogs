"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

type Piece = {
  key: string;
  text: string;
  id: string;
};

type Stage = {
  pieces: Piece[];
  tokenCount: number;
};

const stages: Stage[] = [
  {
    pieces: [{ key: "p0", text: "hello", id: "24912" }],
    tokenCount: 1,
  },
  {
    pieces: [
      { key: "p0", text: "hell", id: "15339" },
      { key: "p1", text: "ooo", id: "780" },
    ],
    tokenCount: 2,
  },
  {
    pieces: [
      { key: "p0", text: "hell", id: "15339" },
      { key: "p1", text: "oo", id: "3020" },
      { key: "p2", text: "ooo", id: "78" },
    ],
    tokenCount: 3,
  },
];

export default function TokenSplitter() {
  const shouldReduceMotion = useReducedMotion();
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setStageIndex((current) => (current + 1) % stages.length);
    }, 2400);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const activeStage = shouldReduceMotion
    ? stages[stages.length - 1]
    : stages[stageIndex];

  return (
    <div className="flex flex-col items-center gap-8 py-4">
      <div className="flex min-h-[120px] items-center justify-center gap-3 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {activeStage.pieces.map((piece) => (
            <motion.div
              key={piece.key}
              layout
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.75 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              className="flex flex-col items-center justify-center rounded-2xl border-2 px-5 py-4 sm:px-7 sm:py-5"
              style={{
                borderColor: GOLD,
                background:
                  "linear-gradient(180deg, rgba(184,134,11,0.14), rgba(184,134,11,0.04))",
                boxShadow: "0 0 26px rgba(184,134,11,0.25)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={piece.text}
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-xl text-[#1C1810] sm:text-2xl"
                >
                  {piece.text}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.span
                  key={piece.id}
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="mt-1.5 font-mono text-xs text-[#B8860B]/80 sm:text-[13px]"
                >
                  {piece.id}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={activeStage.tokenCount}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-semibold uppercase tracking-[0.14em] text-[#B8860B]"
        >
          {activeStage.tokenCount}{" "}
          {activeStage.tokenCount === 1 ? "token" : "tokens"}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
