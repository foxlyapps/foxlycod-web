"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star, Check, X, Minus, Sparkles, Wand2, Layers, BadgePercent, ShieldCheck, Languages, MousePointerClick, Settings2, Rocket, Quote } from "lucide-react";
import { Container, Button, Reveal, Eyebrow, Heading, Card } from "./ui";
import { HeroFormDemo } from "./hero-form-demo";
import { Counter } from "./counter";
import { PaymentFlowSvg, ShieldSvg, PixelSvg } from "./svg";
import { site, pixels, languages } from "@/lib/site";
import { compareCols, compareRows, type Cell } from "@/lib/compare";
import { showcase, type ShowcaseItem } from "@/lib/showcase";

/* ---------------- HERO ---------------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,138,0,.28),transparent)] blur-2xl" />
        <div className="absolute -right-40 top-40 size-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(255,77,18,.22),transparent)] blur-2xl animate-float" />
        <div className="absolute inset-0 grain opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:pt-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href={site.reviews} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 py-1 pl-1.5 pr-3 text-xs font-medium shadow-sm backdrop-blur">
              <span className="flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-white">
                <Star className="size-3 fill-brand-2 text-brand-2" /> 5.0
              </span>
              Rated on Shopify App Store · Works with Shopify Checkout
            </a>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl font-bold leading-[1.02] tracking-tight text-balance sm:text-6xl xl:text-7xl"
          >
            Turn cash‑on‑delivery into <span className="text-gradient">paid orders.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
            One branded 1‑click order form. Three ways to pay: <strong className="text-fg">full prepaid</strong> with a discount, a{" "}
            <strong className="text-fg">partial deposit</strong>, or <strong className="text-fg">COD</strong> with a fee. OTP‑verified, pixel‑tracked, 0% commission.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="flex flex-col gap-3 sm:flex-row">
            <Button href={site.install} external size="lg" arrow>
              Install free on Shopify
            </Button>
            <Button href={site.demo} external size="lg" variant="ghost">
              See it on a live store
            </Button>
          </motion.div>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            {["Free plan, no card", "2‑minute setup", "Dropshipping & D2C", "8 languages incl. RTL"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="size-4 text-brand" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div initial={{ opacity: 0, y: 40, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-brand/15 blur-3xl" />
          <HeroFormDemo />
        </motion.div>
      </Container>
    </section>
  );
}

/* ---------------- TRUST BAND ---------------- */
export function TrustBand() {
  const items = [...pixels.map((p) => `${p} Pixel`), ...languages];
  return (
    <section className="border-y border-line bg-white/50 py-6">
      <Container className="mb-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs font-medium text-muted">
        <span>Tracks every conversion on</span>
      </Container>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max gap-10 animate-marquee">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="whitespace-nowrap text-sm font-semibold text-fg/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
export function Problem() {
  const stats = [
    { n: 30, s: "%", l: "of COD orders in India are returned (RTO) on average", src: "industry estimates" },
    { n: 2, s: "×", l: "shipping paid on every returned parcel, plus handling & damage" },
    { n: 0, s: "", l: "revenue from a fake order, but real cost, real inventory lock, real chaos", raw: "₹0" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Heading
          eyebrow="The COD problem"
          title={
            <>
              Cash on delivery grows sales. <span className="text-gradient">It also eats your margin.</span>
            </>
          }
          sub="Fake numbers, impulse orders, doorstep refusals. Every RTO costs you two shipping legs and a week of locked inventory. Most COD apps only try to block the bad orders. Foxly also converts the good ones to prepaid."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <Card className="h-full p-8">
                <p className="text-6xl font-bold tracking-tight text-gradient">{s.raw ?? <Counter to={s.n} suffix={s.s} />}</p>
                <p className="mt-3 text-base leading-relaxed text-muted">{s.l}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- PAYMENTS ---------------- */
export function Payments() {
  const cards = [
    { icon: BadgePercent, t: "Full Prepaid", d: "Offer an automatic discount for paying now. Customers save, you get cash and zero RTO risk.", c: "from-emerald-500 to-teal-500" },
    { icon: Layers, t: "Partial Payment", d: "Collect 10–50% upfront. Serious buyers stay, fakes vanish. Balance collected on delivery.", c: "from-blue-500 to-indigo-500" },
    { icon: ShieldCheck, t: "COD, on your terms", d: "Add a COD fee. Show or hide COD by location, cart value or product. Verify with OTP.", c: "from-brand to-brand-2" },
  ];
  return (
    <section id="payments" className="relative py-24 sm:py-32">
      <Container>
        <Heading
          eyebrow="Three ways to pay. One form."
          title="Let customers choose. Nudge them to prepaid."
          sub="Set a prepaid discount, a partial deposit and a COD fee once. Foxly does the math live inside the form so the best option for you looks like the best deal for them."
        />
        <Reveal className="mt-14">
          <Card className="overflow-hidden p-4 sm:p-8">
            <PaymentFlowSvg className="h-auto w-full" />
          </Card>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <Card className="group h-full p-7 transition-transform duration-500 hover:-translate-y-1">
                <span className={`inline-grid size-11 place-items-center rounded-2xl bg-gradient-to-br ${c.c} text-white shadow-lg`}>
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{c.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- SHOWCASE (image features) ---------------- */

export function Showcase({ items = showcase }: { items?: ShowcaseItem[] }) {
  return (
    <section className="py-12 sm:py-20" aria-labelledby="showcase-h">
      <Container className="flex flex-col gap-24 sm:gap-32">
        <h2 id="showcase-h" className="sr-only">Foxly features</h2>
        {items.map((it, i) => (
          <div key={it.id} id={it.id} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Reveal className="flex flex-col items-start gap-5">
              <Eyebrow>{it.eyebrow}</Eyebrow>
              <h3 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{it.title}</h3>
              <p className="text-lg leading-relaxed text-muted">{it.body}</p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" /> {b}
                  </li>
                ))}
              </ul>
              <Button href={site.install} external arrow variant="dark" className="mt-2">
                Install free
              </Button>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <motion.div whileHover={{ y: -6, rotate: i % 2 ? 0.6 : -0.6 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-40px_rgba(20,11,7,.45)]">
                <Image src={it.img} alt={it.alt} width={1600} height={900} className="h-auto w-full" sizes="(min-width:1024px) 50vw, 100vw" />
              </motion.div>
              {it.id === "fraud" && <ShieldSvg className="pointer-events-none absolute -bottom-10 -left-10 hidden w-44 lg:block" />}
              {it.id === "pixels" && <PixelSvg className="pointer-events-none absolute -bottom-12 -right-6 hidden w-72 lg:block" />}
            </Reveal>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ---------------- STEPS ---------------- */
export function Steps() {
  const steps = [
    { icon: MousePointerClick, t: "Install & pick a look", d: "One click from the Shopify App Store. Hit AI design or choose one of 14 templates." },
    { icon: Settings2, t: "Set your payment rules", d: "Prepaid discount, partial %, COD fee, OTP on/off, where COD shows. All from Shopify admin." },
    { icon: Rocket, t: "Go live on every product", d: "Forms appear on product and cart pages. Orders land in Shopify like any other, with pixels firing." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Heading eyebrow="Setup" title="Live in under 10 minutes." sub="No theme code. No developer. 24/7 live chat if you want a hand." />
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <svg className="pointer-events-none absolute inset-x-0 top-12 hidden h-2 w-full md:block" aria-hidden>
            <motion.line x1="16%" x2="84%" y1="4" y2="4" stroke="rgba(255,77,18,.35)" strokeWidth="2" strokeDasharray="6 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} />
          </svg>
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.15} className="relative">
              <Card className="h-full p-8 text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-brand-gradient text-white shadow-lg">
                  <s.icon className="size-7" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-ink text-xs font-bold">{i + 1}</span>
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.d}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- COMPARE ---------------- */
function CellView({ v, hero }: { v: Cell; hero?: boolean }) {
  if (v === true) return <Check className={`mx-auto size-5 ${hero ? "text-brand" : "text-emerald-600"}`} strokeWidth={2.5} />;
  if (v === false) return <X className="mx-auto size-5 text-rose-400" />;
  if (v === "—" || v === "Not listed") return <span className="inline-flex items-center gap-1 text-xs text-muted"><Minus className="size-3.5" />{v === "—" ? "" : v}</span>;
  return <span className={`text-xs font-medium ${hero ? "text-fg" : "text-muted"}`}>{v}</span>;
}

export function Compare({ full = false }: { full?: boolean }) {
  const rows = full ? compareRows : compareRows.slice(0, 8);
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Heading
          eyebrow="Why Foxly"
          title={full ? "Foxly vs COD King vs the rest." : "Built to sell, not just to block."}
          sub="Most COD apps stop at verification. Foxly is a conversion tool first: branded form, upsells, prepaid nudges, and every pixel wired. Based on publicly listed features, September 2026."
        />
        <Reveal className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="sticky left-0 bg-bg px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">Feature</th>
                {compareCols.map((c, i) => (
                  <th key={c} className={`px-4 py-3 text-center text-sm font-bold ${i === 0 ? "rounded-t-2xl bg-brand-gradient text-white" : "text-muted"}`}>
                    {i === 0 ? <span className="inline-flex items-center gap-1.5"><Sparkles className="size-4" />{c}</span> : c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={r.f} className="group">
                  <td className="sticky left-0 border-b border-line bg-bg px-4 py-3.5 font-medium">{r.f}</td>
                  {r.v.map((v, i) => (
                    <td key={i} className={`border-b border-line px-4 py-3.5 text-center ${i === 0 ? `bg-white ${ri === rows.length - 1 ? "rounded-b-2xl" : ""}` : ""}`}>
                      <CellView v={v} hero={i === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        {!full && (
          <Reveal className="mt-8 text-center">
            <Button href="/compare" variant="ghost" arrow>
              See the full comparison
            </Button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

/* ---------------- TESTIMONIAL ---------------- */
export function Testimonial() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <Reveal>
          <Card className="relative mx-auto max-w-4xl overflow-hidden p-8 sm:p-14">
            <Quote className="absolute -left-4 -top-4 size-32 text-brand/10" />
            <div className="flex text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
              “From partial payment options, bundle offer flexibility &amp; prepaid discounts, this app provides features I haven&apos;t seen other apps on Shopify provide. Extremely user‑friendly and easy to set up.”
            </blockquote>
            <div className="mt-7 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold">Souls‑Kindled</p>
                <p className="text-sm text-muted">Shopify merchant, India · verified App Store review</p>
              </div>
              <a href={site.reviews} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-brand hover:underline">
                Read on Shopify →
              </a>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- WHY / VALUE GRID ---------------- */
export function ValueGrid() {
  const v = [
    { icon: BadgePercent, t: "0% commission", d: "Flat plan pricing. We never take a cut of your orders, prepaid or COD." },
    { icon: Wand2, t: "AI-designed in one click", d: "Forms that look native to your theme without touching code." },
    { icon: Languages, t: "8 languages, RTL ready", d: "English, Arabic, Hebrew, Spanish, French, German, Italian, Russian." },
    { icon: ShieldCheck, t: "Shopify Checkout inside", d: "Prepaid & partial payments run through your existing gateways." },
  ];
  return (
    <section className="py-12">
      <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {v.map((x, i) => (
          <Reveal key={x.t} delay={i * 0.08}>
            <Card className="h-full p-6">
              <x.icon className="size-6 text-brand" />
              <h3 className="mt-4 font-bold">{x.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{x.d}</p>
            </Card>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
