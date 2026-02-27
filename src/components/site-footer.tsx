import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: "Enerzyz OS", href: "https://os.enerzyz.com", external: true },
  { label: "For Asset Owners", href: "/solutions/asset-owners" },
  { label: "For Asset Operators", href: "/solutions/asset-operators" },
  { label: "For Manufacturers", href: "/solutions/manufacturers" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Book a Demo", href: "/book-a-demo" },
  { label: "Partner With Us", href: "mailto:ai@enerzyz.com?subject=Partnership%20Proposal" },
  { label: "Contact Engineering", href: "mailto:team@enerzyz.com" },
  { label: "SLA & Support", href: "/sla-support" },
];

const resourceLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Energy Assets", href: "/energy-assets" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Acceptable Use", href: "/acceptable-use-policy" },
  { label: "Data Processing Addendum", href: "/data-processing-addendum" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-32 w-full max-w-6xl px-6 pb-12 lg:px-8">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 md:px-12">
        {/* Top row: logo + columns */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_1fr]">
          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" aria-label="Enerzyz home" className="inline-block">
              <Image
                src="/enerzyz-logo-long.png"
                alt="Enerzyz"
                width={180}
                height={40}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              AI operating system for energy assets. Predictive optimization for
              HVAC, chillers, generators, BESS, pumps &amp; more.
            </p>
            <div className="text-xs text-white/40">
              <p>team@enerzyz.com</p>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product links">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Platform
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("mailto:") ? (
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resource links">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
            <span>© {year} Enerzyz. All rights reserved.</span>
            <span className="text-center uppercase tracking-[0.2em]">
              On the pursuit to become a Kardashev Type 1 Civilization
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
