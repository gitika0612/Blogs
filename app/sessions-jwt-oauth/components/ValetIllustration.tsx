"use client";

import { motion, useReducedMotion } from "framer-motion";

const GREEN = "#2F6B4F";

export default function ValetIllustration() {
  const shouldReduceMotion = useReducedMotion();

  const keyAnimate = shouldReduceMotion
    ? { x: 150, y: -15 }
    : { x: [0, 0, 150, 150, 0], y: [0, 0, -15, -15, 0] };

  const keyTransition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.15, 0.4, 0.55, 1],
        ease: "easeInOut" as const,
      };

  const checkAnimate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: [0, 0, 0, 1, 1, 0] };

  const checkTransition = shouldReduceMotion
    ? undefined
    : {
        duration: 4,
        repeat: Infinity,
        times: [0, 0.4, 0.45, 0.55, 0.8, 0.9],
        ease: "easeInOut" as const,
      };

  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A valet's single car key sliding toward a car and being confirmed with a checkmark, while the full keyring stays behind with the owner"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      {/* the full keyring, staying behind with the owner */}
      <g>
        <circle
          cx="120"
          cy="200"
          r="14"
          fill="none"
          stroke={GREEN}
          strokeWidth="5"
        />
        <circle
          cx="95"
          cy="245"
          r="10"
          fill="none"
          stroke={GREEN}
          strokeWidth="4"
        />
        <line
          x1="104"
          y1="252"
          x2="124"
          y2="272"
          stroke={GREEN}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line x1="116" y1="264" x2="124" y2="264" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="271" x2="128" y2="271" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />

        <circle
          cx="150"
          cy="248"
          r="10"
          fill="none"
          stroke={GREEN}
          strokeWidth="4"
        />
        <line
          x1="158"
          y1="256"
          x2="180"
          y2="278"
          stroke={GREEN}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line x1="172" y1="270" x2="180" y2="270" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
        <line x1="176" y1="277" x2="184" y2="277" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* the one valet key, on loan */}
      <motion.g animate={keyAnimate} transition={keyTransition}>
        <circle
          cx="170"
          cy="228"
          r="9"
          fill="#FAF6F0"
          stroke={GREEN}
          strokeWidth="4"
        />
        <line
          x1="177"
          y1="235"
          x2="198"
          y2="256"
          stroke={GREEN}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line x1="191" y1="249" x2="199" y2="249" stroke={GREEN} strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      {/* the car */}
      <path
        d="M325 230 Q345 195 385 195 Q415 195 425 230"
        fill="none"
        stroke={GREEN}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="300"
        y="230"
        width="140"
        height="55"
        rx="18"
        fill="#FAF6F0"
        stroke={GREEN}
        strokeWidth="5"
      />
      <circle cx="330" cy="288" r="15" fill="#FAF6F0" stroke={GREEN} strokeWidth="5" />
      <circle cx="400" cy="288" r="15" fill="#FAF6F0" stroke={GREEN} strokeWidth="5" />

      {/* confirmation the key was accepted */}
      <motion.g animate={checkAnimate} transition={checkTransition}>
        <circle
          cx="350"
          cy="175"
          r="22"
          fill="#FAF6F0"
          stroke={GREEN}
          strokeWidth="4"
        />
        <path
          d="M340 176 L348 186 L364 160"
          fill="none"
          stroke={GREEN}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}
