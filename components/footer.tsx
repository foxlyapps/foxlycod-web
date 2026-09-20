"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "./ui";
import { site } from "@/lib/site";

const cols = [
  {
    h: "Product",
    l: [
      ["Features", "/features"],
      ["Pricing", "/pricing"],
      ["Compare", "/compare"],
      ["COD Calculator", "/calculator"],
    ],
  },
  {
    h: "Solutions",
    l: [
      ["Reduce fake COD orders", "/features#fraud"],
      ["Convert COD to prepaid", "/features#payments"],
      ["Increase AOV with upsells", "/features#upsells"],
      ["Track every pixel", "/features#pixels"],
    ],
  },
  {
    h: "Company",
    l: [
      ["Book a free demo", "/book-demo"],
      ["Install on Shopify", site.install],
      ["Live demo store", site.demo],
      ["Reviews", site.reviews],
      ["Support", `mailto:${site.support}`],
      ["Privacy Policy", "/privacy"],
    ],
  },
];

export function Footer() {
  const path = usePathname();

  // Ad landing page: strip every exit link, keep only legal + trust line.
  if (path === "/book-demo")
    return (
      <footer className="relative mt-16 border-t border-line bg-white/50 sm:mt-24">
        <Container className="flex flex-col items-center gap-3 py-8 text-center text-xs text-muted">
          <Logo />
          <p>
            © {new Date().getFullYear()} {site.developer}. Foxly is not affiliated with Shopify Inc. ·{" "}
            <Link href="/privacy" className="hover:text-fg">
              Privacy Policy
            </Link>
          </p>
          <p>
            Questions before booking?{" "}
            <a href={`mailto:${site.support}`} className="font-semibold text-brand hover:underline">
              {site.support}
            </a>
          </p>
        </Container>
      </footer>
    );

  return (
    <footer className="relative mt-20 border-t border-line bg-white/50 sm:mt-32">
      <Container className="grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            The order form that turns cash-on-delivery into paid orders. Prepaid, partial and COD in one branded form, 0%
            commission.
          </p>
          <a
            href={site.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium"
          >
            <span className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </span>
            5.0 on Shopify App Store
          </a>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h4 className="mb-4 text-sm font-semibold">{c.h}</h4>
            <ul className="flex flex-col text-sm text-muted">
              {c.l.map(([label, href]) =>
                href.startsWith("http") || href.startsWith("mailto") ? (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-fg">
                      {label}
                    </a>
                  </li>
                ) : (
                  <li key={label}>
                    <Link href={href} className="inline-block py-1.5 hover:text-fg">
                      {label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col items-start justify-between gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {site.developer}. Foxly is not affiliated with Shopify Inc.
        </p>
        <p>Works with Shopify Checkout · 8 languages · Built for D2C &amp; dropshipping</p>
      </Container>
    </footer>
  );
}
