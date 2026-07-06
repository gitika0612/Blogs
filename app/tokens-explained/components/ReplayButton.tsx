type ReplayButtonProps = {
  onReplay: () => void;
  className?: string;
};

export default function ReplayButton({
  onReplay,
  className = "",
}: ReplayButtonProps) {
  return (
    <button
      type="button"
      onClick={onReplay}
      aria-label="Replay animation"
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-[#B8860B]/25 text-[#B8860B]/50 transition-colors hover:border-[#B8860B] hover:text-[#B8860B] ${className} cursor-pointer`}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ↻
      </span>
    </button>
  );
}
