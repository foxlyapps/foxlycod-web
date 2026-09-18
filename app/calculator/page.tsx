import type { Metadata } from "next";
import { RoiCalculator } from "@/components/roi-calculator";
import { FinalCta } from "@/components/cta";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading } from "@/components/ui";
import { Faq } from "@/components/faq";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "COD RTO Cost Calculator for Shopify",
  description: "Free calculator: see what returned COD orders (RTO) cost your Shopify store each month and how much partial payment, prepaid discounts and OTP could save.",
  alternates: { canonical: "/calculator" },
  openGraph: { url: "/calculator" },
};

export default function Calculator() {
  return (
    <>
      <section className="pt-36 pb-24 sm:pt-44">
        <Container>
          <Breadcrumbs items={[{ name: "COD Calculator" }]} />
          <Heading
            as="h1"
            eyebrow="COD calculator"
            title={<>How much is COD <span className="text-gradient">really</span> costing you?</>}
            sub="No signup. Move the sliders to your real numbers. The model is conservative and the assumptions are printed under it."
          />
          <div className="mt-14">
            <RoiCalculator />
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <Heading eyebrow="How Foxly changes the math" title="Three levers, one form." />
          <div className="mt-12">
            <Faq items={faqs.filter((f) => /partial|commission|replace/.test(f.q))} />
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
