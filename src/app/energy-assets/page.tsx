import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Energy Assets — Enerzyz",
  description: "What energy assets are and why managing them matters for operations and sustainability.",
};

export default function EnergyAssets() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">

      <section className="space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">What are energy assets?</h2>
        <p>
          Anything that transforms energy is an energy asset. Think about Engines, Motors, Pumps, Batteries, Solar Panels, Transformers etc. Energy assets are the things that made the industrial revolution possible. Otherwise, we would still be farming crops and animals. Every kind of economic activity involves them still we do not know how to control and manage them in the most optimal way.
        </p>

        <p>
          Every building or facility has them. Globally 16T USD per year is used for operating and managing these energy assets. Sadly, almost half of it or around 8T is lost annually for inefficient energy asset management. The reason is we actually do not know how these assets behave over time across various conditions and health spectrums. We could not make sense of all these data points until recently.
        </p>

        <p>
          Enerzyz ingests data from all these various energy assets in a facility to provide unseen insights and act on it autonomously. Facilities can now save up to 40% of their operations and maintenance cost through Enerzyz.
        </p>

        <h3 className="text-lg font-semibold">Our deeper mission?</h3>
        <p>
          We are making integrated intelligence seamless for the upcoming AGI.
        </p>
      </section>
    </main>
  );
}
