"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DeskSurface, Sheet, GOLD } from "./PaperSheet";
import ReplayButton from "./ReplayButton";

const MAX_ON_DESK = 5;
const TOTAL_DROPS = 7;

function buildSteps(): number[][] {
  const steps: number[][] = [];
  let current: number[] = [];
  for (let i = 0; i < TOTAL_DROPS; i++) {
    current = [...current, i];
    if (current.length > MAX_ON_DESK) current = current.slice(1);
    steps.push(current);
  }
  return steps;
}

function rotateFor(id: number) {
  return ((id % 3) - 1) * 6;
}

function ContextWindowPapersAnimation({
  reduceMotion,
}: {
  reduceMotion: boolean;
}) {
  const steps = useMemo(() => buildSteps(), []);
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || !started) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const advance = (i: number) => {
      if (i >= steps.length - 1) return;
      timer = setTimeout(() => {
        if (cancelled) return;
        setStepIndex(i + 1);
        advance(i + 1);
      }, 650);
    };

    advance(0);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [started, reduceMotion, steps]);

  if (reduceMotion) {
    return (
      <DeskSurface>
        <div
          className="relative shrink-0"
          style={{ transform: "translate(-18px, 12px) rotate(-30deg)" }}
        >
          <Sheet
            initial={false}
            animate={{ opacity: 0.45, rotate: 0 }}
            transition={{ duration: 0 }}
          />
        </div>
        {Array.from({ length: MAX_ON_DESK }).map((_, i) => (
          <Sheet
            key={i}
            initial={false}
            animate={{ opacity: 1, rotate: rotateFor(i) }}
            transition={{ duration: 0 }}
          />
        ))}
      </DeskSurface>
    );
  }

  const onDesk = steps[stepIndex];

  return (
    <motion.div
      onViewportEnter={() => !reduceMotion && setStarted(true)}
      viewport={{ once: true, margin: "-80px" }}
    >
      <DeskSurface>
        <AnimatePresence mode="popLayout">
          {onDesk.map((id) => (
            <Sheet
              key={id}
              rotate={rotateFor(id)}
              initial={{ opacity: 0, y: -26, rotate: 6 }}
              exit={{ opacity: 0, x: -46, y: 22, rotate: -40 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            />
          ))}
        </AnimatePresence>
      </DeskSurface>
    </motion.div>
  );
}

export default function ContextWindowPapers() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);
  const [replayKey, setReplayKey] = useState(0);

  return (
    <div className="flex flex-col items-center">
      <ContextWindowPapersAnimation
        key={replayKey}
        reduceMotion={reduceMotion}
      />

      <p
        className="mt-4 text-xs uppercase tracking-[0.14em]"
        style={{ color: `${GOLD}99` }}
      >
        context window
      </p>

      <ReplayButton
        className="mt-4"
        onReplay={() => setReplayKey((key) => key + 1)}
      />
    </div>
  );
}
