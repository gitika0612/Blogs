import type { ReactNode } from "react";

type DevViewProps = {
  title: string;
  children: ReactNode;
  caption?: ReactNode;
};

export default function DevView({ title, children, caption }: DevViewProps) {
  return (
    <div>
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-[#5B564C]/70">
        Under the hood — for developers
      </p>

      <div className="overflow-hidden rounded-2xl bg-[#1C1810] shadow-lg shadow-[#1C1810]/20">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-2 font-mono text-xs text-white/50">
            {title}
          </span>
        </div>

        <div className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-white/90 sm:text-[13px]">
          {children}
        </div>
      </div>

      {caption && (
        <p className="mt-3 text-sm leading-relaxed text-[#5B564C]">
          {caption}
        </p>
      )}
    </div>
  );
}
