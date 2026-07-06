"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ReplayButton from "./ReplayButton";

const GOLD = "#B8860B";

type Piece = { key: string; id: string | null };

type EmojiSplitProps = {
  emoji: string;
  ids: string[];
  start: boolean;
  delayMs: number;
  reduceMotion: boolean;
  label: string;
};

function EmojiSplit({
  emoji,
  ids,
  start,
  delayMs,
  reduceMotion,
  label,
}: EmojiSplitProps) {
  const [split, setSplit] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || !start) return;
    const timer = setTimeout(() => setSplit(true), delayMs);
    return () => clearTimeout(timer);
  }, [start, delayMs, reduceMotion]);

  const pieces: Piece[] = split
    ? ids.map((id, i) => ({ key: `p${i}`, id }))
    : [{ key: "p0", id: null }];

  return (
    <div className="flex flex-col items-center">
      <div className="flex min-h-[92px] items-center justify-center gap-2 sm:gap-3">
        <AnimatePresence mode="popLayout">
          {pieces.map((piece) => (
            <motion.div
              key={piece.key}
              layout
              initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.75 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              className="flex items-center justify-center rounded-2xl border-2 px-4 py-3 sm:px-6 sm:py-5"
              style={{
                borderColor: split ? GOLD : `${GOLD}66`,
                background: split
                  ? "linear-gradient(180deg, rgba(184,134,11,0.14), rgba(184,134,11,0.04))"
                  : "#FAF6F0",
                boxShadow: split ? "0 0 26px rgba(184,134,11,0.25)" : "none",
              }}
            >
              {piece.id === null ? (
                <span className="text-4xl sm:text-5xl">{emoji}</span>
              ) : (
                <span className="font-mono text-xs text-[#B8860B]/80 sm:text-[13px]">
                  {piece.id}
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={split ? "split" : "whole"}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
          className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#B8860B]"
        >
          {split ? label : "1 symbol"}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function EmojiCostCompareAnimation({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  const [start, setStart] = useState(false);

  return (
    <motion.div
      className="flex flex-wrap items-start justify-center gap-10 sm:gap-20"
      onViewportEnter={() => !reduceMotion && setStart(true)}
      viewport={{ once: true, margin: "-80px" }}
    >
      <EmojiSplit
        emoji="🎈"
        ids={["76", "8837"]}
        start={start}
        delayMs={900}
        reduceMotion={reduceMotion}
        label="2 tokens"
      />
      <EmojiSplit
        emoji="🫵"
        ids={["9834", "2210", "501"]}
        start={start}
        delayMs={2200}
        reduceMotion={reduceMotion}
        label="3 tokens"
      />
    </motion.div>
  );
}

export default function EmojiCostCompare() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <EmojiCostCompareAnimation key={replayKey} reduceMotion={reduceMotion} />

      <ReplayButton
        className="mt-6"
        onReplay={() => setReplayKey((key) => key + 1)}
      />
    </div>
  );
}
