"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DeskSurface, Sheet } from "./PaperSheet";

type SheetSize = "full" | "thumbnail";
type Piece = { key: string; size: SheetSize; isNew?: boolean };

const GENTLE_TRANSITION = { type: "spring", stiffness: 170, damping: 26 } as const;
const STAGE_DURATIONS = [1400, 1800, 2800];

function buildStages(cycle: number): Piece[][] {
  const p = `c${cycle}`;
  const id = (n: number) => `${p}-s${n}`;

  const stage0: Piece[] = [0, 1, 2, 3, 4].map((n) => ({
    key: id(n),
    size: "full",
  }));

  const stage1: Piece[] = [
    { key: id(0), size: "thumbnail" },
    { key: id(1), size: "thumbnail" },
    { key: id(2), size: "thumbnail" },
    { key: id(3), size: "full" },
    { key: id(4), size: "full" },
  ];

  const stage2: Piece[] = [
    ...stage1,
    { key: id(5), size: "full", isNew: true },
    { key: id(6), size: "full", isNew: true },
  ];

  return [stage0, stage1, stage2];
}

function rotateFor(index: number) {
  return ((index % 3) - 1) * 5;
}

function ContextCompactionPapersAnimation() {
  const [inView, setInView] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const isLast = stageIndex >= STAGE_DURATIONS.length - 1;
    const timer = setTimeout(
      () => {
        if (isLast) {
          setCycle((c) => c + 1);
          setStageIndex(0);
        } else {
          setStageIndex((i) => i + 1);
        }
      },
      STAGE_DURATIONS[stageIndex],
    );
    return () => clearTimeout(timer);
  }, [inView, cycle, stageIndex]);

  const pieces = buildStages(cycle)[stageIndex];

  return (
    <motion.div
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ margin: "-80px" }}
    >
      <DeskSurface>
        <AnimatePresence mode="popLayout">
          {pieces.map((piece, i) => (
            <Sheet
              key={piece.key}
              size={piece.size}
              rotate={rotateFor(i)}
              initial={
                piece.isNew
                  ? { opacity: 0, y: -22, rotate: 6 }
                  : { opacity: 0, scale: 0.7 }
              }
              exit={{ opacity: 0, scale: 0.6 }}
              transition={GENTLE_TRANSITION}
            />
          ))}
        </AnimatePresence>
      </DeskSurface>
    </motion.div>
  );
}

function ContextCompactionPapersStatic() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
      <div className="flex flex-col items-center">
        <DeskSurface>
          {[0, 1, 2, 3, 4].map((i) => (
            <Sheet
              key={i}
              rotate={rotateFor(i)}
              initial={false}
              animate={{ opacity: 1, rotate: rotateFor(i) }}
              transition={{ duration: 0 }}
            />
          ))}
        </DeskSurface>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#B8860B]/60">
          before — desk full
        </p>
      </div>

      <span className="text-2xl text-[#B8860B]/50">→</span>

      <div className="flex flex-col items-center">
        <DeskSurface>
          {[0, 1, 2].map((i) => (
            <Sheet
              key={i}
              size="thumbnail"
              initial={false}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0 }}
            />
          ))}
          {[3, 4].map((i) => (
            <Sheet
              key={i}
              rotate={rotateFor(i)}
              initial={false}
              animate={{ opacity: 1, rotate: rotateFor(i) }}
              transition={{ duration: 0 }}
            />
          ))}
        </DeskSurface>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#B8860B]/60">
          after — room to spare
        </p>
      </div>
    </div>
  );
}

export default function ContextCompactionPapers() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  if (reduceMotion) {
    return (
      <div className="flex justify-center">
        <ContextCompactionPapersStatic />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <ContextCompactionPapersAnimation />
    </div>
  );
}
