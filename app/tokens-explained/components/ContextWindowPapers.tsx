"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DeskSurface, Sheet, GOLD } from "./PaperSheet";

const MAX_ON_DESK = 5;
const TOTAL_DROPS = 7;
const DROP_MS = 650;
const HOLD_MS = 2400;

function buildSteps(cycle: number): string[][] {
  const prefix = `c${cycle}`;
  const steps: string[][] = [];
  let current: string[] = [];
  for (let i = 0; i < TOTAL_DROPS; i++) {
    current = [...current, `${prefix}-${i}`];
    if (current.length > MAX_ON_DESK) current = current.slice(1);
    steps.push(current);
  }
  return steps;
}

function rotateFor(key: string) {
  const n = Number(key.split("-").pop());
  return ((n % 3) - 1) * 6;
}

export default function ContextWindowPapers() {
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = Boolean(shouldReduceMotion);

  const [inView, setInView] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || !inView) return;
    const isLast = stepIndex >= TOTAL_DROPS - 1;
    const timer = setTimeout(
      () => {
        if (isLast) {
          setCycle((c) => c + 1);
          setStepIndex(0);
        } else {
          setStepIndex((i) => i + 1);
        }
      },
      isLast ? HOLD_MS : DROP_MS,
    );
    return () => clearTimeout(timer);
  }, [inView, reduceMotion, cycle, stepIndex]);

  if (reduceMotion) {
    return (
      <div className="flex flex-col items-center">
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
              animate={{ opacity: 1, rotate: ((i % 3) - 1) * 6 }}
              transition={{ duration: 0 }}
            />
          ))}
        </DeskSurface>

        <p
          className="mt-4 text-xs uppercase tracking-[0.14em]"
          style={{ color: `${GOLD}99` }}
        >
          context window
        </p>
      </div>
    );
  }

  const onDesk = buildSteps(cycle)[stepIndex];

  return (
    <motion.div
      className="flex flex-col items-center"
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
      viewport={{ margin: "-80px" }}
    >
      <DeskSurface>
        <AnimatePresence mode="popLayout">
          {onDesk.map((key) => (
            <Sheet
              key={key}
              rotate={rotateFor(key)}
              initial={{ opacity: 0, y: -26, rotate: 6 }}
              exit={{ opacity: 0, x: -46, y: 22, rotate: -40 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            />
          ))}
        </AnimatePresence>
      </DeskSurface>

      <p
        className="mt-4 text-xs uppercase tracking-[0.14em]"
        style={{ color: `${GOLD}99` }}
      >
        context window
      </p>
    </motion.div>
  );
}
