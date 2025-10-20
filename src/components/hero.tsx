"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EarlyAccessButton } from "./early-access-button";
// import { CircularOrbit } from "./circular-orbit";

const headlineSegments = [
  { text: "Orchestrate", glow: false },
  { text: " energy assets", glow: true },
  { text: " with prophetic precision", glow: false },
];

const partnershipEmailBody = `Hello Enerzyz Leadership Team,

My name is [Your Name] from [Your Organization]. We believe a collaboration with Enerzyz OS could help us orchestrate our distributed energy assets with greater intelligence.

We would love to schedule a call to explore how our capabilities can align with Enerzyz to deliver resilient, automated energy asset operations and new value for our customers.

Looking forward to discussing next steps together.

Best regards,
[Your Name]
[Title], [Your Organization]
[Contact Number]`;

const partnershipMailto = `mailto:ai@enerzyz.com?subject=${encodeURIComponent("Partnership Proposal")}&body=${encodeURIComponent(partnershipEmailBody)}`;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <BackgroundVideo />
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center gap-16 px-6 pb-24 pt-32 text-center lg:px-12">
        <div className="flex w-full max-w-3xl flex-col items-center">
          <Link
            href="https://os.enerzyz.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Explore Enerzyz OS"
            className="inline-flex"
          >
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 transition hover:border-white/30 hover:text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              Enerzyz OS
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-sky-300/80" />
                <span className="relative h-2 w-2 rounded-full bg-sky-400" />
              </span>
            </motion.span>
          </Link>

          <motion.h1
            className="mt-8 text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          >
            {headlineSegments.map((segment) => (
              <span
                key={segment.text}
                className={segment.glow ? "animate-text-glow bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent" : undefined}
              >
                {segment.text}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-center text-base text-white/70 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: "easeOut" }}
          >
            Enerzyz synchronizes fragmented energy assets towards a single source of truth.
            Automate all your energy asset management through Enerzyz Vertical AI Agent to ensure optimization at every second!
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          >
            <EarlyAccessButton />
            <a
              href={partnershipMailto}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:border-white/40 hover:text-white"
            >
              Partner Up
            </a>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 text-center sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.16 },
              },
            }}
          >
            {[
              {
                label: "model accuracy",
                value: "95%+",
                detail: "in asset health indexing",
              },
              {
                label: "increase efficiency",
                value: "30%+",
                detail: "by O&M cost reduction",
              },
              {
                label: "unplanned outage",
                value: "0s",
                detail: "always know beforehand",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="glass-panel rounded-3xl px-4 py-6 text-center"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-sm uppercase tracking-[0.24em] text-white/60">
                  {item.label}
                </div>
                <div className="mt-3 text-3xl font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{item.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/**
         * Enerzyz control core animation hidden per request
         * <motion.div
         *   className="relative flex w-full justify-center lg:justify-end"
         *   initial={{ opacity: 0, x: 40 }}
         *   animate={{ opacity: 1, x: 0 }}
         *   transition={{ delay: 0.75, duration: 1.1, ease: "easeOut" }}
         * >
         *   <CircularOrbit />
         * </motion.div>
         */}
      </div>
    </section>
  );
}

function BackgroundVideo() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <video
        className="h-full w-full object-cover opacity-80"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-fallback.svg"
      >
        <source src="/video/hero-loop.mp4" type="video/mp4" />
        <source
          src="https://cdn.coverr.co/videos/coverr-silicon-valley-technology-5692/1080p.mp4"
          type="video/mp4"
        />
      </video>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,181,255,0.24),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,19,0.66)_0%,rgba(4,5,19,0.88)_60%,#040513_100%)]" />
    </div>
  );
}
