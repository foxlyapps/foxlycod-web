import type { Metadata } from "next";
import {
  Star,
  Check,
  X,
  Clock,
  Video,
  ShieldCheck,
  BadgePercent,
  Wand2,
  Target,
  TrendingDown,
  PhoneOff,
  Banknote,
  Layers,
  Gift,
  MessageSquareOff,
  Sparkles,
} from "lucide-react";
import { Container, Reveal, Card, BookButton, Eyebrow, Heading } from "@/components/ui";
import { Counter } from "@/components/counter";
import { CalEmbed } from "@/components/cal-embed";
import { HeroFormDemo } from "@/components/hero-form-demo";
import { Faq, FaqJsonLd } from "@/components/faq";
import { JsonLd } from "@/components/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Demo Call",
  description:
    "30 minutes, free. We show you Foxly live, learn how your store sells, then design your order form and build the prepaid offer that lifts your order count. No pitch, no card.",
  alternates: { canonical: "/book-demo" },
  openGraph: { url: "/book-demo", title: "Book your free 30-minute Foxly demo" },
  robots: { index: false, follow: false }, // paid-traffic landing page
};

/* ---------------- content ---------------- */

const agenda = [
  {
    icon: Video,
    min: "0-10 min",
    t: "We show you the plugin, live",
    d: "Not a slide deck. A real Shopify store, a real order form, prepaid + partial + COD side by side. You see exactly what your customer sees before they pay.",
  },
  {
    icon: Target,
    min: "10-20 min",
    t: "We learn how your store actually sells",
    d: "Your products, your AOV, your RTO rate, where COD hurts most. We work out which of the three payment modes will move your numbers, and which ones to leave off.",
  },
  {
    icon: Wand2,
    min: "20-30 min",
    t: "We set it up with you, on the call",
    d: "Your form designed to match your theme, your prepaid discount and COD fee dialled in, and the offer structure built to pull more orders. You leave with it live, not with homework.",
  },
];

const walkAway = [
  { icon: Wand2, t: "A form that looks like your brand", d: "Designed on the call to match your theme — fonts, colors, layout. Not a generic popup bolted onto your product page." },
  { icon: BadgePercent, t: "Your prepaid offer, priced", d: "The exact discount to offer for paying now, and the COD fee that nudges without scaring. We do the margin math with you." },
  { icon: Gift, t: "An offer built to lift orders", d: "Upsells, bundles and partial-deposit thresholds arranged so average order value goes up while fake orders go down." },
  { icon: ShieldCheck, t: "Fraud rules switched on", d: "OTP verification and blocking rules set for your regions and PIN codes, so the RTO bleed stops from day one." },
];

const forYou = [
  "You run a Shopify store where COD is a big share of orders",
  "RTO and fake orders are eating margin you can feel",
  "You want more prepaid without killing conversion",
  "You are D2C or dropshipping and ship in India, MENA or SEA",
];

const notForYou = [
  "You do not sell on Shopify",
  "Your store is 100% prepaid already and COD is not on the table",
  "You want a free build with no intention of running the store",
];

const bookFaqs = [
  { q: "Is this a sales call?", a: "It is a working session. We demo the plugin, look at your numbers, and set the thing up. If Foxly is wrong for your store we will say so on the call and you keep the setup advice anyway." },
  { q: "How long is the call?", a: "30 minutes. We keep it to 30. If your setup needs longer we finish it over chat afterwards at no cost." },
  { q: "Do I need to pay or enter a card?", a: "No. The call is free and Foxly has a free plan with 40 orders a month, 0% commission and no card required. Nothing is charged to book or to start." },
  { q: "What should I have ready?", a: "Your Shopify admin open, and rough numbers if you have them: monthly orders, average order value, and your current RTO percentage. If you do not know them, we will find them together." },
  { q: "Can my developer or agency join?", a: "Yes. Forward the invite. Setup needs no theme code, but plenty of merchants like having their agency on the call." },
  { q: "What if I have to reschedule?", a: "Use the link in your confirmation email. One click, any slot, no penalty." },
];

/* ---------------- page ---------------- */

