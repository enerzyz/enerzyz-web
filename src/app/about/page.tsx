import type { Metadata } from "next";
import AboutPage from "./about-page";

export const metadata: Metadata = {
  title: "About Enerzyz | The Team Behind Autonomous Energy Asset Management",
  description:
    "Enerzyz builds the AI operating system for energy assets. Learn about our mission to make every powered facility on Earth self-optimizing — backed by Stanford, NVIDIA, World Bank, ASHRAE, and Antler.",
  keywords: [
    "about Enerzyz",
    "energy AI company",
    "smart building startup",
    "autonomous facility management company",
    "energy asset optimization team",
    "building automation AI startup",
    "Enerzyz founders",
  ],
  alternates: { canonical: "https://enerzyz.com/about" },
  openGraph: {
    type: "website",
    url: "https://enerzyz.com/about",
    title: "About Enerzyz",
    description:
      "The AI operating system for energy assets. Learn about our mission, affiliations, and the team making facilities self-optimizing.",
    siteName: "Enerzyz",
    images: [{ url: "/enerzyz-logo-long.png", width: 1200, height: 630, alt: "About Enerzyz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Enerzyz",
    description: "The AI operating system for energy assets.",
    images: ["/enerzyz-logo-long.png"],
  },
};

export default function Page() {
  return <AboutPage />;
}
