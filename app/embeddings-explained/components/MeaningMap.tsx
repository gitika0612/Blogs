"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const TEAL = "#0D7377";
const INK = "#1C1810";

// Soft, slow ease for the re-scatter — calm, never a snap.
const SCATTER_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
// Gentle spring for drifting into clusters.
const CLUSTER_SPRING = { type: "spring" as const, stiffness: 55, damping: 13 };

type Point = {
  id: string;
  label: string;
  cluster: "royalty" | "animals" | "fruits";
  scattered: { x: number; y: number };
  clustered: { x: number; y: number };
};

const points: Point[] = [
  // Royalty cluster
  {
    id: "king",
    label: "king",
    cluster: "royalty",
    scattered: { x: 80, y: 350 },
    clustered: { x: 140, y: 110 },
  },
  {
    id: "queen",
    label: "queen",
    cluster: "royalty",
    scattered: { x: 560, y: 40 },
    clustered: { x: 205, y: 100 },
  },
  {
    id: "prince",
    label: "prince",
    cluster: "royalty",
    scattered: { x: 330, y: 20 },
    clustered: { x: 175, y: 165 },
  },
  // Animals cluster
  {
    id: "cat",
    label: "cat",
    cluster: "animals",
    scattered: { x: 60, y: 50 },
    clustered: { x: 460, y: 95 },
  },
  {
    id: "dog",
    label: "dog",
    cluster: "animals",
    scattered: { x: 600, y: 340 },
    clustered: { x: 530, y: 115 },
  },
  {
    id: "rabbit",
    label: "rabbit",
    cluster: "animals",
    scattered: { x: 240, y: 390 },
    clustered: { x: 490, y: 175 },
  },
  // Fruits cluster
  {
    id: "banana",
    label: "banana",
    cluster: "fruits",
    scattered: { x: 580, y: 180 },
    clustered: { x: 270, y: 300 },
  },
  {
    id: "apple",
    label: "apple",
    cluster: "fruits",
    scattered: { x: 30, y: 220 },
    clustered: { x: 345, y: 290 },
  },
  {
    id: "mango",
    label: "mango",
    cluster: "fruits",
    scattered: { x: 420, y: 30 },
    clustered: { x: 310, y: 355 },
  },
];

const pointById = (id: string) => points.find((p) => p.id === id)!;

const lines = [
  { id: "king-queen", a: pointById("king"), b: pointById("queen") },
  { id: "queen-prince", a: pointById("queen"), b: pointById("prince") },
  { id: "cat-dog", a: pointById("cat"), b: pointById("dog") },
  { id: "dog-rabbit", a: pointById("dog"), b: pointById("rabbit") },
  { id: "banana-apple", a: pointById("banana"), b: pointById("apple") },
  { id: "apple-mango", a: pointById("apple"), b: pointById("mango") },
];

const halos = [
  { id: "royalty", cx: 173, cy: 125 },
  { id: "animals", cx: 493, cy: 128 },
  { id: "fruits", cx: 308, cy: 315 },
];

export default function MeaningMap() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  // Play once when scrolled into view, then stay clustered — no looping.
  const isInView = useInView(containerRef, { amount: 0.4, once: true });
  const phase = isInView ? "visible" : "hidden";

  const ariaLabel =
    "A 2D map showing words clustered by meaning: king, queen, and prince grouped together; cat, dog, and rabbit grouped together; and banana, apple, and mango grouped together, with unrelated words positioned far apart.";

  if (shouldReduceMotion) {
    return (
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10">
        <svg
          viewBox="0 0 640 420"
          className="h-auto w-full"
          role="img"
          aria-label={ariaLabel}
        >
          <defs>
            <radialGradient id="tealHaloStatic">
              <stop offset="0%" stopColor={TEAL} stopOpacity={0.32} />
              <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
            </radialGradient>
          </defs>

          {halos.map((h) => (
            <circle
              key={h.id}
              cx={h.cx}
              cy={h.cy}
              r={95}
              fill="url(#tealHaloStatic)"
            />
          ))}

          {lines.map((l) => (
            <line
              key={l.id}
              x1={l.a.clustered.x}
              y1={l.a.clustered.y}
              x2={l.b.clustered.x}
              y2={l.b.clustered.y}
              stroke={TEAL}
              strokeWidth={1}
              opacity={0.25}
            />
          ))}

          {points.map((p) => (
            <g key={p.id}>
              <circle cx={p.clustered.x} cy={p.clustered.y} r={6} fill={TEAL} />
              <text
                x={p.clustered.x}
                y={p.clustered.y - 14}
                textAnchor="middle"
                fontSize={13}
                fill={INK}
                fontFamily="var(--font-geist-sans), sans-serif"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full max-w-3xl rounded-3xl border border-[#1C1810]/10 bg-white/50 p-6 shadow-sm shadow-[#1C1810]/5 sm:p-10"
    >
      <motion.svg
        viewBox="0 0 640 420"
        className="h-auto w-full"
        role="img"
        aria-label={ariaLabel}
        initial="hidden"
        animate={phase}
      >
        <defs>
          <radialGradient id="tealHalo">
            <stop offset="0%" stopColor={TEAL} stopOpacity={0.32} />
            <stop offset="100%" stopColor={TEAL} stopOpacity={0} />
          </radialGradient>
        </defs>

        {halos.map((h) => (
          <motion.circle
            key={h.id}
            cx={h.cx}
            cy={h.cy}
            fill="url(#tealHalo)"
            variants={{
              hidden: {
                r: 34,
                opacity: 0,
                transition: { duration: 2, ease: SCATTER_EASE },
              },
              visible: {
                r: 95,
                opacity: 1,
                transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        ))}

        {lines.map((l) => (
          <motion.line
            key={l.id}
            stroke={TEAL}
            strokeWidth={1}
            variants={{
              hidden: {
                x1: l.a.scattered.x,
                y1: l.a.scattered.y,
                x2: l.b.scattered.x,
                y2: l.b.scattered.y,
                opacity: 0,
                transition: { duration: 2, ease: SCATTER_EASE },
              },
              visible: {
                x1: l.a.clustered.x,
                y1: l.a.clustered.y,
                x2: l.b.clustered.x,
                y2: l.b.clustered.y,
                opacity: 0.25,
                transition: { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          />
        ))}

        {points.map((p, index) => (
          <g key={p.id}>
            <motion.circle
              r={6}
              fill={TEAL}
              variants={{
                hidden: {
                  cx: p.scattered.x,
                  cy: p.scattered.y,
                  opacity: 0.5,
                  transition: {
                    duration: 2.2,
                    ease: SCATTER_EASE,
                    delay: index * 0.03,
                  },
                },
                visible: {
                  cx: p.clustered.x,
                  cy: p.clustered.y,
                  opacity: 1,
                  transition: { ...CLUSTER_SPRING, delay: index * 0.06 },
                },
              }}
            />
            <motion.text
              textAnchor="middle"
              fontSize={13}
              fill={INK}
              fontFamily="var(--font-geist-sans), sans-serif"
              variants={{
                hidden: {
                  x: p.scattered.x,
                  y: p.scattered.y - 14,
                  opacity: 0,
                  transition: {
                    duration: 2.2,
                    ease: SCATTER_EASE,
                    delay: index * 0.03,
                  },
                },
                visible: {
                  x: p.clustered.x,
                  y: p.clustered.y - 14,
                  opacity: 1,
                  transition: { ...CLUSTER_SPRING, delay: index * 0.06 + 0.1 },
                },
              }}
            >
              {p.label}
            </motion.text>
          </g>
        ))}
      </motion.svg>
    </div>
  );
}
