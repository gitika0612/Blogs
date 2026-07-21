export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export type Post = {
  slug: string;
  title: string;
  teaser: string;
  category: string;
  tag: string;
  readTime: string;
  published: boolean;
};

export const categories: Category[] = [
  {
    slug: "ai",
    title: "AI",
    description:
      "Building with LLMs, RAG, and agents — explained without the hype.",
    icon: "🤖",
  },
  {
    slug: "react",
    title: "React",
    description:
      "Components, hooks, state, and the patterns that keep UIs sane.",
    icon: "⚛️",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description: "The language's sharp edges and clever bits, made intuitive.",
    icon: "🟨",
  },
  {
    slug: "nextjs",
    title: "Next.js",
    description: "Routing, rendering, and shipping fast full-stack apps.",
    icon: "▲",
  },
  {
    slug: "system-design",
    title: "System Design",
    description:
      "Architecture, trade-offs, and the mental models behind how software really works.",
    icon: "🧩",
  },
  {
    slug: "auth-security",
    title: "Authentication & Security",
    description:
      "How apps know who you are and keep you safe — logins, tokens, and the trust behind them.",
    icon: "🔐",
  },
];

export const posts: Post[] = [
  // {
  //   slug: "sessions-jwt-oauth",
  //   title: "Sessions vs JWT vs OAuth",
  //   teaser:
  //     "You log in once. The web forgets you instantly. So who keeps letting you back in?",
  //   category: "auth-security",
  //   tag: "Authentication",
  //   readTime: "8 min read",
  //   published: true,
  // },
  {
    slug: "tokens-explained",
    title: "Tokens Explained: The Currency of AI",
    teaser:
      "To an AI, a single emoji can cost more than the word 'hello'. Here's why AI doesn't read letters or words — it reads tokens.",
    category: "ai",
    tag: "LLM Fundamentals",
    readTime: "7 min read",
    published: true,
  },
  {
    slug: "embeddings-explained",
    title: "Embeddings Explained: How AI Understands Meaning",
    teaser:
      "Tokens turned your words into numbers. But how does AI know 'king' and 'queen' are related — and 'banana' isn't? Meaning becomes a map.",
    category: "ai",
    tag: "LLM Fundamentals",
    readTime: "8 min read",
    published: true,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getPublishedPosts(): Post[] {
  return posts.filter((post) => post.published);
}

export function getPublishedPostsByCategory(categorySlug: string): Post[] {
  return getPublishedPosts().filter((post) => post.category === categorySlug);
}
