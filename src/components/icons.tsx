import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ────────────────────────────────────────────
   Minimal, geometric line icons.
   Stroke-based, consistent 24×24 viewBox,
   1.5px stroke weight, round caps/joins.
   ──────────────────────────────────────────── */

const defaults: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function wrap(paths: ReactNode, props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      {paths}
    </svg>
  );
}

/* ─── General / Shared ─── */

/** Flame — energy / cost */
export function FlameIcon(props: IconProps) {
  return wrap(
    <path d="M12 2c.5 3.5-1.5 6-1.5 6s2 1 2.5 4c.4 2.3-1 4.5-1 4.5S15 15 15 12c0-2.5-3-4-3-10Z M9 16c0 1.7 1.3 3 3 3s3-1.3 3-3c0-2-3-4-3-4s-3 2-3 4Z" />,
    props,
  );
}

/** Gauge / meter — performance */
export function GaugeIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z" />
      <path d="M12 12l3.5-3.5" />
      <circle cx="12" cy="12" r="1.5" />
    </>,
    props,
  );
}

/** Trending down — declining metrics */
export function TrendDownIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M3 7l6 6 4-4 8 8" />
      <path d="M17 17h4v-4" />
    </>,
    props,
  );
}

/** Grid / network — siloed systems */
export function GridIcon(props: IconProps) {
  return wrap(
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>,
    props,
  );
}

/** Clipboard / checklist — compliance */
export function ClipboardIcon(props: IconProps) {
  return wrap(
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v2h6V3" />
      <path d="M9 11h6M9 15h4" />
    </>,
    props,
  );
}

/** Building — multi-site / portfolio */
export function BuildingIcon(props: IconProps) {
  return wrap(
    <>
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M9 22V18h6v4" />
      <path d="M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2" />
    </>,
    props,
  );
}

/** Truck — dispatch / logistics */
export function TruckIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 4v4h-7V8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </>,
    props,
  );
}

/** Search / magnifier — diagnosis */
export function SearchIcon(props: IconProps) {
  return wrap(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </>,
    props,
  );
}

/** Bar chart — reporting */
export function BarChartIcon(props: IconProps) {
  return wrap(
    <path d="M4 20h16M6 16v4M10 12v8M14 8v12M18 4v16" />,
    props,
  );
}

/** User / person — labor */
export function UserIcon(props: IconProps) {
  return wrap(
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </>,
    props,
  );
}

/** Wallet / margin — financial */
export function WalletIcon(props: IconProps) {
  return wrap(
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
      <circle cx="17" cy="15" r="1" />
    </>,
    props,
  );
}

/** Link / chain — fragmented systems */
export function LinkChainIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>,
    props,
  );
}

/** Package / box — product / shipment */
export function PackageIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5Z" />
      <path d="M12 22V12" />
      <path d="M3 7l9 5 9-5" />
    </>,
    props,
  );
}

/** Wrench — maintenance / service */
export function WrenchIcon(props: IconProps) {
  return wrap(
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94L6.7 20.2a2 2 0 1 1-2.83-2.83l6.83-6.83a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
    props,
  );
}

/** Eye off — no visibility */
export function EyeOffIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M2 2l20 20" />
      <path d="M6.71 6.71C3.83 8.55 2 12 2 12s4 7 10 7c1.76 0 3.36-.5 4.71-1.29" />
      <path d="M12 5c6 0 10 7 10 7s-1.08 2.04-3.05 3.95" />
    </>,
    props,
  );
}

/** Tag / price tag — commoditization */
export function TagIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M12 2l9 4.5V14l-9 8-9-8V6.5L12 2Z" />
      <circle cx="12" cy="10" r="2" />
    </>,
    props,
  );
}

/** Globe — regulatory / global */
export function GlobeIcon(props: IconProps) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </>,
    props,
  );
}

/** Handshake / partnership — channel partners */
export function HandshakeIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M11 17l-2 2-4-4 5-5 3 3" />
      <path d="M13 7l2-2 4 4-5 5-3-3" />
      <path d="M3 11l4-4M17 13l4-4" />
    </>,
    props,
  );
}

/** Cog / gear — operations */
export function CogIcon(props: IconProps) {
  return wrap(
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </>,
    props,
  );
}

/** Close / X */
export function CloseIcon(props: IconProps) {
  return wrap(
    <>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </>,
    props,
  );
}
