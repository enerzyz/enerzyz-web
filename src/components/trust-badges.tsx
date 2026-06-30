"use client";

import { motion } from "framer-motion";

const badges = [
  {
    title: "ISO 27001",
    description: "Enterprise information security management certified.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    description: "Granular permissions with SSO, MFA, and audit logging.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "256-bit TLS",
    description: "End-to-end encryption for all data in transit and at rest.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2a5 5 0 0 1 5 5v3H7V7a5 5 0 0 1 5-5z" />
        <rect x="3" y="10" width="18" height="12" rx="2" />
        <path d="M12 14v3" />
      </svg>
    ),
  },
  {
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade availability with redundant infrastructure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Zero Trust Architecture",
    description: "Every access request verified, nothing trusted by default.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 2L3 7v6c0 5.25 3.75 10.13 9 11.25C17.25 23.13 21 18.25 21 13V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "GDPR Compliant",
    description: "Full data processing controls with DPA-ready agreements.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
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
  show: { transition: { staggerChildren: 0.1 } },
};

export function TrustBadges() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="mb-14 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-300/80">
          Enterprise-grade security
        </span>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Built for the most demanding environments
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
          Your operational data deserves the highest level of protection. Enerzyz
          meets the security, compliance, and reliability standards that
          enterprise facilities teams require.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.title}
            variants={fadeUp}
            className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-400 hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-sky-300 transition group-hover:border-sky-400/30">
              {badge.icon}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">{badge.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/50">
                {badge.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
