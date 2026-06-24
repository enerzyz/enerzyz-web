import type { Metadata } from "next";
import { ManufacturersPage } from "./manufacturers-page";

const SITE_URL = "https://enerzyz.com";
const PAGE_URL = `${SITE_URL}/solutions/manufacturers`;

export const metadata: Metadata = {
  title: "For Asset Manufacturers — Ship Smarter Connected Products",
  description:
    "Enerzyz helps HVAC, inverter, BESS, compressor, generator, transformer and engine asset manufacturers embed predictive AI intelligence into products — reducing warranty costs 40%, unlocking 5-10× customer lifetime value, and creating recurring revenue from connected assets.",
  keywords: [
    "chiller manufacturer IoT",
    "HVAC OEM connected product",
    "equipment as a service",
    "predictive warranty management",
    "connected equipment platform",
    "OEM IoT platform",
    "BESS manufacturer analytics",
    "pump manufacturer AI",
    "generator remote monitoring",
    "inverter fleet management",
    "equipment lifecycle analytics",
    "warranty cost reduction OEM",
    "recurring revenue equipment",
    "field performance data OEM",
    "connected product strategy",
    "dealer performance management",
    "compliance automation manufacturer",
    "digital twin equipment",
    "smart product platform",
    "industrial IoT OEM",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "For Asset Manufacturers | Enerzyz",
    description:
      "Embed predictive AI into every unit you ship. 40% warranty cost reduction, 5-10× customer lifetime value, 100% field visibility.",
    siteName: "Enerzyz",
    images: [{ url: "/enerzyz-logo-long.png", width: 1200, height: 630, alt: "Enerzyz for Manufacturers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "For Manufacturers | Enerzyz",
    description: "Transform one-time hardware sales into recurring, data-driven revenue streams with embedded AI.",
    images: ["/enerzyz-logo-long.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enerzyz for Equipment Manufacturers",
  description:
    "Connected product platform for chiller, HVAC, inverter, BESS, pump, generator, and engine OEMs — predictive warranty engine, recurring revenue layer, R&D intelligence, and compliance automation.",
  provider: { "@type": "Organization", name: "Enerzyz", url: SITE_URL },
  url: PAGE_URL,
  serviceType: "Connected Product AI Platform",
  areaServed: "Worldwide",
  audience: {
    "@type": "Audience",
    audienceType: "Equipment Manufacturers, OEMs, Industrial Product Companies, HVAC Manufacturers, Energy Storage Manufacturers",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManufacturersPage />
    </>
  );
}
