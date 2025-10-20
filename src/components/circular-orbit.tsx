"use client";

import { motion } from "framer-motion";

const nodes = [
  { label: "DERs", position: "top", delay: 0 },
  { label: "Demand", position: "right", delay: 0.3 },
  { label: "Markets", position: "bottom", delay: 0.6 },
  { label: "Storage", position: "left", delay: 0.9 },
];

export function CircularOrbit() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-white/5 bg-white/5/5" />
      <motion.div
        className="absolute inset-6 rounded-full border border-white/15"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      />

  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-sky-500/10 to-indigo-500/20 blur-2xl" />
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,rgba(4,5,19,0)_65%)]" />

      <motion.div
        className="mask-gradient absolute inset-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
      >
        <div className="absolute inset-0 grid place-items-center">
          <div className="glass-panel relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl px-2 text-center">
            <span className="text-sm uppercase tracking-[0.24em] text-sky-200/90">
              Enerzyz
            </span>
            <span className="mt-1 text-lg font-semibold">Control Core</span>
            <span className="mt-3 h-0.5 w-10 rounded-full bg-sky-400/60" />
          </div>
        </div>
      </motion.div>

      {nodes.map((node) => (
        <motion.div
          key={node.label}
          className="absolute flex w-24 flex-col items-center text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: node.delay, ease: "easeOut" }}
          style={computePosition(node.position)}
        >
          <div className="glass-panel flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 text-sm font-medium">
            {node.label}
          </div>
          <div className="mt-2 h-px w-14 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
  <div className="absolute left-1/2 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_25px_rgba(94,181,255,0.8)]" />
  <div className="absolute right-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-300 shadow-[0_0_25px_rgba(94,181,255,0.8)]" />
  <div className="absolute left-1/2 bottom-4 h-3 w-3 -translate-x-1/2 rounded-full bg-indigo-300 shadow-[0_0_25px_rgba(144,160,255,0.8)]" />
  <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-sky-200 shadow-[0_0_25px_rgba(94,181,255,0.6)]" />
      </motion.div>
    </div>
  );
}

function computePosition(position: string) {
  switch (position) {
    case "top":
      return { top: "-10%", left: "50%", transform: "translateX(-50%)" };
    case "right":
      return { top: "50%", right: "-12%", transform: "translateY(-50%)" };
    case "bottom":
      return { bottom: "-10%", left: "50%", transform: "translateX(-50%)" };
    case "left":
      return { top: "50%", left: "-12%", transform: "translateY(-50%)" };
    default:
      return {};
  }
}
