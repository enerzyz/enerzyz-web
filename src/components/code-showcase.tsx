"use client";

import { motion } from "framer-motion";

const codeLines = [
  {
    prefix: "const",
    snippet: "forecast = await enerzyz.intelligence.predict({ horizon: '15m' });",
  },
  {
    prefix: "if",
    snippet: "(forecast.load.spikes) controlGrid.defer('non-critical');",
  },
  {
    prefix: "await",
    snippet: "enerzyz.dispatch.storage({ site: 'west-battery', power: '+3.2MW' });",
  },
  {
    prefix: "log",
    snippet: "compliance.record({ outcome: 'market-bid', delta: '-12tCO₂' });",
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
            <span className="animate-text-glow">Readable API</span>  to connect any
             assets lightning fast.
          </h2>
          <p className="text-lg text-white/70">
            Connect Asset to the bus and start working with the asset data.
            Inspect causal graphs, observe asset status updates, and talk to your assets.
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
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent" />
            <div className="pointer-events-none absolute inset-x-[-40%] top-1/2 h-[2px] rotate-[-8deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
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
