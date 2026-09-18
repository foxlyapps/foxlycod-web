import { Hero, TrustBand, Problem, Payments, Showcase, Steps, Compare, Testimonial, ValueGrid } from "@/components/sections";
import { RoiCalculator } from "@/components/roi-calculator";
import { PricingTable } from "@/components/pricing-table";
import { Faq, FaqJsonLd } from "@/components/faq";
import { FinalCta } from "@/components/cta";
import { Container, Heading } from "@/components/ui";
import { AppJsonLd } from "@/components/seo";

export default function Home() {
  return (
    <>
      <AppJsonLd />
      <FaqJsonLd />
      <Hero />
      <TrustBand />
      <ValueGrid />
      <Problem />
      <section className="pb-24 sm:pb-32">
        <Container>
          <Heading eyebrow="COD calculator" title="What is RTO costing you right now?" sub="Drag the sliders. Numbers update live. Then compare with a $6.99 plan." />
          <div className="mt-12">
            <RoiCalculator />
          </div>
        </Container>
      </section>
      <Payments />
      <Showcase />
      <Steps />
      <Compare />
      <Testimonial />
      <section id="pricing" className="py-24 sm:py-32">
        <Container>
          <Heading eyebrow="Pricing" title="Free to start. Flat to scale. 0% commission, always." sub="Pay for a plan, not a percentage. Every tier ships every feature; you only pay for order volume." />
          <div className="mt-12">
            <PricingTable />
          </div>
        </Container>
      </section>
      <section className="pb-24 sm:pb-32">
        <Container>
          <Heading eyebrow="FAQ" title="Questions merchants ask before installing." />
          <div className="mt-12">
            <Faq />
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
