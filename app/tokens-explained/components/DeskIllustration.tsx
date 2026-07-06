"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

const bricks = [
  { x: 108 },
  { x: 156 },
  { x: 204 },
  { x: 252 },
  { x: 300 },
];

export default function DeskIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const overflowAnimate = shouldReduceMotion
    ? { x: -34, y: 22, rotate: -35, opacity: 0.4 }
    : {
        x: [0, 0, 0, -34, -34, 0],
        y: [0, 0, 0, 22, 22, 0],
        rotate: [0, 0, 0, -35, -35, 0],
        opacity: [1, 1, 1, 0.4, 0.4, 1],
      };
  const overflowTransition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.5, 0.65, 0.78, 0.92, 1],
        ease: "easeInOut" as const,
      };

  const newBrickAnimate = shouldReduceMotion
    ? { x: 0, opacity: 1 }
    : { x: [40, 40, 0, 0, 0, 40], opacity: [0, 0, 1, 1, 1, 0] };
  const newBrickTransition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.45, 0.65, 0.78, 0.92, 1],
        ease: "easeInOut" as const,
      };

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A desk viewed from the side, stacked with token bricks, with new bricks sliding on from the right and the leftmost brick tipping off the edge as the desk overflows"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* the desk */}
      <line
        x1="80"
        y1="300"
        x2="360"
        y2="300"
        stroke={GOLD}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="90"
        y1="300"
        x2="90"
        y2="330"
        stroke={GOLD}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="350"
        y1="300"
        x2="350"
        y2="330"
        stroke={GOLD}
        strokeWidth="6"
        strokeLinecap="round"
      />

      <text
        x="220"
        y="336"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Georgia, monospace"
        fill={GOLD}
        opacity="0.6"
      >
        context window
      </text>

      {/* the bricks resting on the desk, oldest on the left tipping off */}
      <motion.g animate={overflowAnimate} transition={overflowTransition}>
        <rect
          x={bricks[0].x - 20}
          y="266"
          width="40"
          height="34"
          rx="6"
          fill="#FAF6F0"
          stroke={GOLD}
          strokeWidth="3.5"
        />
      </motion.g>

      {bricks.slice(1).map((brick) => (
        <rect
          key={brick.x}
          x={brick.x - 20}
          y="266"
          width="40"
          height="34"
          rx="6"
          fill="#FAF6F0"
          stroke={GOLD}
          strokeWidth="3.5"
        />
      ))}

      {/* the new brick, sliding on from the right */}
      <motion.g animate={newBrickAnimate} transition={newBrickTransition}>
        <rect
          x="328"
          y="266"
          width="40"
          height="34"
          rx="6"
          fill="#FAF6F0"
          stroke={GOLD}
          strokeWidth="3.5"
        />
      </motion.g>
    </svg>
  );
}
