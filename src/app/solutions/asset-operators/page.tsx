import type { Metadata } from "next";
import { AssetOperatorsPage } from "./asset-operators-page";

const SITE_URL = "https://enerzyz.com";
const PAGE_URL = `${SITE_URL}/solutions/asset-operators`;

export const metadata: Metadata = {
  title: "For Asset Operators & Contractors | AI Super-Engineer Tools",
  description:
    "Enerzyz transforms HVAC contractors, facility management companies, chiller specialists, electrical contractors, and energy service companies into AI-augmented super-engineers — with predictive diagnostics, agentic optimization, remote monitoring, and automated compliance reporting.",
  keywords: [
    "HVAC contractor AI tools",
    "facility management software",
    "predictive maintenance contractor",
    "remote diagnostics HVAC",
    "chiller service optimization",
    "field service management AI",
    "building automation contractor",
    "CMMS integration AI",
    "truck roll reduction",
    "first-time fix rate improvement",
    "service contract optimization",
    "automated service reporting",
    "BACnet Modbus integration",
    "agentic building optimization",
    "super engineer platform",
    "condition based maintenance",
    "fault detection diagnostics AFDD",
    "technician dispatch optimization",
    "energy service company ESCO",
    "building operations AI",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "For Asset Operators & Contractors | Enerzyz",
    description:
      "60% fewer truck rolls, 3× faster fault resolution, 85%+ first-time fix rate. AI co-pilot for every technician, every job.",
    siteName: "Enerzyz",
    images: [{ url: "/enerzyz-logo-long.png", width: 1200, height: 630, alt: "Enerzyz for Asset Operators" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Asset Operators | Enerzyz",
    description: "Every technician becomes a super-engineer with predictive, agentic AI tools.",
    images: ["/enerzyz-logo-long.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enerzyz for Asset Operators",
  description:
    "AI-powered platform for HVAC contractors, facility managers, and service companies — remote diagnostics, predictive maintenance, agentic optimization, and automated reporting.",
  provider: { "@type": "Organization", name: "Enerzyz", url: SITE_URL },
  url: PAGE_URL,
  serviceType: "Field Service AI Platform",
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "HVAC Contractors, Facility Management Companies, Electrical Contractors, Energy Service Companies, Building Automation Integrators",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AssetOperatorsPage />
    </>
  );
}
