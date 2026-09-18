import type { Metadata } from "next";
import { PricingTable } from "@/components/pricing-table";
import { Faq, FaqJsonLd } from "@/components/faq";
import { FinalCta } from "@/components/cta";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading, Reveal, Card } from "@/components/ui";
import { Counter } from "@/components/counter";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing: Free to Install, 0% Commission",
  description: "Foxly pricing: Free plan with 40 orders/month, Pro from $6.99/mo, Advanced $24.99, Enterprise $69.99 unlimited. 0% commission on prepaid, partial and COD orders.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" },
};

const pricingFaqs = [
  { q: "What happens if I go over my order limit?", a: "On Pro and Advanced you pay $0.05 per additional order. Enterprise is unlimited. Free plan orders pause at 40 until the next cycle or upgrade." },
  { q: "What do OTP SMS cost?", a: "India: ₹0.80 per SMS on Pro, ₹0.60 on Advanced, ₹0.35 on Enterprise. Free plan includes 100 OTPs. Other regions: contact support for local rates." },
  { q: "Is yearly billing cheaper?", a: "Yes, 25% off. Pro is $62.91/year, Advanced $224.91/year, Enterprise $629.99/year." },
  ...faqs.filter((f) => /commission|try it/.test(f.q)),
];

export default function Pricing() {
  return (
    <>
      <FaqJsonLd items={pricingFaqs} />
      <section className="pt-36 pb-16 sm:pt-44">
        <Container>
          <Breadcrumbs items={[{ name: "Pricing" }]} />
          <Heading
            as="h1"
            eyebrow="Pricing"
            title={<>Pay for a plan. <span className="text-gradient">Never a percentage.</span></>}
            sub="Every feature on every tier. The only thing that changes is how many orders are included. Start free, upgrade when orders flow."
          />
          <div className="mt-14">
            <PricingTable />
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <Reveal>
            <Card className="grid gap-8 p-8 sm:grid-cols-3 sm:p-12">
              <div>
                <p className="text-5xl font-bold tracking-tight text-gradient"><Counter to={0} suffix="%" /></p>
                <p className="mt-2 font-semibold">Commission</p>
                <p className="text-sm text-muted">Other tools take a cut of prepaid orders. We don&apos;t.</p>
              </div>
              <div>
                <p className="text-5xl font-bold tracking-tight text-gradient"><Counter to={40} /></p>
                <p className="mt-2 font-semibold">Free orders every month</p>
                <p className="text-sm text-muted">Forever. No card, no trial clock.</p>
              </div>
              <div>
                <p className="text-5xl font-bold tracking-tight text-gradient">$<Counter to={0.05} decimals={2} /></p>
                <p className="mt-2 font-semibold">Per extra order</p>
                <p className="text-sm text-muted">Transparent overage. One bad RTO costs 100× more.</p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <Heading eyebrow="Billing FAQ" title="The fine print, in plain words." />
          <div className="mt-12">
            <Faq items={pricingFaqs} />
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
