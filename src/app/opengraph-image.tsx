import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Enerzyz — AI Operating System for Energy Assets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #03080f 0%, #060d1a 55%, #0a1628 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            width: 800,
            height: 400,
            background: "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Top: badge */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              background: "rgba(56,189,248,0.1)",
              border: "1px solid rgba(56,189,248,0.25)",
              borderRadius: 999,
              padding: "10px 24px",
              color: "#7dd3fc",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            AI-Powered Facility Intelligence
          </div>
        </div>

        {/* Middle: brand + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Enerzyz
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.4,
              maxWidth: 680,
            }}
          >
            AI operating system for energy assets.
          </div>
        </div>

        {/* Bottom: stats + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* Stats */}
          <div style={{ display: "flex", gap: 56 }}>
            {(
              [
                ["30%+", "Energy Cost Reduction"],
                ["25%+", "Longer Asset Life"],
                ["95%+", "Model Accuracy"],
              ] as const
            ).map(([value, label]) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <span
                  style={{
                    fontSize: 34,
                    fontWeight: 700,
                    color: "#38bdf8",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 12,
            }}
          >
            <div
              style={{
                background: "#0ea5e9",
                borderRadius: 999,
                padding: "16px 36px",
                color: "#020d1a",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              Request a Demo →
            </div>
            <div
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.1em",
              }}
            >
              enerzyz.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
