import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative mx-auto mt-32 max-w-5xl overflow-hidden rounded-[48px] border border-white/10 bg-white/[0.05] px-6 py-16 text-center shadow-[0_40px_120px_rgba(3,8,20,0.55)] sm:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 via-blue-500/12 to-indigo-500/20 opacity-70" />
      <div className="relative space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-sky-200/80">
          Reach global maxima with enerzyz
        </span>
        <h2 className="text-4xl font-semibold text-white md:text-5xl">
          Integrate us into your microgrid within weeks, not quarters.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/70">
          Deploy Enerzyz as the brain layer for your existing control stack —
          save from day one while the OS learns your operations.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/book-a-demo"
            className="relative overflow-hidden rounded-full bg-sky-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-sky-400"
          >
            Request a Demo
          </Link>
          <a
            href="mailto:team@enerzyz.com"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Talk to an Engineer
          </a>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-3">
          {[
            { label: "Energy cost reduction", value: "30%+" },
            { label: "Asset life extension", value: "25%+" },
            { label: "Sites orchestrated", value: "120+" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass-panel rounded-3xl px-4 py-6 text-center"
            >
              <div className="text-2xl font-semibold text-white">{item.value}</div>
              <div className="mt-2 text-sm text-white/60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
