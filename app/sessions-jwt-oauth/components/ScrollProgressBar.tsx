"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 bg-[#FAF6F0]"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <motion.div
        className="h-[3px] origin-left bg-[#1E3A6D]"
        style={{ scaleX }}
      />
    </div>
  );
}
