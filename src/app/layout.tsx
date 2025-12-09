import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SocialDock } from "@/components/social-dock";
import { SiteHeader } from "@/components/site-header";
import CookieBanner from "@/components/cookie-banner";
import "./globals.css";

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
  title: "Enerzyz | Autopilot for energy assets",
  description:
    "Enerzyz synchronizes distributed energy assets with predictive automation, delivering resilient and carbon-aware operations in real time.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/enerzyz-logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primarySans.variable} ${codeMono.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17791793912"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17791793912');
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
