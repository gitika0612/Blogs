"use client";

import type { ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";

export const GOLD = "#B8860B";

type DeskSurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function DeskSurface({ children, className = "" }: DeskSurfaceProps) {
  return (
    <div
      className={`flex h-32 w-80 items-center justify-center gap-1.5 rounded-xl border-2 px-3 sm:h-40 sm:w-[26rem] ${className}`}
      style={{
        borderColor: `${GOLD}66`,
        background: "rgba(241,233,216,0.5)",
      }}
    >
      {children}
    </div>
  );
}

type SheetOwnProps = {
  size?: "full" | "thumbnail";
  rotate?: number;
  faded?: boolean;
};

type SheetProps = SheetOwnProps &
  Pick<MotionProps, "initial" | "animate" | "exit" | "transition">;

export function Sheet({
  size = "full",
  rotate = 0,
  faded = false,
  initial,
  animate,
  exit,
  transition,
}: SheetProps) {
  const isThumbnail = size === "thumbnail";

  return (
    <motion.div
      layout
      initial={initial}
      animate={animate ?? { opacity: faded ? 0.45 : 1, rotate }}
      exit={exit}
      transition={transition ?? { type: "spring", stiffness: 220, damping: 26 }}
      className="relative shrink-0 rounded-sm border bg-white shadow-sm"
      style={{
        width: isThumbnail ? 22 : 44,
        height: isThumbnail ? 28 : 62,
        borderColor: "rgba(28,24,16,0.18)",
      }}
    >
      <div
        className="absolute h-[2px] rounded-full bg-[#1C1810]/15"
        style={{ left: 4, right: 4, top: isThumbnail ? 6 : 10 }}
      />
      {!isThumbnail && (
        <>
          <div className="absolute inset-x-1 top-[22px] h-[2px] w-3/4 rounded-full bg-[#1C1810]/15" />
          <div className="absolute inset-x-1 top-[32px] h-[2px] w-1/2 rounded-full bg-[#1C1810]/15" />
        </>
      )}
    </motion.div>
  );
}
