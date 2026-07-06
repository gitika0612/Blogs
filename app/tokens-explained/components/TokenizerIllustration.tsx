"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

export default function TokenizerIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const wordAnimate = shouldReduceMotion
    ? { x: 95 }
    : { x: [0, 0, 95, 95, 0] };

  const wordTransition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.15, 0.4, 0.55, 1],
        ease: "easeInOut" as const,
      };

  const bricks = [
    { y: 190, number: "24912" },
    { y: 240, number: "15339" },
    { y: 290, number: "780" },
  ];

  const brickTiming = [
    { times: [0, 0.38, 0.42, 0.46, 0.9, 1] },
    { times: [0, 0.44, 0.48, 0.52, 0.92, 1] },
    { times: [0, 0.5, 0.54, 0.58, 0.94, 1] },
  ];

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="The word hello sliding into a tokenizer and emerging as three numbered Lego-style bricks"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* the word, sliding in */}
      <motion.g animate={wordAnimate} transition={wordTransition}>
        <text
          x="95"
          y="248"
          fontSize="32"
          fontFamily="Georgia, serif"
          fill={GOLD}
        >
          hello
        </text>
      </motion.g>

      {/* the tokenizer */}
      <path
        d="M205 195 L275 195 L252 265 L228 265 Z"
        fill="#FAF6F0"
        stroke={GOLD}
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <text
        x="240"
        y="288"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Georgia, monospace"
        fill={GOLD}
        opacity="0.6"
      >
        tokenize()
      </text>

      {/* the bricks, flipping to reveal their numbers */}
      {bricks.map((brick, index) => {
        const timing = brickTiming[index];
        const scaleYAnimate = shouldReduceMotion
          ? { scaleY: 1 }
          : { scaleY: [1, 1, 0.12, 1, 1, 1] };
        const scaleYTransition = shouldReduceMotion
          ? undefined
          : {
              duration: 4,
              repeat: Infinity,
              times: timing.times,
              ease: "easeInOut" as const,
            };

        const numberAnimate = shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: [0, 0, 0, 1, 1, 0] };
        const numberTransition = shouldReduceMotion
          ? undefined
          : {
              duration: 4,
              repeat: Infinity,
              times: timing.times,
              ease: "easeInOut" as const,
            };

        return (
          <motion.g
            key={brick.number}
            style={{ transformOrigin: `340px ${brick.y + 20}px` }}
            animate={scaleYAnimate}
            transition={scaleYTransition}
          >
            <circle cx="322" cy={brick.y} r="5" fill="none" stroke={GOLD} strokeWidth="3" />
            <circle cx="358" cy={brick.y} r="5" fill="none" stroke={GOLD} strokeWidth="3" />
            <rect
              x="300"
              y={brick.y}
              width="120"
              height="40"
              rx="8"
              fill="#FAF6F0"
              stroke={GOLD}
              strokeWidth="4"
            />
            <motion.text
              x="360"
              y={brick.y + 26}
              textAnchor="middle"
              fontSize="15"
              fontFamily="Georgia, monospace"
              fill={GOLD}
              animate={numberAnimate}
              transition={numberTransition}
            >
              {brick.number}
            </motion.text>
          </motion.g>
        );
      })}
    </svg>
  );
}
