"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ReplayButton from "./ReplayButton";

const GOLD = "#B8860B";

const CHUNKS = ["anti", "dis", "establish", "ment"];
const HIGHLIGHT_INDEX = 2;

function LongWordSplitAnimation({ reduceMotion }: { reduceMotion: boolean }) {
  const [revealed, setRevealed] = useState(reduceMotion);
  const [pulsed, setPulsed] = useState(reduceMotion);

  useEffect(() => {
    if (!revealed || reduceMotion) return;
    const timer = setTimeout(
      () => setPulsed(true),
      CHUNKS.length * 130 + 500,
    );
    return () => clearTimeout(timer);
  }, [revealed, reduceMotion]);

  return (
    <motion.div
      className="flex flex-col items-center"
      onViewportEnter={() => !reduceMotion && setRevealed(true)}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {CHUNKS.map((chunk, index) => {
          const isHighlight = index === HIGHLIGHT_INDEX;
          const glowing = isHighlight && (pulsed || reduceMotion);

          return (
            <motion.div
              key={chunk}
              initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.9 }}
              animate={
                reduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : revealed
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: isHighlight && pulsed ? [1, 1.14, 1] : 1,
                      }
                    : { opacity: 0, y: 10, scale: 0.9 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: isHighlight && pulsed ? 0.6 : 0.4,
                      delay: index * 0.13,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              className="flex items-center justify-center rounded-2xl border-2 px-4 py-3 sm:px-5 sm:py-4"
              style={{
                borderColor: glowing ? GOLD : `${GOLD}66`,
                background: glowing
                  ? "linear-gradient(180deg, rgba(184,134,11,0.16), rgba(184,134,11,0.05))"
                  : "#FAF6F0",
                boxShadow: glowing ? "0 0 22px rgba(184,134,11,0.3)" : "none",
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

      <p className="mt-4 h-5 text-sm font-medium text-[#B8860B]">
        {(pulsed || reduceMotion) && (
          <span>look — &apos;establish&apos; hiding in plain sight</span>
        )}
      </p>
    </motion.div>
  );
}

export default function LongWordSplit() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <LongWordSplitAnimation key={replayKey} reduceMotion={reduceMotion} />

      <ReplayButton
        className="mt-4"
        onReplay={() => setReplayKey((key) => key + 1)}
      />
    </div>
  );
}
