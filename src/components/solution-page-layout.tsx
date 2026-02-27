"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { BookDemoForm } from "./book-demo-form";
import { Breadcrumbs } from "./breadcrumbs";

/* ─── Shared types ─── */
export type PainPoint = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type Capability = {
  eyebrow: string;
  title: string;
  description: string;
  metric?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type UseCaseItem = {
  vertical: string;
  painPoint: string;
  outcome: string;
};

export type SolutionPageProps = {
  /* Hero */
  eyebrow: string;
  headline: string;
  subheadline: string;
  heroStats: Stat[];
  /* Breadcrumb */
  breadcrumbLabel: string;
  /* Pain points */
  painSectionTitle: string;
  painSectionSubtitle: string;
  painPoints: PainPoint[];
  /* Capabilities */
  capSectionEyebrow: string;
  capSectionTitle: string;
  capabilities: Capability[];
  /* Use cases */
  useCaseTitle: string;
  useCases: UseCaseItem[];
  /* ROI / Outcome metrics */
  outcomeSectionTitle: string;
  outcomeSectionSubtitle: string;
  outcomeStats: Stat[];
  /* CTA */
  ctaHeadline: string;
  ctaDescription: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function SolutionPageLayout(props: SolutionPageProps) {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.18),transparent_60%)]" aria-hidden />

      <Breadcrumbs
        items={[
          { label: "Solutions", href: "/" },
          { label: props.breadcrumbLabel },
        ]}
      />

      {/* ─── Hero ─── */}
      <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 lg:px-8 lg:pt-14">
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
            {props.eyebrow}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            {props.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
          >
            {props.subheadline}
          </motion.p>

          {/* Quick stats */}
          <motion.div variants={fadeUp} className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {props.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5"
              >
                <div className="text-2xl font-semibold text-sky-300">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-a-demo"
              className="relative overflow-hidden rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400 animate-button-sweep"
            >
              Book a Demo
            </Link>
            <a
              href="https://os.enerzyz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Explore Enerzyz OS
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Pain Points ─── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold md:text-4xl">
            {props.painSectionTitle}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-white/60">
            {props.painSectionSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {props.painPoints.map((pain) => (
            <motion.article
              key={pain.title}
              variants={fadeUp}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300">{pain.icon}</span>
              <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{pain.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ─── Capabilities ─── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80"
          >
            {props.capSectionEyebrow}
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-semibold md:text-4xl">
            {props.capSectionTitle}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-8 lg:grid-cols-3"
        >
          {props.capabilities.map((cap) => (
            <motion.article
              key={cap.title}
              variants={fadeUp}
              className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.06]"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-sky-200/90">
                {cap.eyebrow}
              </div>
              <h3 className="text-2xl font-semibold leading-tight text-white">{cap.title}</h3>
              <p className="text-base text-white/70">{cap.description}</p>
              {cap.metric && (
                <div className="pt-3 text-sm font-medium text-sky-200/90">{cap.metric}</div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ─── Use Cases ─── */}
      <section className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-semibold md:text-4xl"
        >
          {props.useCaseTitle}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {props.useCases.map((uc, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-300/80">
                {uc.vertical}
              </div>
              <p className="mt-3 text-sm font-medium text-white/90">{uc.painPoint}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{uc.outcome}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Outcome Stats ─── */}
      <section className="relative mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] px-8 py-14 text-center shadow-[0_30px_80px_rgba(2,6,23,0.5)]"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold md:text-4xl">
            {props.outcomeSectionTitle}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-white/60">
            {props.outcomeSectionSubtitle}
          </motion.p>
          <motion.div variants={fadeUp} className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {props.outcomeStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-semibold text-sky-300">{stat.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Book-a-Demo CTA ─── */}
      <section className="relative mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-10 shadow-[0_32px_80px_rgba(2,6,23,0.6)] backdrop-blur">
          <BookDemoForm
            heading={props.ctaHeadline}
            description={props.ctaDescription}
            submitLabel="Book My Demo"
            className="space-y-0"
          />
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.28em] text-white/40">
          Enerzyz unifies energy asset management to make your facility sentient
        </p>
      </section>
    </main>
  );
}
