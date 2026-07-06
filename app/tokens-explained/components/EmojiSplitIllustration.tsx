"use client";

import { motion, useReducedMotion } from "framer-motion";

const GOLD = "#B8860B";

const bricks = [
  { y: 178, number: "9834" },
  { y: 228, number: "2210" },
  { y: 278, number: "501" },
];

export default function EmojiSplitIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A single pointing-hand emoji on the left labelled what you see, splitting into three numbered bricks on the right labelled what the model sees"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* left: what you see */}
      <text
        x="140"
        y="188"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Georgia, monospace"
        fill={GOLD}
        opacity="0.6"
      >
        you see
      </text>
      <text x="140" y="270" textAnchor="middle" fontSize="62">
        🫵
      </text>

      {/* arrow */}
      <text
        x="222"
        y="250"
        textAnchor="middle"
        fontSize="26"
        fill={GOLD}
        opacity="0.5"
      >
        →
      </text>

      {/* right: what the model sees */}
      <text
        x="360"
        y="140"
        textAnchor="middle"
        fontSize="11"
        fontFamily="Georgia, monospace"
        fill={GOLD}
        opacity="0.6"
      >
        model sees
      </text>

      {bricks.map((brick, index) => {
        const initial = shouldReduceMotion
          ? undefined
          : { opacity: 0, x: -12 };
        const whileInView = shouldReduceMotion
          ? undefined
          : { opacity: 1, x: 0 };
        const transition = shouldReduceMotion
          ? undefined
          : {
              duration: 0.5,
              delay: 0.3 + index * 0.15,
              ease: [0.22, 1, 0.36, 1] as const,
            };

        return (
          <motion.g
            key={brick.number}
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true, margin: "-40px" }}
            transition={transition}
          >
            <line
              x1="182"
              y1="255"
              x2="304"
              y2={brick.y + 17}
              stroke={GOLD}
              strokeWidth="2"
              strokeDasharray="2 6"
              strokeLinecap="round"
              opacity="0.35"
            />
            <circle cx="316" cy={brick.y} r="4" fill="none" stroke={GOLD} strokeWidth="2.5" />
            <circle cx="344" cy={brick.y} r="4" fill="none" stroke={GOLD} strokeWidth="2.5" />
            <rect
              x="304"
              y={brick.y}
              width="90"
              height="34"
              rx="7"
              fill="#FAF6F0"
              stroke={GOLD}
              strokeWidth="3.5"
            />
            <text
              x="349"
              y={brick.y + 22}
              textAnchor="middle"
              fontSize="13"
              fontFamily="Georgia, monospace"
              fill={GOLD}
            >
              {brick.number}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
