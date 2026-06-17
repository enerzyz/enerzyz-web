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
    slug: "singapore-cooling-paradox-memory-driven-buildings",
    title: "The Singapore Paradox: Why the World's Most Efficient Outlier Holds the Blueprint for a $2 Trillion Cooling Reset",
    description:
      "Singapore consumes 649 GJ per capita without extreme climate or domestic energy reserves — almost all of it for cooling. The real bottleneck isn't infrastructure; it's the absence of memory in control systems. Here's the data, the physics, and the AI architecture that turns cooling into the highest-ROI optimization opportunity on Earth.",
    date: "2026-06-17",
    readTime: "11 min read",
    category: "Research & Strategy",
    author: "Enerzyz Research",
  },
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
