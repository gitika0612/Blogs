"use client";

import { motion, useReducedMotion } from "framer-motion";

const AMBER = "#B45309";

export default function WristbandIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A festival wristband reading Gitika, Member, exp 11pm, with a seal badge stamping on and a checkmark confirming it's valid"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* wristband */}
      <rect
        x="70"
        y="220"
        width="340"
        height="64"
        rx="32"
        fill="#FAF6F0"
        stroke={AMBER}
        strokeWidth="5"
      />
      <line
        x1="120"
        y1="220"
        x2="120"
        y2="284"
        stroke={AMBER}
        strokeWidth="3"
        strokeDasharray="4 6"
        opacity="0.45"
      />

      <text
        x="248"
        y="258"
        textAnchor="middle"
        fontSize="14"
        fontFamily="Georgia, serif"
        fill={AMBER}
      >
        Gitika · Member · exp 11pm
      </text>

      {/* the seal, pressing on */}
      <motion.g
        style={{ transformOrigin: "385px 222px" }}
        animate={
          shouldReduceMotion ? { scale: 1 } : { scale: [1, 0.82, 1.06, 1, 1] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                times: [0, 0.05, 0.12, 0.2, 1],
                ease: "easeInOut",
              }
        }
      >
        <circle
          cx="385"
          cy="222"
          r="38"
          fill="#FAF6F0"
          stroke={AMBER}
          strokeWidth="5"
        />
      </motion.g>

      {/* the checkmark, confirming the seal is real */}
      <motion.g
        initial={false}
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: [0, 0, 1, 1, 0] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                times: [0, 0.22, 0.32, 0.75, 0.85],
                ease: "easeInOut",
              }
        }
      >
        <path
          d="M368 224 L380 236 L403 202"
          fill="none"
          stroke={AMBER}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
