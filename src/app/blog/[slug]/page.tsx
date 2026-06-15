import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/lib/blog-data";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";

type Params = { slug: string };

/* ─── Static generation for all known slugs ─── */
export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

/* ─── Dynamic metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: [
      "energy assets",
      "what are energy assets",
      "HVAC optimization",
      "chiller maintenance",
      "predictive maintenance buildings",
      "energy asset management AI",
      "smart building technology",
      "facility energy cost reduction",
      "building automation AI",
      "digital twin facility",
    ],
    alternates: { canonical: `https://enerzyz.com/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `https://enerzyz.com/blog/${slug}`,
      title: article.title,
      description: article.description,
      siteName: "Enerzyz",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: "/enerzyz-logo-long.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: ["/enerzyz-logo-long.png"],
    },
  };
}

/* ─── Article content registry ─── */
function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "what-are-energy-assets-and-why-they-matter":
      return <WhatAreEnergyAssets />;
    default:
      return notFound();
  }
}

/* ─── Page ─── */
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  /* JSON-LD Article structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://enerzyz.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Enerzyz",
      url: "https://enerzyz.com",
      logo: { "@type": "ImageObject", url: "https://enerzyz.com/enerzyz-logo-long.png" },
    },
    mainEntityOfPage: `https://enerzyz.com/blog/${slug}`,
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]"
        aria-hidden
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.category },
        ]}
      />

      {/* Article header */}
      <header className="relative mx-auto max-w-3xl px-6 pb-10 pt-10 lg:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          {article.category}
        </span>
        <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40">
          <span>{article.author}</span>
          <span>·</span>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Article body */}
      <article className="prose-enerzyz relative mx-auto max-w-3xl px-6 pb-20 lg:px-8">
        <ArticleContent slug={slug} />
      </article>

      {/* Back + CTA */}
      <section className="relative mx-auto max-w-3xl px-6 pb-24 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Ready to optimize your energy assets?
            </h3>
            <p className="mt-1 text-sm text-white/50">
              See how Enerzyz delivers 30%+ energy savings from day one.
            </p>
          </div>
          <Link
            href="/book-a-demo"
            className="shrink-0 rounded-full bg-sky-500 px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
          >
            Request a Demo
          </Link>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/* ══════════════════════════════════════════════════════════
   ARTICLE: What Are Energy Assets — And Why They Matter
   ══════════════════════════════════════════════════════════ */
