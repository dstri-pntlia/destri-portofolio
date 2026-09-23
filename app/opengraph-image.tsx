import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 9999,
              border: "2px solid rgba(124,58,237,0.45)",
              backgroundColor: "rgba(124,58,237,0.12)",
              color: "#7C3AED",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            {siteConfig.avatarInitials}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#7C3AED" }}>
            {siteConfig.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 700,
            color: "#fafafa",
            marginTop: 36,
            letterSpacing: -2,
          }}
        >
          {siteConfig.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 980,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
