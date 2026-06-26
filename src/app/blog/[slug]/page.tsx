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
          url: `https://enerzyz.com/api/og?title=${encodeURIComponent(article.title)}&subtitle=${encodeURIComponent(article.description.slice(0, 110))}`,
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
      images: [`https://enerzyz.com/api/og?title=${encodeURIComponent(article.title)}&subtitle=${encodeURIComponent(article.description.slice(0, 110))}`],
    },
  };
}

/* ─── Article content registry ─── */
function ArticleContent({ slug }: { slug: string }) {
  switch (slug) {
    case "what-are-energy-assets-and-why-they-matter":
      return <WhatAreEnergyAssets />;
    case "singapore-cooling-paradox-memory-driven-buildings":
      return <SingaporeCoolingParadox />;
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

/* ══════════════════════════════════════════════════════════
   ARTICLE: The Singapore Paradox — Memory-Driven Buildings
   ══════════════════════════════════════════════════════════ */
function SingaporeCoolingParadox() {
  return (
    <>
      <p className="text-lg leading-relaxed text-white/70">
        Let's dive deep into our founder's post on Linkedin: If Iceland, Qatar, the UAE and
        Kuwait sit at the top of the per-capita energy consumption table because of
        extreme climate and abundant domestic reserves — why is Singapore there too? No
        permafrost. No desert. No oil field. And yet{" "}
        <strong className="text-white">649 GJ per capita</strong>, year after year. The
        outlier nation. This piece is the follow-up: the data, the physics, and the
        control-system architecture that explains the gap — and what it means for every
        commercial building and data center operator on the planet.
      </p>

      <h2>The Outlier, Quantified</h2>
      <p>
        Singapore&apos;s electricity demand has compounded at{" "}
        <strong className="text-white">~3.4% per year</strong> over the last decade,
        with the building sector consuming roughly{" "}
        <strong className="text-white">52%</strong> of the national total. Within
        commercial buildings, air-conditioning alone accounts for{" "}
        <strong className="text-white">40–60% of electricity use</strong> — and in
        data centers, that share climbs north of{" "}
        <strong className="text-white">38–45%</strong> of total facility load. The country
        is now home to <strong className="text-white">~70 operational data centers</strong>{" "}
        consuming approximately <strong className="text-white">7% of national
        electricity</strong>, with another ~300 MW of green-conditional capacity already
        in the pipeline under IMDA&apos;s Green DC Roadmap.
      </p>
      <p>
        Singapore imports <strong className="text-white">over 95%</strong> of its primary
        energy. There is no geological buffer. Every kilowatt-hour that cools a server
        room or a Grade-A office tower has been shipped in as LNG and converted at a
        national fleet efficiency of around{" "}
        <strong className="text-white">52% (HHV)</strong>. The exposure isn&apos;t
        theoretical — it&apos;s on the balance sheet of every facility manager and REIT in
        the country.
      </p>

      <h2>The Global Mirror</h2>
      <p>
        Singapore is the leading indicator, not the exception. The IEA projects global
        space-cooling electricity demand will{" "}
        <strong className="text-white">triple by 2050</strong>, from ~2,000 TWh today to
        roughly 6,200 TWh — adding more cooling load over the next 25 years than the
        entire current electricity consumption of the United States and the European
        Union combined. At the same time, global data center electricity use is forecast
        to <strong className="text-white">more than double by 2030</strong>, reaching
        ~945 TWh, with AI workloads alone driving over 40% of the marginal increase.
      </p>
      <p>
        Capgemini Research Institute estimates the total addressable market for
        AI-enabled building and cooling optimization at{" "}
        <strong className="text-white">~$2 trillion by 2035</strong>. McKinsey&apos;s
        2024 cooling decarbonization analysis puts the realistic energy reduction
        opportunity from optimization (not replacement) at{" "}
        <strong className="text-white">20–40% of existing cooling load</strong> with
        payback periods under 24 months in commercial portfolios. The number isn&apos;t
        speculative. It&apos;s sitting in the gap between how buildings <em>could</em>{" "}
        run and how they actually run.
      </p>

      <h2>Why Cooling Overshoots — A Physics &amp; Control View</h2>
      <p>
        Singapore offices are routinely conditioned to{" "}
        <strong className="text-white">22–23°C</strong> against an outdoor wet-bulb of
        ~27°C. ASHRAE 55 comfort bounds permit up to <strong className="text-white">
        26°C</strong> for the same humidity band. Every <strong className="text-white">
        1°C</strong> of unnecessary setpoint depression costs roughly{" "}
        <strong className="text-white">6–8%</strong> additional cooling energy. The Go
        25 campaign explicitly recognizes this — but it&apos;s a manual, blanket policy
        applied to a system that is anything but uniform.
      </p>
      <p>
        The real inefficiency isn&apos;t the setpoint number. It&apos;s the control
        philosophy underneath. Most commercial HVAC plants still run on:
      </p>
      <ul>
        <li>
          <strong className="text-white">Static schedules</strong> calibrated to
          design-day conditions that occur ~3% of the year.
        </li>
        <li>
          <strong className="text-white">Single-loop PID controllers</strong> with no
          coupling between chiller plant, AHU, VAV, and the building envelope.
        </li>
        <li>
          <strong className="text-white">Reactive resets</strong> — chilled water
          temperature setpoints adjusted manually by a facilities engineer, often
          quarterly, based on intuition.
        </li>
        <li>
          <strong className="text-white">Zero forecasting</strong>. The plant has no
          model of the weather two hours out, the meeting that&apos;s about to fill
          floor 14, or the demand-charge interval starting at 14:00.
        </li>
      </ul>
      <p>
        The plant cannot anticipate. It can only react. And in a system with{" "}
        <strong className="text-white">15–45 minute thermal inertia</strong> across the
        building envelope, reactive control is by definition late. Late control means
        overshoot. Overshoot means oversizing. Oversizing means the chiller you bought
        runs at <strong className="text-white">30–50% part-load</strong> for most of the
        year, where its COP collapses from a rated 6.0 to an operating 3.5–4.2.
      </p>

      <h2>What &quot;Memory&quot; Actually Means in a Control Stack</h2>
      <p>
        A &quot;memory-driven&quot; facility isn&apos;t a marketing phrase. It&apos;s a
        specific architectural shift from stateless rule engines to{" "}
        <strong className="text-white">stateful, learned models</strong> that retain and
        update three classes of memory:
      </p>
      <h3>1. Thermal &amp; Hydraulic State Memory</h3>
      <p>
        A physics-informed neural network (PINN) or graph neural network (GNN) maintains
        a live digital twin of the building&apos;s thermal mass, ductwork pressure
        gradients, and chilled-water hydraulics. Unlike a static EnergyPlus model, this
        twin is{" "}
        <strong className="text-white">continuously re-calibrated against real
        telemetry</strong> at 60-second intervals. Mean absolute percentage error (MAPE)
        on next-hour zone temperature prediction drops from typical BMS-trend baselines
        of 12–18% to <strong className="text-white">under 4%</strong> after two weeks of
        adaptation.
      </p>

      <h3>2. Occupancy &amp; Behavior Memory</h3>
      <p>
        Time-series transformer models (variants of Temporal Fusion Transformer or
        PatchTST) ingest 6–18 months of occupancy, badge-in, Wi-Fi association, CO₂, and
        plug-load data. They learn that floor 22 fills up at 09:14 on Tuesdays during
        client weeks, that the L1 lobby cools 40% faster after rain, and that the
        Friday-afternoon meeting room block predictably collapses by 15:30. The model
        outputs probabilistic load forecasts with{" "}
        <strong className="text-white">P10–P90 confidence bands</strong> — not a single
        point estimate. Forecast horizon: 15 minutes to 24 hours.
      </p>

      <h3>3. Asset Health &amp; Degradation Memory</h3>
      <p>
        Each compressor, pump, and fan carries its own learned wear curve — a survival
        model trained on vibration spectra, motor current signature analysis (MCSA),
        bearing temperature, refrigerant superheat, and approach temperatures. The
        system knows that chiller CH-02 has lost ~7% of its rated capacity over 18
        months and stages it accordingly. It knows that AHU-14&apos;s VFD is drawing
        anomalous harmonics that historically precede bearing failure by 90–120 days.
        It generates a work order before the failure, not after.
      </p>

      <h2>The Optimization Loop</h2>
      <p>
        With memory in place, control becomes a closed-loop optimization problem solved
        every 60 seconds:
      </p>
      <ol>
        <li>
          <strong className="text-white">Forecast</strong> — Predict the next 2–24 hours
          of zone loads, ambient wet-bulb, occupancy, and utility tariff intervals.
        </li>
        <li>
          <strong className="text-white">Constrain</strong> — Encode ASHRAE 55 comfort
          bounds, equipment safety envelopes, demand-charge thresholds, and any active
          ESG targets as hard and soft constraints.
        </li>
        <li>
          <strong className="text-white">Solve</strong> — Run a mixed-integer model
          predictive control (MPC) problem over a rolling horizon. Decision variables
          include chiller staging, chilled-water supply temperature reset, condenser
          water setpoint, VFD speeds, AHU discharge air temp, and BESS dispatch.
        </li>
        <li>
          <strong className="text-white">Act &amp; Verify</strong> — Push setpoints to
          BMS/SCADA via BACnet/Modbus/OPC-UA. Compare realized energy and comfort against
          the model&apos;s prediction. Feed the residual back into the next training
          batch.
        </li>
        <li>
          <strong className="text-white">Explain</strong> — Every action carries a
          machine-readable justification trail. The chief engineer can audit any
          decision the system made at 03:47 last Tuesday, in plain English, with the
          counterfactual energy cost of <em>not</em> taking that action.
        </li>
      </ol>

      <h2>What This Looks Like on a P&amp;L</h2>
      <p>
        From production deployments across Asia-Pacific portfolios — including high-rise
        commercial towers, hospitals, semiconductor fabs, and colocation data centers —
        the measured impact of memory-driven cooling control consistently lands in this
        range:
      </p>
      <ul>
        <li>
          <strong className="text-white">22–34% reduction</strong> in total HVAC
          electricity consumption against a 12-month rolling baseline.
        </li>
        <li>
          <strong className="text-white">0.08–0.15 absolute PUE improvement</strong> in
          data centers — translating to roughly{" "}
          <strong className="text-white">$700K–$1.2M per year per 10 MW</strong>.
        </li>
        <li>
          <strong className="text-white">25%+ extension</strong> in chiller and major
          rotating-equipment service life via condition-based maintenance and load
          equalization.
        </li>
        <li>
          <strong className="text-white">15–20% reduction</strong> in peak demand
          charges through tariff-aware pre-cooling and BESS dispatch.
        </li>
        <li>
          <strong className="text-white">Payback in 4–9 months</strong> on a no-CapEx,
          software-only deployment that sits on top of existing BMS infrastructure.
        </li>
        <li>
          <strong className="text-white">Auditable Scope 2 reduction</strong> mapped to
          IFRS S1/S2 and GRESB submissions — without a separate reporting pipeline.
        </li>
      </ul>

      <h2>Why This Is the Highest-ROI Lever in the Built World</h2>
      <p>
        There is no other intervention in commercial real estate or digital
        infrastructure with this risk profile: <strong className="text-white">no
        equipment replacement, no construction, no tenant disruption, sub-12-month
        payback, and 20–35% recurring opex reduction</strong>. Solar PV requires roof
        area and capital. Heat-pump replacement requires capex and downtime. Envelope
        retrofits require tenant cooperation. Memory-driven optimization is a software
        overlay on the assets the building already owns.
      </p>
      <p>
        For investors, the math is brutal in the other direction. A Grade-A Singapore
        office tower spending <strong className="text-white">SGD 4.5–6.0/sqft/year</strong>{" "}
        on energy can compress that line item by SGD 1.0–1.8/sqft. On a 500,000 sqft
        building, that&apos;s SGD 500K–900K of recurring NOI uplift — capitalized at a
        4.5% cap rate, roughly{" "}
        <strong className="text-white">SGD 11M–20M of asset value</strong> created from
        software. The same arithmetic holds, with different units, in Mumbai, Dubai,
        Jakarta, Frankfurt, and Northern Virginia.
      </p>

      <h2>The Enerzyz Stack</h2>
      <p>
        This is what we build. Enerzyz OS is the memory layer for energy assets — a
        protocol-agnostic platform that bridges BACnet, Modbus, OPC-UA, MQTT, and REST
        into a unified control plane; trains physics-informed digital twins per asset
        and per facility; runs constrained MPC optimization at 60-second resolution;
        and ships every action with a human-readable justification trail and a
        human-in-the-loop override.
      </p>
      <p>
        Deployments start within <strong className="text-white">two weeks</strong> on
        existing infrastructure. The first optimization actions go live in week three.
        Measurable savings appear in the first full billing cycle. The model gets
        better every day it runs.
      </p>
      <p>
        Singapore is the proof that the gap between &quot;possible&quot; and
        &quot;actual&quot; in cooling is enormous, and the policy, capital, and
        engineering will to close it already exists. The rest of the world is heading to
        the same place — by climate, by AI load growth, or by regulation. The facilities
        that put memory into their control systems now will compound that advantage every
        quarter for the next two decades.
      </p>
      <p>
        It is, genuinely, the highest-ROI tweak available in the built world. It just
        requires letting the building learn.
      </p>
    </>
  );
}
