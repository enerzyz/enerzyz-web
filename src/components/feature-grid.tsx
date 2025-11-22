type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  metric?: string;
};

const features: Feature[] = [
  {
    eyebrow: "Autonomous orchestration",
    title: "Predictive control across every asset",
    description:
      "Blend asset health parameters, external parameters, and historical patterns to orchestrate powered assets realtime with human in the loop by default.",
    metric: "Always human in the loop",
  },
  {
    eyebrow: "Critical visibility",
    title: "Digital twin for the facility's assets",
    description:
      "Stream real-time telemetry into adaptable twins that simulate impact before commands ship downstream.",
    metric: "1h horizon simulations",
  },
  {
    eyebrow: "Compliance-by-design",
    title: "Explainable, auditable automations",
    description:
      "Every agentic action carries its justification trail. Exportable reports keep managers and auditors aligned.",
    metric: "Transparent decision logs",
  },
];

export function FeatureGrid() {
  return (
    <section className="relative mx-auto mt-32 max-w-6xl px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition duration-500 ease-out hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.06]"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-sky-200/90">
              {feature.eyebrow}
            </div>
            <h3 className="text-2xl font-semibold leading-tight text-white">
              {feature.title}
            </h3>
            <p className="text-base text-white/70">{feature.description}</p>
            {feature.metric && (
              <div className="pt-4 text-sm font-medium text-sky-200/90">
                {feature.metric}
              </div>
            )}
            <span className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-white/0 via-white/0 to-white/0 opacity-0 transition duration-500 group-hover:border-white/20 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
