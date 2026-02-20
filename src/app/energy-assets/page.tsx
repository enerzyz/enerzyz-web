import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Are Energy Assets? — Understanding HVAC, Chillers, Generators & More | Enerzyz",
  description:
    "Energy assets are the engines, motors, pumps, batteries, chillers, and generators that power modern civilization. Learn how AI-driven management from Enerzyz can cut $8 trillion in global energy waste.",
  keywords: [
    "energy assets",
    "what are energy assets",
    "HVAC systems",
    "chiller systems",
    "building energy systems",
    "energy asset management",
    "facility energy optimization",
    "electromechanical assets",
  ],
  alternates: { canonical: "https://enerzyz.com/energy-assets" },
  openGraph: {
    type: "article",
    url: "https://enerzyz.com/energy-assets",
    title: "What Are Energy Assets? | Enerzyz",
    description: "The $16 trillion global energy asset problem — and how AI is solving it.",
    siteName: "Enerzyz",
  },
};

export default function EnergyAssets() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-slate-100">

      <section className="space-y-6 text-white/80">
        <h2 className="text-2xl font-semibold">What are energy assets?</h2>
        <p>
          Energy assets are anything that transforms energy: engines, motors, pumps, batteries, solar panels, inverters, transformers, and countless others. These are the building blocks of modern civilization. Without them, we’d still be relying on manual labor and animal power. Every sector of the economy depends on these assets, yet we still struggle to operate them efficiently.
        </p>

        <p>
          Every building, plant, and facility is packed with energy assets. Think of the HVAC (heating and cooling system) of a building. It consists of several energy assets. Globally, more than $16 trillion is spent every year to operate and maintain energy assets and nearly $8 trillion of that is wasted due to inefficiencies. Why? Because facilities rarely have a clear understanding of how their assets behave over time, under varying conditions, or at different stages of health. They’re flooded with data but lack the intelligence to interpret and act on it.
        </p>

        <p>
          Enerzyz changes that.
        </p>

        <p>
          Enerzyz connects to every energy asset in a facility, ingesting and analyzing their data uncovering hidden patterns and inefficiencies to act on those insights autonomously, enabling facilities to cut up to 40% of their operations and maintenance costs—without compromising performance.
        </p>

        <h3 className="text-lg font-semibold">Our deeper mission?</h3>
        <p>
          We’re building the foundation for seamless, integrated machine intelligence preparing the world’s physical infrastructure for the era of AGI.
        </p>
      </section>
    </main>
  );
}
