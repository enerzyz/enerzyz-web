"use client";

import Image from "next/image";
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

const values = [
  {
    title: "Autonomy with Oversight",
    description:
      "We believe AI should act decisively but never unaccountably. Every agent action carries a justification trail, and human operators maintain override authority at all times.",
  },
  {
    title: "Engineering-First",
    description:
      "We're engineers building for engineers. Our platform is designed for the people who actually run buildings not boardroom slides. Clean APIs, transparent decisions, real-time control.",
  },
  {
    title: "Outcomes Over Features",
    description:
      "We measure success in dollars saved, equipment-years extended, and carbon tons avoided, not feature counts. Every capability ships because it moves a measurable needle.",
  },
  {
    title: "Sustainability & Climate Compliance",
    description:
      "Every kilowatt-hour saved is tracked and auditable. Enerzyz maps energy and emissions data to IFRS S1 and S2 climate disclosure standards, helping facilities meet ISSB sustainability reporting requirements with real-time Scope 1 & 2 metrics, carbon accounting, and ESG-ready dashboards.",
  },
];

// const milestones = [
//   { year: "2025", event: "Founded with a mission to make every powered facility self-optimizing." },
//   { year: "2025", event: "Joined NVIDIA Inception and Antler accelerator programs." },
//   { year: "2025", event: "Affiliated with Stanford, World Bank, and ASHRAE." },
//   { year: "2025", event: "Deployed across 120+ sites with 2,390 MWH equivalent savings." },
//   { year: "2026", event: "Expanding to multi-continent portfolio orchestration." },
// ];

const affiliationLogos = [
  { src: "/logos/stanford.svg", alt: "Stanford University" },
  { src: "/logos/nvidia.svg", alt: "NVIDIA" },
  { src: "/logos/world-bank-group.svg", alt: "World Bank Group" },
  { src: "/logos/ashrae.svg", alt: "ASHRAE" },
  { src: "/logos/antler.svg", alt: "Antler" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]" aria-hidden />

      {/* Hero */}
      <section className="relative mx-auto max-w-5xl px-6 pb-20 pt-36 lg:px-8 lg:pt-44">
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
            About Enerzyz
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            Making every powered facility on Earth self-optimizing.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
          >
            Enerzyz builds the AI operating system for energy assets. We combine
            physics-informed digital twins, predictive machine learning, and
            autonomous agents to orchestrate HVAC, chillers, generators, BESS,
            pumps, and every powered system in commercial and industrial
            facilities — cutting waste, extending equipment life, and delivering
            net-zero outcomes at scale.
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80"
          >
            Our mission
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-semibold md:text-4xl"
          >
            On the pursuit to become a Kardashev Type 1 Civilization
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60"
          >
            The Kardashev Scale measures a civilization&apos;s energy
            utilization. A Type 1 Civilization harnesses all available energy on
            its planet. Today, humanity wastes 30–50% of the energy it
            generates through inefficient building operations, reactive
            maintenance, and siloed control systems. Enerzyz exists to close
            that gap — one facility at a time.
          </motion.p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80"
          >
            What drives us
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold md:text-4xl">
            Core principles
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Affiliations */}
      <section className="relative mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
            Backed by & affiliated with
          </span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-white">
            Industry leaders who share our vision
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
            We collaborate with leading academic institutions, AI technology
            leaders, sustainability enablers, and industry associations.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-5">
          {affiliationLogos.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center p-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={64}
                className="h-16 w-auto object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline – commented out
      <section className="relative mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="mb-10 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
            Our journey
          </span>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl text-white">
            Key milestones
          </h2>
        </div>
        <div className="relative border-l border-white/10 pl-8">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-sky-400 bg-slate-950" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/80">
                {m.year}
              </span>
              <p className="mt-1 text-sm text-white/70">{m.event}</p>
            </motion.div>
          ))}
        </div>
      </section>
      */}

      {/* CTA */}
      <section className="relative mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Ready to make your facility sentient?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Join 120+ sites already running on Enerzyz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-a-demo"
              className="rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
            >
              Request a Demo
            </Link>
            <a
              href="mailto:team@enerzyz.com"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Talk to our Team
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
