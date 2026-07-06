import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import ScrollProgressBar from "../sessions-jwt-oauth/components/ScrollProgressBar";
import ScrollCue from "../sessions-jwt-oauth/components/ScrollCue";
import Reveal from "../sessions-jwt-oauth/components/Reveal";
import DevView from "../sessions-jwt-oauth/components/DevView";
import TokenSplitter from "./components/TokenSplitter";
import WordSizeCompare from "./components/WordSizeCompare";
import LongWordSplit from "./components/LongWordSplit";
import NumberSplit from "./components/NumberSplit";
import EmojiCostCompare from "./components/EmojiCostCompare";
import ContextWindowPapers from "./components/ContextWindowPapers";
import ContextCompactionPapers from "./components/ContextCompactionPapers";
import TokenizerPlayground from "./components/TokenizerPlayground";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "This emoji costs an AI 3 tokens. 'hello' costs 1, but 'hellooo' costs 2. Here's why AI doesn't read the way you think.";

export const metadata: Metadata = {
  title: "Tokens Explained: The Currency of AI",
  description,
  openGraph: {
    title: "Tokens Explained: The Currency of AI",
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokens Explained: The Currency of AI",
    description,
  },
};

export default function TokensExplainedPage() {
  return (
    <main className="bg-[#FAF6F0] font-sans text-[#1C1810] selection:bg-[#B8860B] selection:text-white">
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            AI, told simply
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className={`${fraunces.className} max-w-4xl text-4xl leading-[1.08] tracking-tight text-[#1C1810] sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            Tokens Explained: The Currency of AI
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5B564C] sm:text-xl">
            Here&apos;s something strange: to an AI, a single emoji can cost
            more than the word &apos;hello&apos;. That&apos;s because AI
            doesn&apos;t read letters or words &mdash; it reads tokens. And
            once you understand tokens, a lot of AI&apos;s weird behaviour
            suddenly makes sense.
          </p>
        </Reveal>

        <div className="absolute inset-x-0 bottom-10 flex justify-center px-6">
          <ScrollCue text="Scroll to see what AI actually reads ↓" />
        </div>
      </section>

      {/* Scene 1 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            The thing nobody tells you
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            AI can&apos;t actually read.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <TokenSplitter />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-xl leading-relaxed text-[#1C1810]">
            AI can&apos;t read letters or words. So it chops your text into
            chunks called <span className="text-[#B8860B]">tokens</span> &mdash;
            and works only with those.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            Add three letters to &apos;hello&apos; and it doesn&apos;t just get
            longer &mdash; it shatters into more pieces. The model builds every
            word from a fixed box of bricks it already knows.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-xl">
            <DevView
              title="What the model actually receives"
              caption={
                <>
                  The model reads the second list, not the word. Try it:{" "}
                  <a
                    href="https://platform.openai.com/tokenizer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#B8860B] underline underline-offset-2"
                  >
                    platform.openai.com/tokenizer
                  </a>
                </>
              }
            >
              <div>
                <span className="text-[#7DD3FC]">text:</span>
                {"   "}
                <span className="text-[#86EFAC]">&quot;hello&quot;</span>
                {"    "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">[24912]</span>
              </div>
              <div className="mt-2">
                <span className="text-[#7DD3FC]">text:</span>
                {"   "}
                <span className="text-[#86EFAC]">&quot;hellooo&quot;</span>
                {"  "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">[15339, 780]</span>
              </div>
              <div className="mt-2">
                <span className="text-[#7DD3FC]">text:</span>
                {"   "}
                <span className="text-[#86EFAC]">
                  &quot;hellooooo&quot;
                </span>{" "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">[15339, 3020, 78]</span>
              </div>
            </DevView>
          </div>
        </Reveal>
      </section>

      {/* Scene 2 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            The Goldilocks problem
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Too big, too small, just right.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16">
            <WordSizeCompare />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-16 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            Letters are too small &mdash; each one means almost nothing on its
            own. A brick for every word is too big &mdash; there are millions,
            plus every typo and name. Tokens are the middle ground: common
            chunks the model reuses everywhere.
          </p>
        </Reveal>
      </section>

      {/* Scene 3 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            Where it gets weird
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Three things that break your intuition.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            Once you know it&apos;s all bricks, some genuinely strange behaviour
            starts to make sense.
          </p>
        </Reveal>

        <div className="mt-20 space-y-24">
          {/* Example 1 — Long words hide familiar pieces */}
          <div className="flex flex-col items-center">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
              Long words hide familiar pieces
            </p>

            <LongWordSplit />

            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#3A3630]">
              A 20-letter word isn&apos;t one brick &mdash; it&apos;s built from
              smaller ones the model already knows. See &apos;establish&apos;
              hiding in there?
            </p>
          </div>

          {/* Example 2 — Numbers break the way you don't expect */}
          <div className="flex flex-col items-center">
            <p className="mb-8 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
              Numbers break the way you don&apos;t expect
            </p>

            <NumberSplit />

            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#3A3630]">
              You&apos;d expect one number or ten digits. It&apos;s neither
              &mdash; and that&apos;s a big reason AI is famously bad at math.
              It never really sees the number.
            </p>
          </div>

          {/* Example 3 — One emoji can cost three tokens (finale) */}
          <div className="flex flex-col items-center rounded-3xl bg-[#F1E9D8]/60 px-6 py-16 sm:px-10">
            <p className="mb-10 text-xs font-medium uppercase tracking-[0.14em] text-[#B8860B]/70">
              One emoji can cost three tokens
            </p>

            <EmojiCostCompare />

            <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-[#3A3630]">
              You tap one emoji &mdash; one symbol. But the model doesn&apos;t
              get one brick. A balloon costs 2 tokens; a pointing hand costs 3.
              Newer, more complex emojis are built from more underlying bytes
              &mdash; so they quietly cost more.
            </p>

            <p
              className={`${fraunces.className} mx-auto mt-6 max-w-xl text-center text-xl italic leading-snug text-[#B8860B] sm:text-2xl`}
            >
              This is also why Hindi, Arabic, or any non-English text costs more
              &mdash; it shatters into more bricks for the same meaning. More on
              your wallet next.
            </p>
          </div>
        </div>
      </section>

      {/* Scene 4 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        {/* Part A — the context window (the problem) */}
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            The model&apos;s desk
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Why AI forgets what you told it.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xl leading-relaxed text-[#1C1810]">
            The <span className="text-[#B8860B]">context window </span> is the
            model&apos;s desk. Every token &mdash; your messages, its replies,
            the hidden instructions &mdash; sits on it. The desk has a fixed
            size.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <ContextWindowPapers />
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            Modern desks are big &mdash; 100,000+ tokens &mdash; but a long chat
            fills them fast. When the desk is full, the oldest pages slide off
            the edge. That&apos;s why a chatbot seems to &apos;forget&apos; what
            you said 20 messages ago &mdash; those pages simply fell off the
            desk.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p
            className={`${fraunces.className} mx-auto mt-10 max-w-2xl text-center text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            The model has{" "}
            <span className="text-[#B8860B]">no memory between messages</span>.
            Every reply, it re-reads the entire desk from scratch.{" "}
            <span className="text-[#B8860B]">Continuity is an illusion</span>{" "}
            &mdash; the whole conversation is re-sent, every single time.
          </p>
        </Reveal>

        {/* Part B — context compaction (the fix) */}
        <div className="mt-24 border-t border-[#B8860B]/20 pt-20 sm:mt-28 sm:pt-24">
          <Reveal>
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
              The fix
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h3
              className={`${fraunces.className} max-w-3xl text-2xl leading-tight tracking-tight text-[#1C1810] sm:text-3xl md:text-4xl`}
            >
              Context compaction: shrink the old, keep the recent.
            </h3>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-16 flex justify-center">
              <ContextCompactionPapers />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mx-auto mt-10 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
              Instead of letting old pages fall off, context compaction shrinks
              them &mdash; summarising old messages into a compact form while
              keeping the gist. Recent messages stay full and detailed; distant
              ones become tiny summaries. Not all context has equal value
              &mdash; what happened two messages ago usually matters more than
              what happened twenty ago.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <p
              className={`${fraunces.className} mx-auto mt-8 max-w-xl text-center text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
            >
              It&apos;s the difference between forgetting the start of the
              conversation &mdash; and remembering the summary of it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scene 5 — Try it yourself */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#B8860B] sm:text-base">
            Your turn
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            See your own words become tokens.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            You&apos;ve seen how it works &mdash; now watch it happen to
            anything you type. Enter some text and see it break into tokens,
            live.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <TokenizerPlayground />
          </div>
        </Reveal>
      </section>

      {/* Scene 6 — Recap + close */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            So, what&apos;s a token?
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              A <span className="text-[#B8860B]">token </span> is a chunk
              &mdash; not a letter, not a word. Common things are cheap (1
              brick); rare things shatter into many.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              Everything the model sees is tokens &mdash; your text becomes a{" "}
              <span className="text-[#B8860B]">list of numbers</span> it reads,
              and re-reads, every single turn.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              Tokens are the{" "}
              <span className="text-[#B8860B]">currency of AI</span>: they set
              the cost, the speed, and how much the model can remember at once.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <p
            className={`${fraunces.className} mx-auto mt-12 max-w-2xl text-center text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            Next time an AI &apos;forgets&apos;, or a reply costs more than you
            expected &mdash; now you know why. It was always about the bricks.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <footer className="mt-20 flex flex-col items-start gap-2 border-t border-[#B8860B]/20 pt-8 text-sm text-[#5B564C] sm:flex-row sm:items-center sm:justify-between">
            <span>Written by Gitika</span>
            <Link
              href="/"
              className="text-[#B8860B] transition-colors hover:text-[#1C1810]"
            >
              ← More stories
            </Link>
          </footer>
        </Reveal>
      </section>
    </main>
  );
}
