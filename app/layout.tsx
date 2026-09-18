import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/cta";
import { SiteJsonLd } from "@/components/seo";
import { site } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Foxly: Shopify COD, Partial & Prepaid Order Form",
    template: "%s | Foxly COD",
  },
  description:
    "Branded 1-click Shopify order form with Full Prepaid, Partial Payment and Cash on Delivery. OTP, fraud blocking, upsells, multi-pixel tracking. 0% commission, free to install.",
  keywords: ["Shopify COD form", "partial payment Shopify", "prepaid discount COD", "COD OTP verification", "cash on delivery app Shopify", "reduce RTO"],
  applicationName: "Foxly",
  authors: [{ name: site.developer }],
  creator: site.developer,
  publisher: site.developer,
  category: "ecommerce",
  formatDetection: { telephone: false },
  openGraph: { type: "website", siteName: "Foxly", locale: "en_US", url: "/" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = { themeColor: "#ff4d12" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col pb-20 md:pb-0">
        <SiteJsonLd />
        <MotionConfig reducedMotion="user">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyCta />
        </MotionConfig>
      </body>
    </html>
  );
}
