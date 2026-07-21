"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const TEAL = "#0D7377";

const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];
const FILL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Pair = {
  id: string;
  a: string;
  b: string;
  score: number; // 0-1
  label: string;
  note?: string;
  delay: number;
};

const pairs: Pair[] = [
  {
    id: "cat-dog",
    a: "cat",
    b: "dog",
    score: 0.91,
    label: "very similar",
    delay: 0,
  },
  {
    id: "cat-car",
    a: "cat",
    b: "car",
    score: 0.16,
    label: "barely related",
    note: "look almost identical, mean totally different things",
    delay: 0.35,
  },
  {
    id: "happy-joyful",
    a: "happy",
    b: "joyful",
    score: 0.88,
    label: "nearly the same",
    note: "not a single shared letter, yet very close",
    delay: 0.7,
  },
];

function MeterRow({ pair }: { pair: Pair }) {
  const pct = Math.round(pair.score * 100);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p
          className="text-lg sm:text-xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="italic text-[#1C1810]">&quot;{pair.a}&quot;</span>
          <span className="mx-2 text-[#1C1810]/40">↔</span>
          <span className="italic text-[#1C1810]">&quot;{pair.b}&quot;</span>
        </p>
        <motion.span
          className="font-mono text-sm text-[#0D7377] sm:text-base"
          variants={{
            hidden: {
              opacity: 0,
              transition: { duration: 0.3, ease: EASE_IN_OUT },
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.3,
                delay: pair.delay + 0.9,
                ease: EASE_IN_OUT,
              },
            },
          }}
        >
          {pct}%
        </motion.span>
      </div>

      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#1C1810]/8">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: TEAL }}
          variants={{
            hidden: {
              width: "0%",
              transition: { duration: 0.6, ease: EASE_IN_OUT },
            },
            visible: {
              width: `${pct}%`,
              transition: {
                duration: 1,
                delay: pair.delay,
                ease: FILL_EASE,
              },
            },
          }}
        />
      </div>

      <motion.p
        className="mt-2 text-sm text-[#5B564C] sm:text-base"
        variants={{
          hidden: {
            opacity: 0,
            transition: { duration: 0.3, ease: EASE_IN_OUT },
          },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.3,
              delay: pair.delay + 0.9,
              ease: EASE_IN_OUT,
            },
          },
        }}
      >
        <span className="text-[#0D7377]">{pair.label}</span>
        {pair.note ? <span className="text-[#5B564C]"> &mdash; {pair.note}</span> : null}
      </motion.p>
    </div>
  );
}

function StaticMeterRow({ pair }: { pair: Pair }) {
  const pct = Math.round(pair.score * 100);

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p
          className="text-lg sm:text-xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="italic text-[#1C1810]">&quot;{pair.a}&quot;</span>
          <span className="mx-2 text-[#1C1810]/40">↔</span>
          <span className="italic text-[#1C1810]">&quot;{pair.b}&quot;</span>
        </p>
        <span className="font-mono text-sm text-[#0D7377] sm:text-base">
          {pct}%
        </span>
      </div>

      <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-[#1C1810]/8">
        <div
          className="h-full rounded-full"
          style={{ backgroundColor: TEAL, width: `${pct}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-[#5B564C] sm:text-base">
        <span className="text-[#0D7377]">{pair.label}</span>
        {pair.note ? <span className="text-[#5B564C]"> &mdash; {pair.note}</span> : null}
      </p>
    </div>
  );
}

export default function SimilarityMeter() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Play once when scrolled into view, then stay filled — no looping.
  const isInView = useInView(containerRef, { amount: 0.4, once: true });
  const phase = isInView ? "visible" : "hidden";

  const ariaLabel =
    "A set of similarity meters comparing word pairs. 'cat' and 'dog' score 91 percent, very similar. 'cat' and 'car' score 16 percent, barely related, despite looking almost identical as words. 'happy' and 'joyful' score 88 percent, nearly the same, despite sharing no letters.";

  if (shouldReduceMotion) {
    return (
      <div
        className="mx-auto w-full max-w-xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="flex flex-col gap-8">
          {pairs.map((pair) => (
            <StaticMeterRow key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10"
      role="img"
      aria-label={ariaLabel}
    >
      <motion.div
        className="flex flex-col gap-8"
        initial="hidden"
        animate={phase}
      >
        {pairs.map((pair) => (
          <MeterRow key={pair.id} pair={pair} />
        ))}
      </motion.div>
    </div>
  );
}
