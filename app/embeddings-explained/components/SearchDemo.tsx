"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const query = "something to keep my coffee hot";

const results = [
  { id: "mug", label: "Insulated travel mug" },
  { id: "thermos", label: "Stainless steel thermos" },
  { id: "flask", label: "Vacuum flask" },
];

function ResultTag() {
  return (
    <span className="inline-block rounded-full bg-[#0D7377]/10 px-2.5 py-0.5 text-xs font-medium text-[#0D7377]">
      match by meaning
    </span>
  );
}

function MatchTally() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
      <span className="text-[#5B564C]/50 line-through decoration-[#5B564C]/50">
        0 keyword matches
      </span>
      <span className="text-[#1C1810]/20">·</span>
      <span className="font-medium text-[#0D7377]">3 meaning matches</span>
    </div>
  );
}

export default function SearchDemo() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Play once when scrolled into view, then stay put — no looping.
  const isInView = useInView(containerRef, { amount: 0.4, once: true });
  const phase = isInView ? "visible" : "hidden";

  const ariaLabel =
    "A search box with the query 'something to keep my coffee hot', returning three results — insulated travel mug, stainless steel thermos, and vacuum flask — each tagged 'match by meaning', even though none of the result text shares a word with the query. Zero keyword matches, three meaning matches.";

  if (shouldReduceMotion) {
    return (
      <div
        className="mx-auto w-full max-w-xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10"
        role="img"
        aria-label={ariaLabel}
      >
        <div className="flex items-center gap-3 rounded-xl border border-[#1C1810]/15 bg-white px-4 py-3">
          <span className="text-[#1C1810]/40" aria-hidden="true">
            🔍
          </span>
          <span
            className="text-base text-[#1C1810] sm:text-lg"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {query}
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {results.map((r) => (
            <div
              key={r.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-[#0D7377]/5 px-4 py-3"
            >
              <span className="text-[#1C1810]">{r.label}</span>
              <ResultTag />
            </div>
          ))}
        </div>

        <MatchTally />
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
        className="flex items-center gap-3 rounded-xl border border-[#1C1810]/15 bg-white px-4 py-3"
        initial={{ opacity: 0, y: 10 }}
        animate={phase === "visible" ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <span className="text-[#1C1810]/40" aria-hidden="true">
          🔍
        </span>
        <span
          className="text-base text-[#1C1810] sm:text-lg"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {query}
        </span>
      </motion.div>

      <motion.div
        className="mt-6 flex flex-col gap-3"
        initial="hidden"
        animate={phase}
      >
        {results.map((r, i) => (
          <motion.div
            key={r.id}
            className="flex items-center justify-between gap-3 rounded-xl bg-[#0D7377]/5 px-4 py-3"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.4 + i * 0.18,
                  ease: EASE_OUT,
                },
              },
            }}
          >
            <span className="text-[#1C1810]">{r.label}</span>
            <ResultTag />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={phase === "visible" ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 1.1, ease: EASE_OUT }}
      >
        <MatchTally />
      </motion.div>
    </div>
  );
}
