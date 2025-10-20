import { CTASection } from "@/components/cta-section";
import { CodeShowcase } from "@/components/code-showcase";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";

function PartnerStrip() {
  const partners = ["gridforge", "lumio", "corewind", "synapse ai", "northvolt"];
  return (
    <section
      id="learn-more"
      className="mx-auto mt-24 max-w-6xl px-6 text-white/40 lg:px-8"
    >
      <div className="flex items-center justify-between gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-4 text-xs uppercase tracking-[0.3em] sm:text-sm">
        {partners.map((partner) => (
          <span key={partner} className="whitespace-nowrap">
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative flex flex-col pb-32">
      <Hero />
      <PartnerStrip />
      <FeatureGrid />
      <CodeShowcase />
      <CTASection />
      <footer className="mx-auto mt-28 w-full max-w-6xl px-6 text-white/50 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 text-sm text-center uppercase tracking-[0.28em]">
          Enerzyz © {new Date().getFullYear()} · Built for the zero-carbon grid
        </div>
      </footer>
    </main>
  );
}
