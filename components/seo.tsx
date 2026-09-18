import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { plans, site } from "@/lib/site";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${site.url}/#org`,
            name: site.developer,
            url: site.url,
            logo: `${site.url}/icon.png`,
            email: site.support,
            address: { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "OR", postalCode: "751001", addressCountry: "IN" },
          },
          {
            "@type": "WebSite",
            "@id": `${site.url}/#website`,
            url: site.url,
            name: site.name,
            publisher: { "@id": `${site.url}/#org` },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

export function AppJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Foxly COD + Partial & Prepaid",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Shopify app",
        operatingSystem: "Web",
        url: site.url,
        installUrl: site.install,
        image: `${site.url}/opengraph-image`,
        screenshot: ["ai-design", "payments", "upsells", "otp", "pixels"].map((s) => `${site.url}/screens/${s}.webp`),
        description:
          "Branded 1-click Shopify order form offering Full Prepaid, Partial Payment and Cash on Delivery with OTP verification, fraud blocking, upsells and multi-pixel tracking.",
        featureList: ["Prepaid, partial & COD payments", "AI form designer", "OTP verification", "Fraud blocking", "Upsells & downsells", "Multi-pixel tracking"],
        inLanguage: ["en", "ar", "he", "es", "fr", "de", "it", "ru"],
        offers: plans.map((p) => ({
          "@type": "Offer",
          name: `${p.name} plan`,
          price: p.monthly.toFixed(2),
          priceCurrency: "USD",
          url: site.install,
          ...(p.monthly > 0 && { priceSpecification: { "@type": "UnitPriceSpecification", price: p.monthly.toFixed(2), priceCurrency: "USD", billingDuration: "P1M" } }),
        })),
        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", ratingCount: "1", bestRating: "5" },
        author: { "@id": `${site.url}/#org` },
        publisher: { "@id": `${site.url}/#org` },
      }}
    />
  );
}

export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  const all = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, ...(it.href && { item: `${site.url}${it.href}` }) })),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8 flex justify-center">
        <ol className="flex items-center gap-1 text-xs text-muted">
          {all.map((it, i) => (
            <li key={it.name} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="size-3" aria-hidden />}
              {it.href ? (
                <Link href={it.href} className="inline-block py-1.5 hover:text-fg">
                  {it.name}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-fg">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
