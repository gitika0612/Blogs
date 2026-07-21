import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import ScrollProgressBar from "../sessions-jwt-oauth/components/ScrollProgressBar";
import ScrollCue from "../sessions-jwt-oauth/components/ScrollCue";
import Reveal from "../sessions-jwt-oauth/components/Reveal";
import DevView from "../sessions-jwt-oauth/components/DevView";
import MeaningMap from "./components/MeaningMap";
import SimilarityMeter from "./components/SimilarityMeter";
import SearchDemo from "./components/SearchDemo";
import SimilarityPlayground from "./components/SimilarityPlayground";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const description =
  "Tokens turned your words into numbers. But how does AI know 'king' and 'queen' are related — and 'banana' isn't? Meaning becomes a map.";

export const metadata: Metadata = {
  title: "Embeddings Explained: How AI Understands Meaning",
  description,
  openGraph: {
    title: "Embeddings Explained: How AI Understands Meaning",
    description,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embeddings Explained: How AI Understands Meaning",
    description,
  },
};

export default function EmbeddingsExplainedPage() {
  return (
    <main className="bg-[#FAF6F0] font-sans text-[#1C1810] selection:bg-[#0D7377] selection:text-white">
      <ScrollProgressBar />

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-[max(1.5rem,env(safe-area-inset-top))] text-center sm:pt-[env(safe-area-inset-top)]">
        <Reveal>
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#0D7377] sm:text-base">
            AI, told simply · Part 2
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className={`${fraunces.className} max-w-4xl text-4xl leading-[1.08] tracking-tight text-[#1C1810] sm:text-5xl md:text-6xl lg:text-7xl`}
          >
            Embeddings Explained: How AI Understands Meaning
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5B564C] sm:text-xl">
            In Part 1, AI turned your words into numbers. But those were just
            name tags. Embeddings are different &mdash; they&apos;re numbers
            that capture MEANING. It&apos;s how AI knows &apos;happy&apos; and
            &apos;joyful&apos; are basically the same, and &apos;happy&apos; and
            &apos;stapler&apos; are not.
          </p>
        </Reveal>

        <div className="absolute inset-x-0 bottom-10 flex justify-center px-6">
          <ScrollCue text="Scroll to see how ↓" />
        </div>
      </section>

      {/* Scene 1 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#0D7377] sm:text-base">
            The big idea
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Words become places on a map.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <MeaningMap />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-xl leading-relaxed text-[#1C1810]">
            An embedding turns every word into a spot on a giant map of meaning.
            The trick: words that mean similar things get placed close together.
            &apos;King&apos; and &apos;queen&apos; end up as neighbours.
            &apos;Banana&apos; sits far away, over with the other fruits.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            That&apos;s the whole idea. Everything AI does with meaning &mdash;
            search, recommendations, understanding your questions &mdash; starts
            here.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-xl">
            <DevView
              title="A word, as numbers"
              caption="Each word becomes a list of numbers — its coordinates on the map. Real ones are hundreds of numbers long, but the idea's the same: similar meaning, similar numbers."
            >
              <div>
                <span className="text-[#7DD3FC]">&quot;king&quot;</span>
                {"   "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">[0.21, -0.34, 0.88, ... ]</span>
              </div>
              <div className="mt-2">
                <span className="text-[#7DD3FC]">&quot;queen&quot;</span>
                {"  "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">[0.20, -0.31, 0.85, ... ]</span>{" "}
                <span className="text-white/40">
                  {"// almost the same → close on the map"}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-[#7DD3FC]">&quot;banana&quot;</span>{" "}
                <span className="text-white/60">→</span>{" "}
                <span className="text-white/90">
                  [-0.77, 0.42, -0.10, ... ]
                </span>{" "}
                <span className="text-white/40">
                  {"// very different → far away"}
                </span>
              </div>
            </DevView>
          </div>
        </Reveal>
      </section>

      {/* Scene 2 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#0D7377] sm:text-base">
            Why it&apos;s clever
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            It understands meaning, not spelling.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 flex justify-center">
            <SimilarityMeter />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-xl text-center text-xl leading-relaxed text-[#1C1810]">
            Here&apos;s what makes embeddings powerful: AI can measure how CLOSE
            two words are in meaning &mdash; and it completely ignores how
            they&apos;re spelled.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            &apos;Cat&apos; and &apos;dog&apos; look nothing alike as words, but
            they mean similar things &mdash; so they score high. &apos;Cat&apos;
            and &apos;car&apos; look almost identical, but mean totally
            different things &mdash; so they score low. Spelling doesn&apos;t
            fool it.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p
            className={`${fraunces.className} mx-auto mt-8 max-w-xl text-center text-lg italic leading-snug text-[#1C1810] sm:text-xl`}
          >
            This is why AI search actually works &mdash; it finds what you mean,
            not just the words you typed.
          </p>
        </Reveal>
      </section>

      {/* Scene 3 */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#0D7377] sm:text-base">
            You&apos;ve used this already
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            This quietly runs half the internet.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-xl text-center text-xl leading-relaxed text-[#1C1810]">
            Embeddings aren&apos;t just theory &mdash; they&apos;re working
            behind the scenes in apps you use every day. Anytime something
            &apos;finds similar things&apos;, embeddings are probably doing it.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mx-auto mt-10 flex max-w-xl flex-col gap-5">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7377]" />
              <p className="text-base leading-relaxed text-[#5B564C] sm:text-lg">
                <span className="font-medium text-[#1C1810]">Smart search</span>{" "}
                &mdash; Search &apos;something to keep my coffee hot&apos; and
                get back &apos;insulated travel mug&apos; &mdash; even though it
                shares no words with what you typed. It understood what you
                meant.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7377]" />
              <p className="text-base leading-relaxed text-[#5B564C] sm:text-lg">
                <span className="font-medium text-[#1C1810]">
                  Recommendations
                </span>{" "}
                &mdash; &apos;Because you watched&hellip;&apos; and
                &apos;similar songs&apos; work by finding items whose meaning
                sits close to what you already liked.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7377]" />
              <p className="text-base leading-relaxed text-[#5B564C] sm:text-lg">
                <span className="font-medium text-[#1C1810]">
                  AI that answers from your documents (RAG)
                </span>{" "}
                &mdash; Chatbots that answer from a company&apos;s docs first
                find the most relevant pages by meaning &mdash; then read them
                to reply.
              </p>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <SearchDemo />
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p
            className={`${fraunces.className} mx-auto mt-8 max-w-xl text-center text-lg italic leading-snug text-[#1C1810] sm:text-xl`}
          >
            Old search matched letters. Embedding search matches meaning &mdash;
            which is why it feels like the app actually understands you.
          </p>
        </Reveal>
      </section>

      {/* Scene 4 — Try it yourself */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#0D7377] sm:text-base">
            Your turn
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            Feel it for yourself.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-[#5B564C]">
            You&apos;ve seen how it works &mdash; now try it. Pick a word and
            see which other words AI thinks are closest in meaning.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14">
            <SimilarityPlayground />
          </div>
        </Reveal>
      </section>

      {/* Scene 5 — Recap + close */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2
            className={`${fraunces.className} max-w-3xl text-3xl leading-tight tracking-tight text-[#1C1810] sm:text-4xl md:text-5xl`}
          >
            So, what&apos;s an embedding?
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6">
          <Reveal delay={0.1}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              An <span className="text-[#0D7377]">embedding </span> turns a word
              into numbers that capture its meaning &mdash; a place on a{" "}
              <span className="text-[#0D7377]">map</span> where similar things
              sit close together.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              That lets a computer measure how{" "}
              <span className="text-[#0D7377]">alike </span> two things are
              &mdash; by meaning, not spelling.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-[#3A3630] sm:text-xl">
              It&apos;s the quiet engine behind{" "}
              <span className="text-[#0D7377]">smart search</span>,
              recommendations, and AI that understands what you actually mean.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.36}>
          <p
            className={`${fraunces.className} mx-auto mt-12 max-w-2xl text-center text-xl italic leading-snug text-[#1C1810] sm:text-2xl`}
          >
            Tokens gave AI the pieces. Embeddings gave those pieces meaning.
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <footer className="mt-20 flex flex-col items-start gap-2 border-t border-[#0D7377]/20 pt-8 text-sm text-[#5B564C] sm:flex-row sm:items-center sm:justify-between">
            <span>Written by Gitika</span>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <Link
                href="/tokens-explained"
                className="text-[#0D7377] transition-colors hover:text-[#1C1810]"
              >
                ← Read Part 1: Tokens
              </Link>
              <Link
                href="/"
                className="text-[#0D7377] transition-colors hover:text-[#1C1810]"
              >
                ← More stories
              </Link>
            </div>
          </footer>
        </Reveal>
      </section>
    </main>
  );
}
