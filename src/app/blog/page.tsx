import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog | Energy Asset Intelligence, Industry Insights & Best Practices",
  description:
    "Explore the Enerzyz blog for deep-dives on energy asset management, predictive maintenance, AI-driven building optimization, HVAC efficiency, ESG compliance, and smart facility operations.",
  keywords: [
    "energy asset management blog",
    "smart building insights",
    "predictive maintenance articles",
    "HVAC optimization blog",
    "AI facility management",
    "building automation insights",
    "energy efficiency articles",
    "Enerzyz blog",
    "ESG compliance best practices",
    "digital twin building",
  ],
  alternates: { canonical: "https://enerzyz.com/blog" },
  openGraph: {
    type: "website",
    url: "https://enerzyz.com/blog",
    title: "Blog | Enerzyz",
    description:
      "Deep-dives on energy asset management, predictive maintenance, and AI-driven facility optimization.",
    siteName: "Enerzyz",
    images: [
      {
        url: "https://enerzyz.com/api/og?title=Enerzyz+Blog&subtitle=Energy+asset+intelligence%2C+industry+insights+and+best+practices.",
        width: 1200,
        height: 630,
        alt: "Enerzyz Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Enerzyz",
    description:
      "Industry insights on energy asset management, AI building optimization, and predictive maintenance.",
    images: ["https://enerzyz.com/api/og?title=Enerzyz+Blog&subtitle=Energy+asset+intelligence%2C+industry+insights+and+best+practices."],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]"
        aria-hidden
      />

      <Breadcrumbs items={[{ label: "Blog" }]} />

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-10 lg:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          Resources
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          Enerzyz Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/60">
          Industry insights, engineering deep-dives, and best practices for
          managing the world&apos;s energy assets with AI.
        </p>
      </section>

      {/* Article grid */}
      <section className="relative mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        {articles.length === 0 ? (
          <p className="text-white/50">
            Articles coming soon. Check back shortly.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-400 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-300/80">
                  {article.category}
                </span>
                <h2 className="mt-3 text-lg font-semibold leading-snug text-white group-hover:text-sky-200 line-clamp-3">
                  {article.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50 line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-white/40">
                  <time dateTime={article.date}>
                    {formatDate(article.date)}
                  </time>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
