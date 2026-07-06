export default function BouncerIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="mx-auto w-full max-w-sm"
      role="img"
      aria-label="A bouncer standing in an archway, with a question mark above his head and a loop arrow suggesting he keeps forgetting who just walked through"
    >
      <circle cx="240" cy="240" r="200" fill="#F1E9D8" />

      <path
        d="M140 380 V220 A100 100 0 0 1 340 220 V380"
        fill="none"
        stroke="#1E3A6D"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="118"
        y1="380"
        x2="362"
        y2="380"
        stroke="#1E3A6D"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <circle cx="240" cy="256" r="28" fill="#1E3A6D" />
      <path
        d="M195 380 C195 320 205 300 240 300 C275 300 285 320 285 380 Z"
        fill="#1E3A6D"
      />

      <path
        d="M304 196 a26 26 0 1 1 -9 -19"
        fill="none"
        stroke="#1E3A6D"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M293 173 l11 3 l-3 -11 Z" fill="#1E3A6D" opacity="0.55" />

      <circle
        cx="332"
        cy="140"
        r="34"
        fill="#FAF6F0"
        stroke="#1E3A6D"
        strokeWidth="4"
      />
      <text
        x="332"
        y="153"
        textAnchor="middle"
        fontSize="34"
        fontFamily="Georgia, serif"
        fill="#1E3A6D"
      >
        ?
      </text>
    </svg>
  );
}
