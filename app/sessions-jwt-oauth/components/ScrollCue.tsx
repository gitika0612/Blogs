"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ScrollCue({
  text = "Scroll to meet the forgetful bouncer ↓",
}: {
  text?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.p
      className="font-sans text-sm tracking-wide text-[#5B564C]"
      animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
      transition={
        shouldReduceMotion
          ? undefined
          : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {text}
    </motion.p>
  );
}