export default function BookDemo() {
  return (
    <>
      <FaqJsonLd items={bookFaqs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Foxly free Shopify COD setup demo",
          serviceType: "Product demonstration and onboarding call",
          provider: { "@type": "Organization", name: site.developer, url: site.url },
          url: `${site.url}/book-demo`,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD", url: site.book },
        }}
      />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,138,0,.28),transparent)] blur-2xl" />
          <div className="absolute inset-0 grain opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <Eyebrow>Free 30-minute setup call</Eyebrow>
            <h1 className="text-[2.125rem] font-bold leading-[1.05] tracking-tight text-balance [overflow-wrap:break-word] sm:text-6xl sm:leading-[1.02]">
              Stop paying twice to ship orders that <span className="text-gradient">never get paid.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              Book 30 free minutes. We show you Foxly live, learn how your store sells, then build your order form and your
              prepaid offer <strong className="text-fg">with you on the call</strong>. You hang up with it running.
            </p>

            {/* primary action — big, alone, with the risk taken off it */}
            <div className="flex w-full flex-col items-start gap-3">
              <BookButton size="lg" source="bookdemo-hero" className="w-full sm:w-auto">
                Book my free demo call
              </BookButton>
              <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4 text-brand" /> Usually booked within this week
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-brand" /> No card · Reschedule anytime
                </span>
              </p>
            </div>

            <ul className="grid gap-2.5 sm:grid-cols-2">
              {[
                "Free. No card, no commitment.",
                "Built for you, on the call.",
                "Works with your Shopify Checkout.",
                "0% commission, always.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm font-medium">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" /> {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-2xl border border-line bg-white/60 px-4 py-3 text-sm">
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="flex text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </span>
                5.0 on the Shopify App Store
              </span>
              <span className="text-muted">Prepaid · Partial · COD in one branded form</span>
            </div>
          </div>

          {/* right: the product itself — what we build with you on the call */}
          <div className="relative w-full">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-3xl" />
            <HeroFormDemo />
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-muted">
              <Wand2 className="size-4 shrink-0 text-brand" />
              This is the form we design for your store, live on the call.
            </p>
          </div>
        </Container>
      </section>

      {/* ============ PROBLEM / COST ============ */}
      <section className="py-14 sm:py-20">
        <Container>
          <Heading
            eyebrow="Why this call is worth 30 minutes"
            title={
              <>
                Every refused COD parcel costs you twice. <span className="text-gradient">Nobody sends you the invoice.</span>
              </>
            }
            sub="Two shipping legs, locked inventory, a week of ops time and a product that comes back shopworn. The fix is not blocking more orders. It is getting more of the good ones paid before they ship."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
            {[
              { icon: TrendingDown, n: 30, s: "%", l: "of COD orders in India come back as RTO on average. That is a third of your ad spend shipped to nowhere." },
              { icon: PhoneOff, raw: "2×", l: "shipping paid on every return, plus handling, plus the damage you cannot resell at full price." },
              { icon: Banknote, raw: "₹0", l: "revenue from a fake order. Real cost, real inventory lock, real chaos for your team." },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <Card className="h-full p-8">
                  <s.icon className="size-6 text-brand" />
                  <p className="mt-4 text-5xl font-bold tracking-tight text-gradient sm:text-6xl">
                    {s.raw ?? <Counter to={s.n!} suffix={s.s} />}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-muted">{s.l}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ AGENDA ============ */}
      <section className="py-14 sm:py-20">
        <Container>
          <Heading
            eyebrow="What happens on the call"
            title="Three things. In thirty minutes."
            sub="No discovery questionnaire, no second call to get to the point. We demo, we listen, we build. Here is the exact running order."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-3">
            {agenda.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.12}>
                <Card className="h-full p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                      <a.icon className="size-5" />
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-muted">{a.min}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">
                    <span className="text-gradient">{i + 1}. </span>
                    {a.t}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{a.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 text-center">
            <BookButton size="lg" source="bookdemo-agenda">
              Grab a slot
            </BookButton>
          </Reveal>
        </Container>
      </section>

      {/* ============ WHAT YOU WALK AWAY WITH ============ */}
      <section className="py-14 sm:py-20">
        <Container>
          <Heading
            eyebrow="What you keep"
            title="You leave the call with a store that sells differently."
            sub="Not notes. Not a proposal. A configured, designed, live order form — and the offer strategy behind it."
          />
          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2">
            {walkAway.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <Card className="flex h-full items-start gap-4 p-7">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <w.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{w.t}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{w.d}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <Card className="flex flex-col items-center gap-4 bg-white/80 p-7 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-brand" />
                <p className="text-base font-medium text-pretty">
                  Setup normally takes a merchant an afternoon of trial and error. On this call it takes twenty minutes,
                  and we do the fiddly parts for you — <strong>at no charge</strong>.
                </p>
              </div>
              <BookButton source="bookdemo-walkaway" className="shrink-0">
                Book it free
              </BookButton>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* ============ QUALIFY ============ */}
      <section className="py-14 sm:py-20">
        <Container>
          <Heading eyebrow="Honest filter" title="This call is not for everybody." sub="Read both lists before you book. We would rather you skip it than sit through the wrong half hour." />
          <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full p-8">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <Check className="size-5 text-emerald-600" /> Book if
                </h3>
                <ul className="mt-5 grid gap-3">
                  {forYou.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-base">
                      <Check className="mt-1 size-4 shrink-0 text-emerald-600" strokeWidth={2.5} /> {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full p-8">
                <h3 className="flex items-center gap-2 text-lg font-bold">
                  <X className="size-5 text-rose-400" /> Skip it if
                </h3>
                <ul className="mt-5 grid gap-3">
                  {notForYou.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-base text-muted">
                      <X className="mt-1 size-4 shrink-0 text-rose-400" /> {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ PROOF ============ */}
      <section className="py-10 sm:py-16">
        <Container>
          <Reveal>
            <Card className="mx-auto max-w-4xl p-8 sm:p-14">
              <div className="flex text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-xl font-medium leading-snug tracking-tight text-balance sm:text-2xl lg:text-3xl">
                “From partial payment options, bundle offer flexibility &amp; prepaid discounts, this app provides features I
                haven&apos;t seen other apps on Shopify provide. Extremely user&#8209;friendly and easy to set up.”
              </blockquote>
              <div className="mt-7">
                <p className="font-bold">Souls&#8209;Kindled</p>
                <p className="text-sm text-muted">Shopify merchant, India · verified App Store review</p>
              </div>
            </Card>
          </Reveal>

          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { icon: BadgePercent, t: "0% commission", d: "We never take a cut of an order." },
              { icon: Layers, t: "Prepaid · Partial · COD", d: "Three ways to pay in one form." },
              { icon: MessageSquareOff, t: "No hard sell", d: "Free plan exists. Use it if it fits." },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.08}>
                <Card className="h-full p-6">
                  <x.icon className="size-5 text-brand" />
                  <p className="mt-3 font-bold">{x.t}</p>
                  <p className="text-sm text-muted">{x.d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-14 sm:py-20">
        <Container>
          <Heading eyebrow="Before you book" title="The things people ask us first." />
          <div className="mt-10 sm:mt-12">
            <Faq items={bookFaqs} />
          </div>
        </Container>
      </section>

      {/* ============ FINAL CTA + calendar again ============ */}
      <section className="relative pb-6">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[28px] bg-ink px-5 py-14 text-white sm:rounded-[40px] sm:px-14 sm:py-16">
            <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-brand/40 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-40 -right-20 size-96 rounded-full bg-brand-2/30 blur-[120px]" />
            <div className="pointer-events-none absolute inset-0 grain opacity-[.15]" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <h2 className="text-[1.875rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
                  Thirty minutes now, or <span className="text-gradient">another month of RTO.</span>
                </h2>
                <p className="mt-4 max-w-md text-base text-white/70 text-pretty sm:text-lg">
                  Pick a time. We will show you the plugin, understand your store, and set it up with a design and an offer
                  built to bring in more paid orders. It costs you nothing but the half hour.
                </p>
                <ul className="mt-7 grid gap-2.5 text-sm text-white/75">
                  {["Free 30-minute call", "Setup done with you, live", "No card, no contract, cancel anytime"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <Check className="size-4 text-brand-2" /> {t}
                    </li>
                  ))}
                </ul>
                {/* mobile: jump back to the one calendar instead of loading a second iframe */}
                <div className="mt-8 lg:hidden">
                  <BookButton size="lg" source="bookdemo-final">
                    Pick my time slot
                  </BookButton>
                </div>
              </div>
              <div className="hidden rounded-3xl bg-white p-3 sm:p-4 lg:block">
                <CalEmbed />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}