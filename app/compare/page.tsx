import type { Metadata } from "next";
import { Compare, Testimonial } from "@/components/sections";
import { FinalCta } from "@/components/cta";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading, Reveal, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Foxly vs COD King & Shopify COD Apps",
  description: "Feature-by-feature comparison of Foxly COD + Partial & Prepaid against COD King and typical Shopify COD form apps: payments, AI design, upsells, pixels, OTP, pricing.",
  alternates: { canonical: "/compare" },
  openGraph: { url: "/compare" },
};

const angles = [
  { t: "Verification tools block. Foxly converts.", d: "OTP and RTO detection are table stakes. The money is in shifting COD buyers to prepaid with a discount they see in the form, and raising AOV with upsells while they are there." },
  { t: "Custom forms break pixels. Ours don't.", d: "Foxly fires InitiateCheckout, AddPaymentInfo and Purchase to Meta, Google, TikTok, Snapchat, Pinterest, Taboola and Kwai. Your ROAS stays measurable." },
  { t: "Flat price beats a percentage.", d: "Usage-based or commission pricing grows with your success. Foxly is a flat plan with a transparent $0.05 overage and 0% commission." },
  { t: "Global from day one.", d: "8 languages including Arabic and Hebrew RTL, multi-currency, and rules by location. Not a single-country tool." },
];

export default function ComparePage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 lg:pt-44">
        <Container>
          <Breadcrumbs items={[{ name: "Compare" }]} />
          <Heading
            as="h1"
            eyebrow="Compare"
            title={<>Choosing a COD app? <span className="text-gradient">Compare honestly.</span></>}
            sub="We list what each product publicly advertises. Where a competitor does not list a feature we say so rather than marking it missing. Spot an error? Email us and we will fix it."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
            {angles.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <h3 className="text-xl font-bold">{a.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{a.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <Compare full />
      <Testimonial />
      <FinalCta />
    </>
  );
}
