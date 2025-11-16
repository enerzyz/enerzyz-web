"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "enerzyz:cookie-consent";

export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem(COOKIE_KEY);
      setAccepted(v === "1");
    } catch {
      setAccepted(false);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {}
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(96%,900px)] -translate-x-1/2 rounded-2xl bg-black/80 px-6 py-4 text-sm text-white backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <strong className="block font-semibold">We use cookies</strong>
          <div className="mt-1 text-sm text-white/80">
            We use cookies and similar technologies to improve site experience and analyze traffic. By
            continuing you consent to our use of cookies. See our <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 sm:mt-0">
          <button
            onClick={accept}
            className="rounded-full bg-sky-400/90 px-4 py-2 text-sm font-semibold text-slate-900"
          >
            Accept
          </button>
          <Link href="/cookie-policy" className="text-sm text-white/80 hover:underline">
            Manage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
