"use client";

import Link from "next/link";
import type { ReactElement, SVGProps } from "react";

type Social = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

const socials: Social[] = [
  {
    name: "X",
    href: "https://x.com/enerzyz",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden fill="none" strokeWidth={1.6} stroke="currentColor" {...props}>
        <path d="M4 4l16 16" />
        <path d="M20 4L4 20" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/enerzyz",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...props}>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v15H0zM8 8h4.8v2.17h.07c.67-1.27 2.32-2.6 4.78-2.6C21.4 7.57 24 10 24 14.42V23H19v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.96V23H8z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Enerzyz",
    icon: (props) => (
      <svg viewBox="0 0 24 24" aria-hidden fill="currentColor" {...props}>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
];

export function SocialDock() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 text-white">
      <span className="rounded-full bg-white/8 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/60 backdrop-blur">
        Connect
      </span>
      <div className="flex flex-col gap-2 rounded-full border border-white/15 bg-white/5 p-3 backdrop-blur-xl shadow-[0_20px_50px_rgba(2,6,23,0.45)]">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="group relative grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-slate-950/40 text-white/70 transition hover:border-sky-400/60 hover:text-white"
          >
            <span className="pointer-events-none absolute inset-0 rounded-full bg-sky-400/10 opacity-0 transition group-hover:opacity-100" />
            {social.icon({ className: "h-4 w-4" })}
          </Link>
        ))}
      </div>
    </div>
  );
}
