"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const solutions = [
  {
    label: "For Asset Owners",
    href: "/solutions/asset-owners",
    description: "Maximize ROI, extend asset life, and hit net-zero targets",
  },
  {
    label: "For Asset Operators",
    href: "/solutions/asset-operators",
    description: "Become a super-engineer with predictive, agentic tools",
  },
  {
    label: "For Manufacturers",
    href: "/solutions/manufacturers",
    description: "Ship smarter products and unlock recurring revenue",
  },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-slate-950/80 shadow-[0_4px_30px_rgba(2,6,23,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:p-6">
        {/* Left: Logo + tagline */}
        <div className="flex flex-col gap-1">
          <Link href="/" className="inline-flex items-center" aria-label="Enerzyz home">
            <Image
              src="/enerzyz-logo-long.png"
              alt="Enerzyz"
              width={220}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <span className="text-[7px] font-semibold uppercase tracking-[0.4em] text-white/60">
            AutoPilot for Energy Assets
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex" ref={menuRef}>
          <div className="relative">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
              aria-expanded={menuOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M3 4.5L6 7.5L9 4.5" />
              </svg>
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-[0_24px_64px_rgba(2,6,23,0.7)] backdrop-blur-xl"
                >
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block px-5 py-4 transition hover:bg-white/[0.06]"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 group-hover:text-sky-300">
                        {item.label}
                      </div>
                      <div className="mt-1 text-[10px] leading-relaxed text-white/50 group-hover:text-white/70">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/case-studies"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
          >
            Case Studies
          </Link>

          <Link
            href="/about"
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/book-a-demo"
            className="rounded-full border border-white/20 bg-white/[0.06] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-5 bg-white/80 transition-transform duration-200 ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/80 transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/80 transition-transform duration-200 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="px-6 py-4">
              <div className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/40">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-white/80 transition hover:text-sky-300"
                >
                  {item.label}
                  <span className="mt-0.5 block text-[10px] text-white/40">{item.description}</span>
                </Link>
              ))}
              <Link
                href="/case-studies"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block py-3 text-sm font-medium text-white/80 transition hover:text-sky-300"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block py-3 text-sm font-medium text-white/80 transition hover:text-sky-300"
              >
                About
              </Link>
              <Link
                href="/book-a-demo"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-sky-400/40"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
