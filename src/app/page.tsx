import { CTASection } from "@/components/cta-section";
import { CodeShowcase } from "@/components/code-showcase";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";

function PartnerStrip() {
  const partners = ["BMS", "SCADA", "PLC", "IoT", "EMS"];
  return (
    <section
      id="learn-more"
      className="mx-auto mt-24 max-w-6xl px-6 text-white/40 lg:px-8"
    >
      <div className="mb-4 text-center text-xs uppercase tracking-[0.28em] text-white/60 sm:text-sm">
        Working as the brain layer for them all
      </div>
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
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 text-sm text-center">
          <div className="mb-3 uppercase tracking-[0.28em] text-white/60">Enerzyz © {new Date().getFullYear()}</div>
          <div className="mt-2 uppercase tracking-[0.28em] text-white/50">On the pursuit to become a Kardashev Type 1 Civilization</div>
          <div className="mt-4 flex flex-col items-center gap-2 text-xs text-white/60 md:flex-row md:justify-center md:gap-6">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
            <a href="/acceptable-use-policy" className="hover:text-white">Acceptable Use</a>
            <a href="/data-processing-addendum" className="hover:text-white">Data Processing Addendum</a>
            <a href="/sla-support" className="hover:text-white">SLA &amp; Support</a>
            <a href="/cookie-policy" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
