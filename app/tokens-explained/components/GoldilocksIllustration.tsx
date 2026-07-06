"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

export default function GoldilocksIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const row1Animate = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: [0, 0, 1, 1, 0, 0], y: [8, 8, 0, 0, 0, 8] };
  const row1Transition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.05, 0.15, 0.85, 0.95, 1],
        ease: "easeInOut" as const,
      };

  const row2Animate = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: [0, 0, 1, 1, 0, 0], y: [8, 8, 0, 0, 0, 8] };
  const row2Transition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.15, 0.25, 0.85, 0.95, 1],
        ease: "easeInOut" as const,
      };

  const row3Animate = shouldReduceMotion
    ? { opacity: 1, scale: 1 }
    : { opacity: [0, 0, 1, 1, 1, 0, 0], scale: [0.9, 0.9, 1.08, 1, 1, 1, 0.9] };
  const row3Transition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.3, 0.4, 0.48, 0.85, 0.95, 1],
        ease: "easeInOut" as const,
      };

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="Three rows comparing token sizes: a single letter with a question mark (too small), a toppling tower of word bricks (too big), and a tidy row of a few clean bricks (just right)"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* Row 1 — too small: a single letter, meaningless on its own */}
      <motion.g animate={row1Animate} transition={row1Transition}>
        <text
          x="195"
          y="140"
          fontSize="42"
          fontFamily="Georgia, serif"
          fill={GOLD}
        >
          c
        </text>
        <circle
          cx="272"
          cy="108"
          r="19"
          fill="#FAF6F0"
          stroke={GOLD}
          strokeWidth="3.5"
        />
        <text
          x="272"
          y="115"
          textAnchor="middle"
          fontSize="18"
          fontFamily="Georgia, serif"
          fill={GOLD}
        >
          ?
        </text>
        <text
          x="240"
          y="168"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Georgia, monospace"
          fill={GOLD}
          opacity="0.6"
        >
          too small
        </text>
      </motion.g>

      {/* Row 2 — too big: an impossible, wobbling tower of bricks */}
      <motion.g animate={row2Animate} transition={row2Transition}>
        <rect x="204" y="190" width="72" height="15" rx="4" fill="#FAF6F0" stroke={GOLD} strokeWidth="3" transform="rotate(-3 240 197)" />
        <rect x="192" y="206" width="96" height="15" rx="4" fill="#FAF6F0" stroke={GOLD} strokeWidth="3" transform="rotate(2 240 213)" />
        <rect x="198" y="222" width="84" height="15" rx="4" fill="#FAF6F0" stroke={GOLD} strokeWidth="3" transform="rotate(-2 240 229)" />
        <rect x="186" y="238" width="108" height="15" rx="4" fill="#FAF6F0" stroke={GOLD} strokeWidth="3" transform="rotate(3 240 245)" />
        <rect x="196" y="254" width="88" height="15" rx="4" fill="#FAF6F0" stroke={GOLD} strokeWidth="3" transform="rotate(-1 240 261)" />
        <text
          x="240"
          y="288"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Georgia, monospace"
          fill={GOLD}
          opacity="0.6"
        >
          too big
        </text>
      </motion.g>

      {/* Row 3 — just right: a tidy handful of clean bricks */}
      <motion.g
        style={{ transformOrigin: "240px 345px" }}
        animate={row3Animate}
        transition={row3Transition}
      >
        {[160, 240, 320].map((x) => (
          <g key={x}>
            <circle cx={x - 12} cy="330" r="4" fill="none" stroke={GOLD} strokeWidth="2.5" />
            <circle cx={x + 12} cy="330" r="4" fill="none" stroke={GOLD} strokeWidth="2.5" />
            <rect
              x={x - 30}
              y="330"
              width="60"
              height="30"
              rx="7"
              fill="#FAF6F0"
              stroke={GOLD}
              strokeWidth="3.5"
            />
          </g>
        ))}
        <text
          x="240"
          y="385"
          textAnchor="middle"
          fontSize="11"
          fontFamily="Georgia, monospace"
          fill={GOLD}
          opacity="0.6"
        >
          just right
        </text>
      </motion.g>
    </svg>
  );
}
