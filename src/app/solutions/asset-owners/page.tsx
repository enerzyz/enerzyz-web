import type { Metadata } from "next";
import { AssetOwnersPage } from "./asset-owners-page";

const SITE_URL = "https://enerzyz.com";
const PAGE_URL = `${SITE_URL}/solutions/asset-owners`;

export const metadata: Metadata = {
  title: "For Asset Owners — Maximize ROI on Energy Assets | Enerzyz",
  description:
    "Enerzyz helps commercial buildings, data centers, hospitals, hotels, retail chains, and industrial facilities extend asset life 25%+, cut energy waste 30%+, reduce unplanned outages 40%, and increase property valuations through predictive AI-driven asset management.",
  keywords: [
    "energy asset owner",
    "commercial building energy management",
    "data center cooling optimization",
    "hospital energy management",
    "hotel energy optimization",
    "facility energy cost reduction",
    "HVAC optimization AI",
    "chiller optimization software",
    "building energy analytics",
    "net operating income improvement",
    "asset life extension",
    "predictive maintenance buildings",
    "ESG compliance automation",
    "LEED energy reporting",
    "ENERGY STAR benchmarking",
    "building portfolio management",
    "smart building AI platform",
    "demand response automation",
    "digital twin building",
    "BMS SCADA integration AI",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "For Asset Owners — Maximize ROI on Energy Assets | Enerzyz",
    description:
      "Cut energy costs 30%+, extend equipment life 25%+, and lift Net Operating Income from day one with autonomous AI optimization for every energy asset you own.",
    siteName: "Enerzyz",
    images: [{ url: "/enerzyz-logo-long.png", width: 1200, height: 630, alt: "Enerzyz for Asset Owners" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Asset Owners | Enerzyz",
    description: "Autonomous AI that turns energy assets into high-performing, appreciating investments.",
    images: ["/enerzyz-logo-long.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enerzyz for Asset Owners",
  description:
    "AI-driven energy asset management for commercial buildings, data centers, hospitals, hotels, and industrial facilities — predictive optimization, asset longevity, and ESG compliance automation.",
  provider: { "@type": "Organization", name: "Enerzyz", url: SITE_URL },
  url: PAGE_URL,
  serviceType: "Energy Asset Management Platform",
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "Facility Owners, Property Managers, Building Operations Leaders, Real Estate Investors",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssetOwnersPage />
    </>
  );
}
