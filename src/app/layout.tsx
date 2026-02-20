import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SocialDock } from "@/components/social-dock";
import { SiteHeader } from "@/components/site-header";
import CookieBanner from "@/components/cookie-banner";
import "./globals.css";

const SITE_URL = "https://enerzyz.com";

const primarySans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const codeMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Enerzyz | Autopilot for Energy Assets — AI-Powered Building & Facility Optimization",
    template: "%s | Enerzyz",
  },
  description:
    "Enerzyz is the AI operating system for energy assets. Predictive optimization for HVAC, chillers, generators, BESS, pumps & more — cutting energy costs 30%+, extending asset life 25%+, and delivering autonomous facility management for commercial buildings, data centers, hospitals, and industrial plants.",
  keywords: [
    "energy asset management",
    "AI building optimization",
    "predictive maintenance HVAC",
    "smart building platform",
    "facility management AI",
    "chiller optimization",
    "energy efficiency software",
    "building automation AI",
    "SCADA AI integration",
    "BMS optimization",
    "autonomous facility management",
    "commercial building energy management",
    "data center cooling optimization",
    "industrial energy optimization",
    "Enerzyz",
    "energy asset autopilot",
    "predictive energy analytics",
    "net zero building technology",
    "ESG compliance automation",
    "equipment lifecycle management",
  ],
  authors: [{ name: "Enerzyz", url: SITE_URL }],
  creator: "Enerzyz",
  publisher: "Enerzyz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Enerzyz",
    title: "Enerzyz | Autopilot for Energy Assets",
    description:
      "AI operating system that makes energy assets self-optimizing. Cut energy costs 30%+, extend equipment life 25%+, and hit net-zero targets — autonomously.",
    images: [
      {
        url: "/enerzyz-logo-long.png",
        width: 1200,
        height: 630,
        alt: "Enerzyz — Autopilot for energy assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enerzyz | Autopilot for Energy Assets",
    description:
      "AI operating system that makes energy assets self-optimizing. Cut energy costs 30%+, extend equipment life 25%+, and hit net-zero targets.",
    images: ["/enerzyz-logo-long.png"],
    creator: "@enerzyz",
    site: "@enerzyz",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/enerzyz-logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "Technology",
};

/* JSON-LD structured data for Organization + WebSite */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Enerzyz",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/enerzyz-logo-long.png`,
      },
      description:
        "AI operating system for energy assets — predictive optimization for HVAC, chillers, generators, BESS, pumps, and more.",
      sameAs: [
        "https://www.linkedin.com/company/enerzyz",
        "https://www.youtube.com/@Enerzyz",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "team@enerzyz.com",
        contactType: "sales",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Enerzyz",
      publisher: { "@id": `${SITE_URL}/#organization` },
      description:
        "Autopilot for energy assets — AI-driven optimization for commercial buildings, data centers, hospitals, and industrial facilities.",
    },
    {
      "@type": "SoftwareApplication",
      name: "Enerzyz OS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud",
      url: "https://os.enerzyz.com",
      description:
        "AI-powered energy asset management platform with predictive maintenance, autonomous optimization, and real-time facility control.",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        price: "0",
        description: "Book a demo for custom pricing",
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primarySans.variable} ${codeMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) — GA4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7D7JZWE943"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7D7JZWE943');
            gtag('config', 'AW-17791793912');
          `}
        </Script>
        {/* Apollo website visitor tracking */}
        <Script id="apollo-tracker" strategy="afterInteractive">
          {`
            function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
            o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n;o.async=!0;o.defer=!0;
            o.onload=function(){window.trackingFunctions.onLoad({appId:"69673b00ee8147001d2af160"})};
            document.head.appendChild(o)}initApollo();
          `}
        </Script>
        <SiteHeader />
        {children}
        <CookieBanner />
        <SocialDock />
      </body>
    </html>
  );
}
