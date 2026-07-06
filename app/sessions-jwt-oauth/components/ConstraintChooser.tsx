"use client";

import { useState } from "react";
import { Fraunces } from "next/font/google";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

type OptionId = "a" | "b" | "c";

const options: {
  id: OptionId;
  accent: string;
  emoji: string;
  question: string;
  result: string;
}[] = [
  {
    id: "a",
    accent: "#1E3A6D",
    emoji: "🔑",
    question:
      "I need to log people out instantly — bans, 'sign out everywhere', sensitive accounts.",
    result:
      "Reach for Sessions. The server keeps the guest list, so you can cross someone off the moment you need to. You trade some scaling effort for total control — usually worth it for banking, admin panels, anything high-stakes.",
  },
  {
    id: "b",
    accent: "#B45309",
    emoji: "🎟️",
    question:
      "I have many services, mobile apps, or huge scale — and lookups on every request would hurt.",
    result:
      "Reach for JWT. The proof travels with the user, so any server can verify it alone — no shared notebook. Just plan for revocation up front: short expiry plus a refresh step. Great for APIs, microservices, and mobile.",
  },
  {
    id: "c",
    accent: "#2F6B4F",
    emoji: "🅿️",
    question:
      "I want users to log in with Google/GitHub, or let my app access their data elsewhere.",
    result:
      "That's OAuth — a different question entirely. You'll still pick Sessions or JWT to keep users logged in afterwards. Use a trusted library; don't hand-roll it.",
  },
];

export default function ConstraintChooser() {
  const [selectedId, setSelectedId] = useState<OptionId | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const selected = options.find((option) => option.id === selectedId) ?? null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#1E3A6D] sm:text-base">
          Your turn
        </span>
      </Reveal>

      <Reveal delay={0.05}>
        <h2
          className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
        >
          So which one do you actually need?
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5B564C]">
          There&apos;s no universal winner. The right choice falls out of one
          honest question about your app. Pick what matters most:
        </p>
      </Reveal>

      <div className="mt-10 max-w-3xl space-y-4">
        {options.map((option, index) => {
          const isSelected = option.id === selectedId;
          return (
            <Reveal key={option.id} delay={0.15 + index * 0.08}>
              <button
                type="button"
                onClick={() =>
                  setSelectedId((current) =>
                    current === option.id ? null : option.id,
                  )
                }
                aria-pressed={isSelected}
                className="block w-full cursor-pointer rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                style={{
                  borderColor: isSelected
                    ? option.accent
                    : "rgba(28,24,16,0.1)",
                  backgroundColor: isSelected
                    ? `${option.accent}14`
                    : "rgba(255,255,255,0.4)",
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{option.emoji}</span>
                  <span className="text-base leading-relaxed text-[#1C1810] sm:text-lg">
                    {option.question}
                  </span>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-6 max-w-3xl">
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={
                shouldReduceMotion ? undefined : { opacity: 0, height: 0 }
              }
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, height: "auto" }
              }
              exit={
                shouldReduceMotion ? undefined : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="rounded-2xl border p-6 sm:p-8"
                style={{
                  borderColor: selected.accent,
                  backgroundColor: `${selected.accent}0D`,
                }}
              >
                <span className="text-3xl">{selected.emoji}</span>
                <p className="mt-3 text-lg leading-relaxed text-[#3A3630]">
                  {selected.result}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Reveal delay={0.4}>
        <p className="mt-8 max-w-2xl text-sm text-[#5B564C]">
          Most real apps use more than one. That&apos;s not indecision
          &mdash; it&apos;s the point.
        </p>
      </Reveal>
    </section>
  );
}
