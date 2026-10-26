import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { palette } from "@/config/theme";

export const alt = "Brahim — Junior Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function renderOgImage() {
  const website = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          backgroundColor: palette.background,
          color: palette.foreground,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                width: "68px",
                height: "68px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "18px",
                backgroundColor: palette.foreground,
                color: palette.background,
                fontFamily: "serif",
                fontSize: "38px",
                fontWeight: 700,
              }}
            >
              B
            </div>
            <div style={{ display: "flex", fontSize: "30px", fontWeight: 600 }}>
              Brahim
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "20px",
              color: palette.secondary,
            }}
          >
            <span
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                backgroundColor: palette.primary,
              }}
            />
            Mauritania
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: "920px",
              fontFamily: "serif",
              fontSize: "76px",
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: "-2px",
            }}
          >
            Junior full stack developer.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: palette.primary,
            }}
          >
            Web · Mobile · Backend
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "28px",
            borderTop: `2px solid ${palette.accent}`,
            fontSize: "20px",
            color: palette.secondary,
          }}
        >
          <div style={{ display: "flex" }}>
            SupNum · Information Systems Development
          </div>
          <div style={{ display: "flex" }}>{website}</div>
        </div>
      </div>
    ),
    size,
  );
}
