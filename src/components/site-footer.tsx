import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "X",
    href: "https://x.com/enerzyz",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.6} stroke="currentColor" className="h-4 w-4">
        <path d="M4 4l16 16" />
        <path d="M20 4L4 20" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/enerzyz",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0zM8 8h4.8v2.17h.07c.67-1.27 2.32-2.6 4.78-2.6C21.4 7.57 24 10 24 14.42V23H19v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V23H8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Enerzyz",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
];

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
              AI operating system for energy assets.
            </p>
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
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-sky-400/40 hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <span className="text-center uppercase tracking-[0.2em]">
              On the pursuit to become a Kardashev Type 1 Civilization
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
