"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Plug Enerzyz into your existing BMS, SCADA, IoT sensors, and metering infrastructure via BACnet, Modbus, OPC-UA, MQTT, or REST API — no rip-and-replace.",
  },
  {
    number: "02",
    title: "Ingest & Learn",
    description:
      "The OS streams real-time telemetry — temperatures, pressures, currents, occupancy, weather, tariffs — and builds a physics-informed digital twin of your facility within days.",
  },
  {
    number: "03",
    title: "Optimize",
    description:
      "AI agents autonomously orchestrate setpoints, staging, and schedules every 60 seconds to find global optima — with full human-in-the-loop oversight and justification trails.",
  },
  {
    number: "04",
    title: "Measure & Report",
    description:
      "Track energy savings, maintenance cost reduction, carbon offsets, and NOI impact in real-time dashboards. Auto-generate investor-grade ESG and compliance reports.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export function HowItWorks() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="mb-14 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          How it works
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          From legacy stack to autonomous facility in weeks
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
          A four-step deployment that starts delivering savings from day one —
          no downtime, no disruption.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Connecting line — visible on lg+ */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent lg:block"
          aria-hidden
        />

        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className="group relative flex flex-col items-center text-center"
          >
            {/* Step number circle */}
            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/15 bg-slate-950 text-xl font-semibold text-sky-300 shadow-[0_0_30px_rgba(56,189,248,0.15)] transition group-hover:border-sky-400/40 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]">
              {step.number}
            </div>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
