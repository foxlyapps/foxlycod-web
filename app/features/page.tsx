import type { Metadata } from "next";
import Image from "next/image";
import { Payments, Showcase, Steps, ValueGrid } from "@/components/sections";
import { showcase } from "@/lib/showcase";
import { FinalCta } from "@/components/cta";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading, Reveal, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Features: COD Form, Partial Pay, OTP, Upsells",
  description: "Every Foxly feature: branded 1-click order form, AI designer, prepaid & partial payments, COD fees and rules, OTP verification, fraud blocking, upsells, and multi-pixel tracking.",
  alternates: { canonical: "/features" },
  openGraph: { url: "/features" },
};

const extra = [
  {
    id: "customize",
    eyebrow: "Form customization",
    title: "Your fields, your layout, your language.",
    body: "Drag-and-drop editor with custom fields, fonts, colors, buttons, pop-ups, embedded or floating forms. Ships in 8 languages including Arabic and Hebrew RTL.",
    bullets: ["Drag-and-drop editor", "Custom fields & validation", "Address validation & shipping options", "Multi-language & multi-currency"],
    img: "/screens/customize.png",
    alt: "Foxly customizable form with 14 templates",
  },
  {
    id: "brand",
    eyebrow: "Custom brand logo",
    title: "Your brand on every step, even the loading screen.",
    body: "Upload your logo once. It shows on the form, OTP screen, loading state and thank-you page for a checkout customers actually trust.",
    bullets: ["Logo on loading & OTP screens", "Consistent colors end to end", "Remove Foxly branding on Enterprise", "Custom CSS & HTML when you want it"],
    img: "/screens/brand-logo.png",
    alt: "Foxly custom brand logo during checkout loading",
  },
];

export default function Features() {
  return (
    <>
      <section className="pt-36 pb-10 sm:pt-44">
        <Container>
          <Breadcrumbs items={[{ name: "Features" }]} />
          <Heading
            as="h1"
            eyebrow="Features"
            title={<>Everything a COD store needs to <span className="text-gradient">get paid.</span></>}
            sub="A conversion-first order form with payment flexibility, fraud protection, upsells and attribution. All included on every plan, including Free."
          />
          <Reveal className="mt-14">
            <Card className="overflow-hidden">
              <Image src="/screens/payments.png" alt="Foxly flexible payment options: prepaid, partial and COD" width={1600} height={900} className="h-auto w-full" priority />
            </Card>
          </Reveal>
        </Container>
      </section>
      <ValueGrid />
      <Payments />
      <Showcase items={[showcase[0], ...extra, ...showcase.slice(1)]} />
      <Steps />
      <FinalCta />
    </>
  );
}
