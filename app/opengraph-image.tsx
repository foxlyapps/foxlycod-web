import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Foxly COD + Partial & Prepaid for Shopify";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg,#fff8f3 0%,#ffe4d3 100%)",
          fontFamily: "sans-serif",
          color: "#140b07",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg,#ff4d12,#ff8a00)" }} />
          Foxly · COD + Partial &amp; Prepaid
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18, fontSize: 84, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
            <span>Turn cash-on-delivery into</span>
            <span style={{ color: "#ff4d12" }}>paid orders.</span>
          </div>
          <div style={{ fontSize: 30, color: "#6b5a52" }}>Prepaid · Partial · COD in one branded Shopify form. OTP, pixels, upsells. 0% commission.</div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, fontWeight: 600 }}>
          <span style={{ background: "#140b07", color: "white", padding: "10px 22px", borderRadius: 999 }}>5.0 rated on Shopify App Store</span>
          <span style={{ background: "white", padding: "10px 22px", borderRadius: 999 }}>Free to install</span>
        </div>
      </div>
    ),
    size,
  );
}
