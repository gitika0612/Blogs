import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fraunces } from "@/lib/fonts";
import {
  categories,
  getCategoryBySlug,
  getPublishedPostsByCategory,
} from "@/lib/blogs";
import Reveal from "../components/Reveal";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} — Blogs`,
    description: category.description,
    openGraph: {
      title: `${category.title} — Blogs`,
      description: category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getPublishedPostsByCategory(category.slug);

  return (
    <main className="min-h-screen bg-[#FAF6F0] font-sans text-[#1C1810] selection:bg-[#1E3A6D] selection:text-white">
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 sm:pt-28">
        <Reveal>
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-wide text-[#1E3A6D] transition-colors hover:text-[#1C1810]"
          >
            ← All topics
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            <h1
              className={`${fraunces.className} text-4xl leading-tight tracking-tight text-[#1C1810] sm:text-5xl`}
            >
              {category.title}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5B564C]">
            {category.description}
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28">
        {posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={0.1 * index}>
                <Link
                  href={`/${post.slug}`}
                  className="group block rounded-2xl border border-[#1C1810]/10 bg-white/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1E3A6D]/30 hover:shadow-lg hover:shadow-[#1C1810]/5"
                >
                  <span className="text-sm font-medium uppercase tracking-wide text-[#1E3A6D]">
                    {post.tag} · {post.readTime}
                  </span>
                  <h2
                    className={`${fraunces.className} mt-4 text-2xl text-[#1C1810] sm:text-3xl`}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#5B564C]">
                    {post.teaser}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium text-[#1E3A6D] transition-transform duration-300 group-hover:translate-x-1">
                    Read the story →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <p className="text-lg leading-relaxed text-[#5B564C]">
              No stories published in this category yet.
            </p>
          </Reveal>
        )}
      </section>
    </main>
  );
}
