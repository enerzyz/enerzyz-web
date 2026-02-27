"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  metric?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Within 90 days of deploying Enerzyz across our portfolio, we saw a 28% reduction in energy spend and eliminated every single unplanned chiller shutdown. Our maintenance team went from firefighting to strategic planning overnight.",
    name: "VP of Engineering",
    title: "Commercial Real Estate Portfolio",
    company: "120+ managed properties",
    metric: "28% energy cost reduction",
  },
  {
    quote:
      "We used to send technicians to site blind — no context, no history, just a ticket number. Enerzyz gives our dispatch team root cause analysis before the truck even leaves. First-time fix rates jumped from 52% to 87%.",
    name: "Director of Operations",
    title: "National HVAC Service Provider",
    company: "450+ managed contracts",
    metric: "87% first-time fix rate",
  },
  {
    quote:
      "Embedding Enerzyz into our VRF line gave us field telemetry we never had. We cut warranty costs 35% in the first year and our product team finally has real-world performance data to close the lab-to-field gap.",
    name: "Head of Digital Products",
    title: "HVAC Equipment Manufacturer",
    company: "Global OEM",
    metric: "35% warranty cost reduction",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export function Testimonials() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="mb-14 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          Trusted by industry leaders
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Real results from real facilities
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
          Facility owners, operators, and manufacturers trust Enerzyz to
          transform their energy operations.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="grid gap-8 lg:grid-cols-3"
      >
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            variants={fadeUp}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-white/20 hover:bg-white/[0.06]"
          >
            {/* Quote mark */}
            <svg
              className="mb-4 h-8 w-8 text-sky-400/30"
              viewBox="0 0 32 32"
              fill="currentColor"
              aria-hidden
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>

            <p className="flex-1 text-sm leading-relaxed text-white/70">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-6 border-t border-white/[0.06] pt-5">
              {t.metric && (
                <div className="mb-3 inline-block rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300">
                  {t.metric}
                </div>
              )}
              <div className="text-sm font-semibold text-white">{t.name}</div>
              <div className="mt-0.5 text-xs text-white/50">{t.title}</div>
              <div className="text-xs text-white/40">{t.company}</div>
            </div>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  );
}
