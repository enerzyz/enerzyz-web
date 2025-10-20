import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
  title: "Enerzyz | Intelligent Energy Orchestration",
  description:
    "Enerzyz synchronizes distributed energy assets with predictive automation, delivering resilient and carbon-aware operations in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primarySans.variable} ${codeMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
