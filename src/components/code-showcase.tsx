"use client";

import { motion } from "framer-motion";

const codeLines = [
  {
    prefix: "const",
    snippet: "client = EnerzyzClient(api_key=\"YOUR_API_KEY\");",
  },
  {
    prefix: "const",
    snippet: "facility = client.facilities.connect(\"NY_Office\");",
  },
  {
    prefix: "const",
    snippet: "telemetry = facility.get_live_metrics();",
  },
  {
    prefix: "const",
    snippet: "insight = Optimizer({ objectives: ['efficiency'] }).run(telemetry);",
  },
  {
    prefix: "await",
    snippet: "facility.apply_optimization(insight);",
  },
];

export function CodeShowcase() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
            seamless integration
          </span>
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            <span className="animate-text-glow">Super Readable API</span>  to connect siloed
              systems lightning fast.
          </h2>
          <p className="text-lg text-white/70">
            Connect assets to the bus and start working with the assets data.
            Inspect causal graphs, observe asset status updates, and trace generation and consumption flow.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Universal API
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Asset Status Updates  
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Forecast intelligence
            </span>
          </div>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(6,12,31,0.45)]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-2 text-xs text-white/40">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/60" />
            <span className="ml-auto rounded-full border border-white/20 px-3 py-1 font-medium uppercase tracking-[0.2em] text-[10px] text-white/60">
              Enerzyz CLI
            </span>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-black/60 p-6">
            <code className="space-y-4 text-sm text-white/80">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line.snippet}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                >
                  <span className="pr-3 font-medium uppercase tracking-[0.32em] text-[10px] text-sky-200/80">
                    {line.prefix}
                  </span>
                  <span className="font-mono text-[13px] text-white/90">
                    {line.snippet}
                  </span>
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(94,181,255,0)_0%,rgba(94,181,255,0.25)_48%,rgba(88,179,255,0)_100%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                </motion.div>
              ))}
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
