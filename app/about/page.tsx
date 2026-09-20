import type { Metadata } from "next";
import { Wrench, HeadphoneOff, Puzzle, TrendingUp, BadgePercent, ShieldCheck, Zap, Globe } from "lucide-react";
import { FinalCta } from "@/components/cta";
import { Breadcrumbs } from "@/components/seo";
import { Container, Heading, Reveal, Card } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Foxly — Built by an agency tired of broken COD apps",
  description:
    "We ran a Shopify agency and set up cash-on-delivery for dozens of stores. The plugins were slow, the partial payment never worked, and support went quiet. So we built Foxly.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

const pains = [
  {
    icon: Wrench,
    t: "Every launch turned into a weekend",
    d: "A COD store should take an afternoon. Instead we spent nights wiring a form app, a fee app, an OTP app and a bundle app together, then patching the CSS each time the theme updated.",
  },
  {
    icon: Puzzle,
    t: "Partial payment barely existed",
    d: "Clients kept asking the same thing: let the buyer pay a bit now and the rest on delivery. Almost nothing did it properly, and the ones that tried broke Shopify Checkout or the pixel data.",
  },
  {
    icon: HeadphoneOff,
    t: "Support answered in four days",
    d: "A broken form on a live store is lost revenue by the hour. Waiting days for a one-line reply, on a plugin the client already paid for, is not something we could keep explaining.",
  },
  {
    icon: TrendingUp,
    t: "Commission on our client's growth",
    d: "The better a store performed, the bigger the app bill. Percentage pricing quietly taxed the exact result we were hired to produce.",
  },
];

const beliefs = [
  { icon: BadgePercent, t: "0% commission, forever", d: "Flat plan, transparent $0.05 overage. Your growth is yours." },
  { icon: Zap, t: "Live in 10 minutes", d: "Install, AI-design the form to your theme, set your rules, sell. No developer." },
  { icon: ShieldCheck, t: "Shopify Checkout stays", d: "We never replace checkout. Your gateways, taxes and order data don't move." },
  { icon: HeadphoneOff, t: "24/7 real humans", d: "Live chat, same day. We answer because we remember waiting." },
  { icon: Globe, t: "Not a one-country tool", d: "8 languages with Arabic and Hebrew RTL, multi-currency, rules by location." },
  { icon: TrendingUp, t: "Convert, don't just block", d: "Blocking bad COD orders is half the job. Turning good ones prepaid is the money." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 sm:pt-36 lg:pt-44">
        <Container>
          <Breadcrumbs items={[{ name: "About" }]} />
          <Heading
            as="h1"
            eyebrow="Our story"
            title={<>We built Foxly because we <span className="text-gradient">needed it first.</span></>}
            sub="Foxly comes out of an agency, not a boardroom. We were the ones setting up cash-on-delivery stores at 2am, apologising to clients for a plugin we didn't write."
          />
          <Reveal className="mx-auto mt-10 max-w-3xl sm:mt-14">
            <Card className="p-7 sm:p-10">
              <p className="text-lg leading-relaxed sm:text-xl">
                A client sold beauty combos. Good product, good ads, orders flowing — and roughly a third of them coming
                back undelivered. Fake numbers, doorstep refusals, two shipping legs paid on every one.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                The fix was obvious: ask for a small amount upfront. A buyer who pays even 10% shows up for the parcel.
                So we went looking for a plugin that could collect partial payment on a branded form, and spent the next
                two weeks stacking four apps that each did a slice of it badly. The form didn't match the theme. The
                pixel stopped firing, so the ads team was optimising blind. OTP came from a fifth app. Support replied on
                day four, after the client had already called us twice.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                We shipped it anyway, because that's the job. Then the next store needed the same thing, and the next
                one. Somewhere around the tenth setup we stopped patching other people's plugins and started writing our
                own — one form that offers Prepaid, Partial and COD, designs itself to the theme, verifies the phone,
                upsells on the way, and reports every pixel event correctly.
              </p>
              <p className="mt-5 leading-relaxed text-muted">
                That became Foxly. Every feature in it exists because a real store was bleeding money without it.
              </p>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <Heading
            eyebrow="Why we built it"
            title={<>Four headaches we refused to <span className="text-gradient">keep living with.</span></>}
            sub="Not hypotheticals. These are the four things that broke on nearly every COD store we set up."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2">
            {pains.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08}>
                <Card className="h-full p-7">
                  <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{p.t}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-32">
        <Container>
          <Heading
            eyebrow="What we stand for"
            title={<>Rules we wrote for ourselves, <span className="text-gradient">as the customer.</span></>}
            sub="We still run stores. Anything we hated paying for, we don't charge for."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <Reveal key={b.t} delay={i * 0.06}>
                <Card className="h-full p-7">
                  <b.icon className="size-5 text-brand" />
                  <h3 className="mt-4 text-lg font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl sm:mt-14">
            <Card className="p-7 text-center sm:p-10">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Made by the team at <span className="text-gradient">{site.developer}</span>
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                A small product and Shopify agency team in Bhubaneswar, India. We build the apps we wished existed when
                we were the ones launching COD stores. One goal: let a seller accept COD safely, lift AOV, and keep more
                of what they earn.
              </p>
              <a href={`mailto:${site.support}`} className="mt-5 inline-block font-semibold text-brand hover:underline">
                {site.support}
              </a>
            </Card>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