function WhatAreEnergyAssets() {
  return (
    <>
      <p className="text-lg leading-relaxed text-white/70">
        Every commercial building, industrial plant, hospital, and data center is powered
        by a fleet of electromechanical systems that most people never think about — until
        they fail. These are <strong className="text-white">energy assets</strong>: the
        chillers, air handling units (AHUs), boilers, pumps, generators, battery energy
        storage systems (BESS), transformers, variable frequency drives (VFDs), inverters,
        and dozens of other machines that keep the lights on, the air cold, and the
        processes running.
      </p>

      <h2>The $16 Trillion Problem Hiding in Plain Sight</h2>
      <p>
        Globally, more than <strong className="text-white">$16 trillion</strong> is spent
        every year to operate and maintain energy assets across commercial and industrial
        facilities. Nearly <strong className="text-white">$8 trillion</strong> of that is
        wasted — lost to reactive maintenance schedules, suboptimal equipment staging,
        demand-peak penalties, and siloed control systems that can&apos;t communicate with
        each other.
      </p>
      <p>
        The core issue isn&apos;t lack of data. Modern buildings are instrumented with
        thousands of sensors streaming temperature, pressure, flow rate, vibration, and
        electrical measurements every second. The problem is that this data sits in
        disconnected BMS (Building Management Systems), SCADA platforms, spreadsheets, and
        tribal knowledge — never synthesized into actionable intelligence.
      </p>

      <h2>A Taxonomy of Energy Assets</h2>
      <p>
        Energy assets span every system that transforms, distributes, stores, or consumes
        energy within a facility. Here&apos;s how they break down:
      </p>

      <h3>HVAC — Heating, Ventilation &amp; Air Conditioning</h3>
      <p>
        HVAC typically accounts for <strong className="text-white">40–60%</strong> of a
        commercial building&apos;s total energy consumption. The fleet includes chillers
        (centrifugal, screw, scroll, absorption), cooling towers, AHUs, fan coil units
        (FCUs), variable air volume (VAV) boxes, heat pumps, boilers, and the entire
        ductwork and piping distribution network. Each piece of equipment has its own
        operating curves, maintenance schedules, and failure modes — and they all
        interact.
      </p>
      <p>
        A chiller running at 60% load may be more efficient than two chillers at 30%
        each, but only if the condenser water temperature, wet-bulb conditions, and
        building load profile align. These optimization decisions happen continuously
        — and getting them wrong costs thousands of dollars per day in large facilities.
      </p>

      <h3>Electrical Distribution &amp; Power</h3>
      <p>
        Transformers, switchgear, UPS systems, power distribution units (PDUs), diesel and
        gas generators, and automatic transfer switches (ATS) form the electrical backbone.
        In data centers, power chain efficiency directly determines PUE (Power Usage
        Effectiveness) — the industry&apos;s key metric. Every 0.1 improvement in PUE at a
        10 MW data center saves roughly <strong className="text-white">$700,000 per
        year</strong>.
      </p>

      <h3>Renewable &amp; Storage Systems</h3>
      <p>
        Solar PV arrays, wind turbines, battery energy storage systems (BESS), and hybrid
        microgrids are increasingly common. Managing these assets requires forecasting
        generation, predicting grid pricing, and optimizing charge/discharge cycles to
        maximize self-consumption and demand response revenue. A poorly managed BESS can
        degrade 2–3× faster than manufacturer specifications, destroying the ROI case.
      </p>

      <h3>Process &amp; Industrial</h3>
      <p>
        Compressors, steam boilers, process heat exchangers, cooling towers for
        manufacturing, and industrial pumping stations consume enormous amounts of energy.
        In manufacturing facilities, <strong className="text-white">20–40%</strong> of
        energy is wasted through compressed air leaks, inefficient staging, and
        calendar-based maintenance that ignores actual equipment condition.
      </p>

      <h2>Why Reactive Management Fails</h2>
      <p>
        The traditional approach to energy asset management follows a predictable
        pattern:
      </p>
      <ol>
        <li>
          <strong className="text-white">Install</strong> — Equipment is commissioned
          based on design-day conditions that occur a few days per year.
        </li>
        <li>
          <strong className="text-white">Run-to-failure</strong> — Assets operate until
          they break or an alarm fires, triggering emergency dispatch.
        </li>
        <li>
          <strong className="text-white">Calendar-based PM</strong> — Preventive
          maintenance is scheduled quarterly or annually regardless of actual asset
          condition, leading to both under- and over-servicing.
        </li>
        <li>
          <strong className="text-white">Manual optimization</strong> — A building
          engineer adjusts setpoints seasonally using intuition, not data.
        </li>
      </ol>
      <p>
        This approach fails because buildings are <em>dynamic systems</em>. Occupancy
        patterns change daily. Weather shifts hourly. Tariff structures vary by 15-minute
        interval. Equipment degrades non-linearly. A strategy that was optimal in January
        is costing you money in March.
      </p>

      <h2>The AI-Driven Alternative</h2>
      <p>
        Modern energy asset management replaces reactive workflows with a continuous
        optimization loop:
      </p>
      <ol>
        <li>
          <strong className="text-white">Ingest</strong> — Stream real-time telemetry
          from BMS, SCADA, IoT sensors, weather APIs, utility tariff feeds, and occupancy
          systems into a unified data layer.
        </li>
        <li>
          <strong className="text-white">Model</strong> — Build physics-informed digital
          twins of every asset and the facility as a whole, calibrated against actual
          operating data.
        </li>
        <li>
          <strong className="text-white">Predict</strong> — Forecast thermal loads,
          electrical demand, equipment degradation, and energy prices 1–24 hours ahead
          with 95%+ accuracy.
        </li>
        <li>
          <strong className="text-white">Optimize</strong> — Autonomous agents adjust
          setpoints, chiller staging, VFD speeds, battery dispatch, and demand response
          participation every 60 seconds to hit global optima.
        </li>
        <li>
          <strong className="text-white">Learn</strong> — Continuous feedback loops
          improve model accuracy over time, adapting to seasonal shifts, occupancy changes,
          and equipment aging.
        </li>
      </ol>

      <h2>Measurable Impact</h2>
      <p>
        Facilities that adopt AI-driven energy asset management consistently report:
      </p>
      <ul>
        <li>
          <strong className="text-white">25–35% reduction</strong> in total energy spend
        </li>
        <li>
          <strong className="text-white">25%+ extension</strong> in equipment useful life
          through condition-based maintenance
        </li>
        <li>
          <strong className="text-white">40% fewer</strong> unplanned outages and
          emergency dispatches
        </li>
        <li>
          <strong className="text-white">2–5× first-year ROI</strong> with payback
          periods under 6 months
        </li>
        <li>
          Automated ESG reporting, ENERGY STAR benchmarking, and regulatory compliance
          documentation
        </li>
      </ul>

      <h2>The Enerzyz Approach</h2>
      <p>
        Enerzyz OS connects to every energy asset in your facility — bridging BACnet,
        Modbus, OPC-UA, MQTT, and REST APIs into a single control plane. It deploys
        without ripping out existing infrastructure. Within days, the system builds a
        digital twin, starts predicting failures, and begins autonomous optimization —
        with full human-in-the-loop oversight and an explainable justification trail for
        every action.
      </p>
      <p>
        Whether you&apos;re a facility owner trying to boost NOI, a service contractor
        looking to eliminate blind truck rolls, or an asset manufacturer aiming to
        embed intelligence into your product line — understanding your energy assets is
        the first step toward making them self-optimizing.
      </p>
    </>
  );
}
