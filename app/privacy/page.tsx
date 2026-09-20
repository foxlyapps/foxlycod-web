import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Redfox Digital collects, uses and protects personal data in the Fox COD Form, Partial COD & Bundles Shopify app.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

const EMAIL = site.support;

// ponytail: plain data array -> markup. No MDX/CMS for one static legal page.
type Section = { n: string; h: string; body: (string | string[])[] };

const sections: Section[] = [
  {
    n: "1",
    h: "Data Controller and Collection of Personal Data",
    body: [
      "Redfox Digital (hereinafter referred to as “we”, “us”, or “our”), an entity operating under the laws of India, is responsible for processing personal data in connection with the use of the application Fox COD Form, Partial COD & Bundles (the “Application”).",
      "We collect personal data:",
      ["Provided directly by users (merchants and customers)", "Automatically collected during the use of our Application"],
      "We process personal data in accordance with:",
      [
        "The Information Technology Act, 2000 (India) and applicable rules",
        "The Digital Personal Data Protection Act, 2023 (India)",
        "General global privacy standards where applicable (e.g., GDPR principles for international users)",
      ],
    ],
  },
  {
    n: "2",
    h: "Contact Information",
    body: ["For any questions regarding this Privacy Policy or your data, please contact:", `📧 ${EMAIL}`],
  },
  {
    n: "3",
    h: "Purpose and Legal Basis for Processing",
    body: [
      "A. Providing the Application",
      ["To operate and maintain the Application", "To enable Shopify store functionality (COD management, forms, bundles)"],
      "Legal basis: performance of contract and legitimate business interests",
      "B. Customer Support",
      ["To respond to queries via email or chat"],
      "Legal basis: legitimate interest",
      "C. Analytics & Improvements",
      ["To improve performance, features, and user experience"],
      "Legal basis: legitimate interest",
      "D. Communication & Marketing",
      ["To send product updates or relevant information (only where permitted)", "Users may opt out at any time"],
    ],
  },
  {
    n: "4",
    h: "Types of Data Collected",
    body: [
      "A. Merchant Data",
      ["Name, email address", "Store domain", "Country and business information", "Subscription details"],
      "B. Application & Usage Data",
      ["Log files, diagnostics, crash reports", "Device and browser information", "Interaction data within the app"],
      "C. Order Data (Shopify)",
      ["Order ID", "Payment method (e.g., COD)"],
      "⚠️ We do NOT store full customer order details or payment information.",
      "D. Location Data (if applicable)",
      ["Approximate location based on IP or user input", "Used only for functionality (e.g., location-based features)"],
    ],
  },
  {
    n: "5",
    h: "Shopify Data Access",
    body: [
      "When you install our Application, we access certain Shopify store data strictly necessary for functionality, such as:",
      ["Orders (limited to payment method and ID)", "Store information"],
    ],
  },
  {
    n: "6",
    h: "Data Retention",
    body: [["As long as your account is active", "Until the app is uninstalled", "As required by law or for legitimate business purposes"]],
  },
  {
    n: "7",
    h: "Data Sharing and Third Parties",
    body: [
      ["Cloud hosting providers (e.g., AWS, Cloudflare)", "Analytics tools", "Customer support platforms"],
      "We do not sell personal data.",
    ],
  },
  {
    n: "10",
    h: "Data Security",
    body: [["SSL/TLS encryption", "Secure storage", "Monitoring & logging", "Regular audits"]],
  },
  { n: "15", h: "Governing Law", body: ["This Privacy Policy is governed by the laws of India."] },
  { n: "16", h: "Contact", body: [`📧 ${EMAIL}`] },
];

function Mail() {
  return (
    <a href={`mailto:${EMAIL}`} className="font-semibold text-brand hover:underline">
      {EMAIL}
    </a>
  );
}

function Paragraph({ text }: { text: string }) {
  const [before, after] = text.split(EMAIL);
  return (
    <p className="mt-4 leading-relaxed text-muted">
      {after === undefined ? text : (
        <>
          {before}
          <Mail />
          {after}
        </>
      )}
    </p>
  );
}

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44">
      <Container>
        <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
        <Heading
          as="h1"
          eyebrow="Legal"
          title={<>Privacy <span className="text-gradient">Policy</span></>}
          sub="Fox COD Form, Partial COD & Bundles — Last updated: 25 February 2026"
        />
        <div className="mx-auto mt-12 max-w-3xl sm:mt-16">
          {sections.map((s) => (
            <div key={s.n} className="mt-10 first:mt-0">
              <h2 className="text-xl font-bold sm:text-2xl">
                {s.n}. {s.h}
              </h2>
              {s.body.map((b, i) =>
                Array.isArray(b) ? (
                  <ul key={i} className="mt-4 flex list-disc flex-col gap-2 pl-5 leading-relaxed text-muted marker:text-brand">
                    {b.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <Paragraph key={i} text={b} />
                ),
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
