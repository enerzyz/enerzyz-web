"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex flex-col items-start gap-2 p-6 transition-opacity duration-300 lg:p-8 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden={isHidden}
    >
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
        Autopilot for energy assets
      </span>
    </header>
  );
}
