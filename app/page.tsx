import type { Metadata } from "next";
import Link from "next/link";
import { fraunces } from "@/lib/fonts";
import { categories, getPublishedPostsByCategory, type Category } from "@/lib/blogs";
import Reveal from "./components/Reveal";

const description =
  "Stories, metaphors, and mental models for AI, React, JavaScript, Next.js, and the systems that hold it all together.";

// A category shows as a real card once it has at least one published post.
// Flip more on by publishing a post for that category in lib/blogs.ts.
const visibleCategories = categories.filter(
  (category) => getPublishedPostsByCategory(category.slug).length > 0,
);
const hiddenCategories = categories.filter(
  (category) => getPublishedPostsByCategory(category.slug).length === 0,
);

function formatHiddenCategoriesTeaser(hidden: Category[]): string {
  const names = hidden.map((category) => category.title);
  const verb = names.length === 1 ? "is" : "are";
  const list =
    names.length > 1
      ? `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`
      : names[0];
  return `${list} ${verb} on the way.`;
}

export const metadata: Metadata = {
  title: "Blogs — by Gitika",
  description,
  openGraph: {
    title: "Blogs — by Gitika",
    description,
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] font-sans text-[#1C1810] selection:bg-[#1E3A6D] selection:text-white">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-28 text-center sm:pt-36">
        <Reveal>
          <span className="mb-6 inline-block text-sm font-medium uppercase tracking-[0.14em] text-[#1E3A6D] sm:text-base">
            By Gitika
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className={`${fraunces.className} mx-auto max-w-3xl text-4xl leading-[1.08] tracking-tight text-[#1C1810] sm:text-5xl md:text-6xl`}
          >
            Tech, explained the way it should have been the first time.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#5B564C] sm:text-xl">
            {description}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {visibleCategories.map((category, index) => {
            const count = getPublishedPostsByCategory(category.slug).length;
            const countLabel = `${count} ${count === 1 ? "article" : "articles"}`;

            return (
              <Reveal key={category.slug} delay={index * 0.08}>
                <Link
                  href={`/${category.slug}`}
                  className="group block h-full rounded-2xl border border-[#1C1810]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A6D]/30 hover:shadow-lg hover:shadow-[#1C1810]/5"
                >
                  <span className="text-3xl">{category.icon}</span>
                  <h2
                    className={`${fraunces.className} mt-5 text-2xl text-[#1C1810]`}
                  >
                    {category.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                    {category.description}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium uppercase tracking-wide text-[#1E3A6D]">
                    {countLabel}
                  </span>
                </Link>
              </Reveal>
            );
          })}

          {hiddenCategories.length > 0 && (
            <Reveal delay={visibleCategories.length * 0.08}>
              <div className="flex h-full cursor-default select-none flex-col items-center justify-center rounded-2xl border border-dashed border-[#1C1810]/15 bg-white/15 p-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[#1C1810]/15 text-lg text-[#5B564C]/70">
                  +
                </span>
                <h2
                  className={`${fraunces.className} mt-5 text-2xl text-[#5B564C]`}
                >
                  More soon
                </h2>
                <p className="mt-3 max-w-[220px] text-base leading-relaxed text-[#5B564C]/70">
                  {formatHiddenCategoriesTeaser(hiddenCategories)}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </main>
  );
}
