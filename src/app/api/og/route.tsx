import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Enerzyz";
  const subtitle =
    searchParams.get("subtitle") ||
    "AI operating system for energy assets.";

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #03080f 0%, #060d1a 55%, #0a1628 100%)",
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
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            width: 800,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)",
            transform: "translateX(-50%)",
          }}
        />

        {/* Top: brand pill */}
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
            enerzyz.com
          </div>
        </div>

        {/* Middle: page title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: title.length > 30 ? 58 : 72,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.4,
              maxWidth: 720,
            }}
          >
            {subtitle}
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
          <div style={{ display: "flex", gap: 52 }}>
            {(
              [
                ["30%+", "Energy Cost Reduction"],
                ["25%+", "Longer Asset Life"],
                ["150+", "Sites Deployed"],
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
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
