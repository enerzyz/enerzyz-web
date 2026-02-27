export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  readTime: string;
  category: string;
  author: string;
};

/**
 * All published blog articles.
 * Add new entries here — the blog index and sitemap consume this array.
 */
export const articles: BlogArticle[] = [
  {
    slug: "what-are-energy-assets-and-why-they-matter",
    title: "What Are Energy Assets And Why They're the Biggest Untapped Optimization Opportunity in Every Building",
    description:
      "Energy assets: the chillers, generators, pumps, motors, engines, transformers and BESS units that power modern facilities represent a $16 trillion global operating cost. Most of it is managed reactively. Here's what they are, why they fail, and how AI is changing the equation.",
    date: "2026-02-27",
    readTime: "8 min read",
    category: "Industry Insights",
    author: "Enerzyz Engineering",
  },
];
