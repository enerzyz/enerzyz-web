import type { Metadata } from "next";
import CaseStudiesPage from "./case-studies-page";

const SITE_URL = "https://enerzyz.com";
const PAGE_URL = `${SITE_URL}/case-studies`;

export const metadata: Metadata = {
  title: "Case Studies | Real-World Results from Enerzyz",
  description:
    "See measurable results from Enerzyz deployments: 25–30% energy savings, significant cost reduction, and near-zero operational disruptions — across hospitality and institutional buildings.",
  keywords: [
    "Enerzyz case study",
    "building energy savings results",
    "HVAC optimization results",
    "smart building ROI",
    "AI energy management results",
    "predictive maintenance outcomes",
    "energy cost reduction case study",
    "carbon emissions reduction building",
    "autonomous building optimization",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Case Studies | Enerzyz",
    description:
      "25–30% energy savings, real cost reductions, and zero operational disruptions. See what Enerzyz delivers in the field.",
    siteName: "Enerzyz",
    images: [{ url: "https://enerzyz.com/api/og?title=Case+Studies&subtitle=Real-world+results+from+Enerzyz+deployments+across+buildings.", width: 1200, height: 630, alt: "Enerzyz Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Enerzyz",
    description: "Real-world results from Enerzyz deployments across buildings in Southeast Asia.",
    images: ["https://enerzyz.com/api/og?title=Case+Studies&subtitle=Real-world+results+from+Enerzyz+deployments+across+buildings."],
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}
