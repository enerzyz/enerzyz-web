"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SiteFooter } from "@/components/site-footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const caseStudies = [
  {
    tag: "Hotels & Resorts",
    region: "Asia",
    building: "11-storey luxury hotel property built in the 1960s",
    challenge:
      "Facing rising energy costs and tightening regulations, the facility team needed to optimize their HVAC and chilled water loop without disrupting hotel operations or guest comfort. The hotel had an extensive BMS already in place via Johnson Controls.",
    approach:
      "Enerzyz OS was integrated with the existing BMS over BACnet IP. A zone by zone rollout was executed in close coordination with the Building MEP Contractor and Maintenance Team. Enerzyz AI indexed and optimized the compressor and centrifugal pumps' system curve to determine minimum flow rate. It continuously optimized chilled water set temperatures based on real-time occupancy. Maximum allowable temperature was maintained with reduced humidity to save energy without occupant's discomfort.",
    assets: ["Chiller", "Air Handling Units (AHUs)", "Variable Air Valves (VAVs)", "Hot Water System", "Chilled Water System"],
    period: "3 months — 2025",
    results: [
      { value: "25.8%", label: "Reduction in HVAC electricity consumption" },
      { value: "$26,301", label: "Total cost savings" },
      { value: "219,441 kWh", label: "Electricity consumption reduced" },
      { value: "61.45 tCO₂eq", label: "Emissions mitigated" },
    ],
    highlight: "Zero disruptions to daily hotel operations or guest comfort throughout the deployment. Facilitywide Awareness in Realtime Leveraging AI.",
    accentColor: "sky",
  },
  {
    tag: "International Development Organization",
    region: "South Asia",
    building: "4-floor expansive modern office building (GOLD certified) built in the 2000s",
    challenge:
      "Rising energy asset management costs and regulatory pressures prompted the facility team to seek optimization across their HVAC, chilled water loop, and rooftop solar installation — all while keeping office occupants comfortable and operations uninterrupted.",
    approach:
      "Enerzyz OS integrated with the existing BMS via BACnet IP, and with solar inverters via API. A floor-by-floor rollout was coordinated with the Project Manager. Enerzyz ensured minimal compressor utilization and a thin neutral zone around set point of the chilled water loop by autonomously adjusting based on weather data and delta T acceleration, while simultaneously providing solar string anomaly detection, soiling insights, and inverter-level performance monitoring.",
    assets: ["Air Handling Units (AHUs)", "Variable Air Valves (VAVs)", "Hot Water System", "Chilled Water System", "Solar Rooftop", "Battery Energy Storage"],
    period: "6 months — 2025",
    results: [
      { value: "30.1%", label: "Reduction in total energy costs" },
      { value: "25.1%", label: "Reduction in HVAC electricity consumption" },
      { value: "$19,124", label: "Total cost savings" },
      { value: "156,387 kWh", label: "Electricity consumption reduced" },
      { value: "99.62 tCO₂eq", label: "Emissions mitigated" },
      { value: "+27.1%", label: "Increase in solar rooftop output" },
    ],
    highlight: "HVAC optimization and solar rooftop performance gains delivered together — a unified energy asset intelligence layer across the entire facility.",
    accentColor: "emerald",
  },
  {
    tag: "Industrial Manufacturing",
    region: "Southeast Asia",
    building: "Platinum-certified industrial complex built in the 2010s",
    challenge:
      "Rising energy asset management costs — most critically, the risk of unplanned production downtime — drove the operations team to seek an AI-driven solution. Every hour of unplanned downtime costs the facility close to $1M in lost production revenue. The factory also sought to optimize boiler and generator efficiency across its utilities assets.",
    approach:
      "Enerzyz OS was integrated with the existing Siemens PLCs via OPC-UA, Modbus, and MQTT for sensors. The rollout was executed in the manufacturing Division in close coordination with the Project Manager, ensuring production remained fully unaffected throughout. Enerzyz's Utilities Domain Adapted AI Engine indexed all electric motors, boilers, and generators in real time, trained on facility-specific parameters, and within a week of calibration provided critical early-warning insights — preventing what would have been a significant unplanned downtime event. Boiler efficiency was optimized by continuously tracking and maintaining peak efficiency curves, while generator lifecycle awareness reduced fuel consumption and management costs.",
    assets: ["Electric Motors", "Boilers", "Generators", "Production Machinery"],
    period: "4 months — 2026",
    results: [
      { value: "$5.2M", label: "Unplanned downtime losses avoided" },
      { value: "0", label: "Unscheduled downtime events" },
      { value: "9.1%", label: "Reduction in boiler fuel consumption" },
      { value: "8,213 kWh", label: "Utilities electricity consumption reduced" },
      { value: "4.1 tCO₂eq", label: "Emissions mitigated" },
      { value: "+5%", label: "Overall production efficiency increase*" },
    ],
    highlight: "Zero unplanned downtime across the entire deployment period — with early fault detection flagging a critical failure risk within the first week of go-live.",
    accentColor: "amber",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.16),transparent_60%)]"
        aria-hidden
      />

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-36 lg:px-8 lg:pt-44">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80"
          >
            Proven Results
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            Measurable impact. Real facilities. Real savings.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-white/60 md:text-lg"
          >
            These results were achieved autonomously — no new infrastructure, no operational disruptions, and no data science team required on the client side. Just Enerzyz OS running continuously against existing BMS and control infrastructure.
          </motion.p>
        </motion.div>

        {/* Summary stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-4"
        >
          {[
            { value: "10–30%", label: "Avg. energy cost reduction" },
            { value: "$5.2M+", label: "Production losses avoided" },
            { value: "160+ tCO₂eq", label: "Emissions avoided (combined)" },
            { value: "0", label: "Operational disruptions" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-semibold text-white md:text-3xl">{s.value}</div>
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Case study cards */}
      <section className="mx-auto max-w-5xl space-y-12 px-6 pb-28 lg:px-8">
        {caseStudies.map((cs, i) => (
          <motion.article
            key={cs.tag}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.08 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
          >
            {/* Card header */}
            <div
              className={`flex flex-wrap items-start justify-between gap-4 border-b border-white/10 px-8 py-6 ${
                cs.accentColor === "emerald"
                  ? "bg-emerald-500/[0.06]"
                  : cs.accentColor === "amber"
                  ? "bg-amber-500/[0.06]"
                  : "bg-sky-500/[0.06]"
              }`}
            >
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] ${
                    cs.accentColor === "emerald"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : cs.accentColor === "amber"
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-sky-500/20 text-sky-300"
                  }`}
                >
                  {cs.tag}
                </span>
                <p className="mt-2 text-sm text-white/50">{cs.region ? `${cs.region} · ${cs.building}` : cs.building}</p>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">Measurement Period</span>
                <p className={`mt-1 text-sm font-semibold ${cs.accentColor === "emerald" ? "text-emerald-300" : cs.accentColor === "amber" ? "text-amber-300" : "text-sky-300"}`}>
                  {cs.period}
                </p>
              </div>
            </div>

            <div className="grid gap-0 lg:grid-cols-5">
              {/* Left: narrative */}
              <div className="space-y-6 border-b border-white/10 px-8 py-8 lg:col-span-3 lg:border-b-0 lg:border-r">
                <div>
                  <h3 className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Challenge</h3>
                  <p className="text-sm leading-relaxed text-white/70">{cs.challenge}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Approach</h3>
                  <p className="text-sm leading-relaxed text-white/70">{cs.approach}</p>
                </div>
                <div>
                  <h3 className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Assets Controlled</h3>
                  <ul className="flex flex-wrap gap-2">
                    {cs.assets.map((a) => (
                      <li
                        key={a}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] text-white/60"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${
                    cs.accentColor === "emerald"
                      ? "border-emerald-500/20 bg-emerald-500/[0.07] text-emerald-200/80"
                      : cs.accentColor === "amber"
                      ? "border-amber-500/20 bg-amber-500/[0.07] text-amber-200/80"
                      : "border-sky-500/20 bg-sky-500/[0.07] text-sky-200/80"
                  }`}
                >
                  {cs.highlight}
                </div>
              </div>

              {/* Right: result metrics */}
              <div className="px-8 py-8 lg:col-span-2">
                <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">Results</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cs.results.map((r) => (
                    <div
                      key={r.label}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4"
                    >
                      <div
                        className={`text-2xl font-semibold ${
                          cs.accentColor === "emerald" ? "text-emerald-300" : cs.accentColor === "amber" ? "text-amber-300" : "text-sky-300"
                        }`}
                      >
                        {r.value}
                      </div>
                      <div className="mt-1 text-[10px] leading-snug text-white/50">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* What made these possible */}
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-12 text-center"
        >
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
            Under the Hood
          </span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What made these possible?</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Large Proprietary Data Set",
              body: "We proudly own one of the largest labeled datasets (millions of hours of data) for the most commonly used energy assets — covering asset behavior patterns across various loads and the full lifecycle health spectrum. Rightly labeled data spanning full lifecycle is half the work.",
            },
            {
              title: "Memory and Proper Contextualization",
              body: "Enerzyz integrates the whole facility's internal and high-relevance external data to reach global maxima — ensuring every optimization decision accounts for the complete operational picture. It remembers all the past patterns and behavior to the point it can relate things and act accordingly. In a nutshell, we are putting memories in the control stack.",
            },
            {
              title: "Fine Tuned AI Model",
              body: "Our largest labeled training data, coupled with our pattern-recognizing AI, enables insights from the subtlest wiggles in the graph. Our Utilities domain-adapted AI Engine delivers unseen insights and actions in zero latency, right from the vector database, once the model learns the nuances of the facility. We like to call ourselves a lab where we are trying to embed intelligence into the most important assets of our civilization.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <div className="mb-1 h-1 w-8 rounded-full bg-sky-400/60" />
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-28 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Ready to see results like these in your building?
          </h2>
          <p className="mt-4 text-white/60">
            Book a live demo and we&apos;ll model the energy and cost savings opportunity for your specific portfolio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
            >
              Book a Demo
            </Link>
            <Link
              href="/solutions/asset-owners"
              className="rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-sky-400/40 hover:text-white"
            >
              See Our Solutions
            </Link>
          </div>
        </motion.div>
      </section>

      <SiteFooter />
    </main>
  );
}
