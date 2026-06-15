import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { CodeShowcase } from "@/components/code-showcase";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { TrustBadges } from "@/components/trust-badges";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";
import Affiliations from "@/components/affiliations";

export const metadata: Metadata = {
  title: "Enerzyz | Autopilot for Energy Assets — AI-Powered Building & Facility Optimization",
  description:
    "Enerzyz is the AI operating system for energy assets. Predictive optimization for HVAC, chillers, generators, BESS, pumps & more — cutting energy costs 30%+, extending asset life 25%+, and delivering autonomous facility management for commercial buildings, data centers, hospitals, and industrial plants.",
  alternates: { canonical: "https://enerzyz.com" },
  openGraph: {
    type: "website",
    url: "https://enerzyz.com",
    title: "Enerzyz | Autopilot for Energy Assets",
    description:
      "AI operating system that makes energy assets self-optimizing. Cut energy costs 30%+, extend equipment life 25%+, and hit net-zero targets — autonomously.",
    siteName: "Enerzyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enerzyz | Autopilot for Energy Assets",
    description: "AI operating system that makes energy assets self-optimizing.",
  },
};

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
    <main className="relative flex flex-col pb-12">
      <Hero />
      <Affiliations />
      <PartnerStrip />
      <FeatureGrid />
      <HowItWorks />
      <CodeShowcase />
      <Testimonials />
      <TrustBadges />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
