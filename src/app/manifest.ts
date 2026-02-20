import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Enerzyz — Autopilot for Energy Assets",
    short_name: "Enerzyz",
    description:
      "AI operating system for energy assets. Predictive optimization for HVAC, chillers, generators, BESS, pumps & more.",
    start_url: "/",
    display: "standalone",
    background_color: "#040513",
    theme_color: "#5eaaff",
    icons: [
      {
        src: "/enerzyz-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
