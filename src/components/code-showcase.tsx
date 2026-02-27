"use client";

import { motion } from "framer-motion";

type Integration = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const integrations: Integration[] = [
  {
    name: "BACnet",
    description: "Building automation & HVAC",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    name: "Modbus",
    description: "Industrial controllers & PLCs",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "OPC-UA",
    description: "SCADA & process systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "MQTT",
    description: "IoT sensors & edge devices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 20V10" />
        <path d="M6 16l6-6 6 6" />
        <circle cx="12" cy="6" r="2" />
        <circle cx="4" cy="18" r="2" />
        <circle cx="20" cy="18" r="2" />
      </svg>
    ),
  },
  {
    name: "REST API",
    description: "Cloud platforms & ERP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M7 8l-4 4 4 4" />
        <path d="M17 8l4 4-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function CodeShowcase() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          Seamless integration
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Connect in hours, not months
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
          Enerzyz bridges every protocol in your facility into one unified
          control plane — no rip-and-replace, no custom middleware. Plug into
          your existing infrastructure and go live the same week.
        </p>
      </div>

      {/* Protocol grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
      >
        {integrations.map((item) => (
          <motion.div
            key={item.name}
            variants={fadeUp}
            className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-7 text-center transition duration-500 hover:border-sky-400/30 hover:bg-white/[0.06]"
          >
            <div className="text-sky-300/70 transition duration-300 group-hover:text-sky-300">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold text-white">{item.name}</h3>
            <p className="text-[11px] leading-relaxed text-white/45">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Zero downtime onboarding
        </span>
        <span className="hidden h-4 w-px bg-white/15 sm:block" />
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Protocol auto-discovery
        </span>
        <span className="hidden h-4 w-px bg-white/15 sm:block" />
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Unified control plane
        </span>
      </motion.div>
    </section>
  );
}
