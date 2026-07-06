"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function KeycardIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A numbered keycard reading #4471 hovering above an open notebook, with the matching row lighting up as it is looked up"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* connector between card and notebook */}
      <line
        x1="345"
        y1="185"
        x2="300"
        y2="250"
        stroke="#1E3A6D"
        strokeWidth="3"
        strokeDasharray="2 8"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* notebook */}
      <rect
        x="90"
        y="250"
        width="300"
        height="150"
        rx="10"
        fill="#FAF6F0"
        stroke="#1E3A6D"
        strokeWidth="5"
      />
      <line
        x1="240"
        y1="250"
        x2="240"
        y2="400"
        stroke="#1E3A6D"
        strokeWidth="3"
        opacity="0.35"
      />

      {/* generic guest-list rows */}
      <line x1="112" y1="280" x2="215" y2="280" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="112" y1="305" x2="200" y2="305" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="112" y1="355" x2="210" y2="355" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="112" y1="380" x2="195" y2="380" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="260" y1="280" x2="360" y2="280" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="260" y1="305" x2="345" y2="305" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="260" y1="355" x2="350" y2="355" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />
      <line x1="260" y1="380" x2="330" y2="380" stroke="#1E3A6D" strokeWidth="3" strokeLinecap="round" opacity="0.25" />

      {/* the matching row, highlighted as it's looked up */}
      <motion.rect
        x="248"
        y="318"
        width="126"
        height="24"
        rx="4"
        fill="#1E3A6D"
        initial={false}
        animate={
          shouldReduceMotion
            ? { opacity: 0.16 }
            : { opacity: [0, 0, 0.22, 0.22, 0] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                times: [0, 0.35, 0.42, 0.72, 0.85],
                ease: "easeInOut",
              }
        }
      />
      <text
        x="254"
        y="334.5"
        fontSize="11"
        fontFamily="Georgia, serif"
        fill="#1E3A6D"
      >
        #4471 — Gitika ✓
      </text>

      {/* the keycard, pulsing before the lookup */}
      <motion.g
        style={{ transformOrigin: "345px 137px" }}
        animate={
          shouldReduceMotion ? { scale: 1 } : { scale: [1, 1, 1.08, 1, 1] }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 4,
                repeat: Infinity,
                times: [0, 0.05, 0.18, 0.3, 1],
                ease: "easeInOut",
              }
        }
      >
        <rect
          x="270"
          y="90"
          width="150"
          height="95"
          rx="14"
          fill="#FAF6F0"
          stroke="#1E3A6D"
          strokeWidth="5"
        />
        <circle
          cx="292"
          cy="111"
          r="6"
          fill="none"
          stroke="#1E3A6D"
          strokeWidth="3"
        />
        <text
          x="352"
          y="150"
          textAnchor="middle"
          fontSize="30"
          fontFamily="Georgia, serif"
          fill="#1E3A6D"
        >
          #4471
        </text>
      </motion.g>
    </svg>
  );
}
