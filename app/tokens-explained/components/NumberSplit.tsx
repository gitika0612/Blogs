"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ReplayButton from "./ReplayButton";

const GOLD = "#B8860B";

type Piece = { key: string; text: string };

const wholeStage: Piece[] = [{ key: "p0", text: "1234567890" }];
const splitStage: Piece[] = [
  { key: "p0", text: "123" },
  { key: "p1", text: "456" },
  { key: "p2", text: "789" },
  { key: "p3", text: "0" },
];

function NumberSplitAnimation({ reduceMotion }: { reduceMotion: boolean }) {
  const [started, setStarted] = useState(false);
  const [split, setSplit] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || !started) return;
    const timer = setTimeout(() => setSplit(true), 1100);
    return () => clearTimeout(timer);
  }, [started, reduceMotion]);

  const pieces = split ? splitStage : wholeStage;

  return (
    <motion.div
      className="flex flex-col items-center"
      onViewportEnter={() => !reduceMotion && setStarted(true)}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="flex min-h-[64px] items-center justify-center gap-2 sm:gap-3">
        <AnimatePresence mode="popLayout">
          {pieces.map((piece) => (
            <motion.div
              key={piece.key}
              layout
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.8 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 22 }
              }
              className="flex items-center justify-center rounded-2xl border-2 px-4 py-3 sm:px-5 sm:py-4"
              style={{
                borderColor: split ? GOLD : `${GOLD}66`,
                background: split
                  ? "linear-gradient(180deg, rgba(184,134,11,0.14), rgba(184,134,11,0.04))"
                  : "#FAF6F0",
                boxShadow: split ? "0 0 22px rgba(184,134,11,0.25)" : "none",
              }}
            >
              <span
                style={{ fontFamily: "Georgia, monospace" }}
                className="text-base text-[#1C1810] sm:text-lg"
              >
                {piece.text}
              </span>
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
          className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#B8860B]"
        >
          {split ? "4 tokens" : "looks like one clean number"}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}

export default function NumberSplit() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <NumberSplitAnimation key={replayKey} reduceMotion={reduceMotion} />

      <ReplayButton
        className="mt-4"
        onReplay={() => setReplayKey((key) => key + 1)}
      />
    </div>
  );
}
