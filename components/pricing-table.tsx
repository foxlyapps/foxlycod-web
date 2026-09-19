"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { plans } from "@/lib/site";
import { site } from "@/lib/site";
import { Button, BookButton } from "./ui";

export function PricingTable() {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-3 text-sm font-medium">
        <span className={yearly ? "text-muted" : ""}>Monthly</span>
        <button
          role="switch"
          aria-checked={yearly}
          onClick={() => setYearly((v) => !v)}
          className="relative h-8 w-14 rounded-full bg-ink p-1 transition-colors"
        >
          <motion.span layout transition={{ type: "spring", stiffness: 500, damping: 30 }} className={`block size-6 rounded-full bg-white ${yearly ? "ml-auto" : ""}`} />
        </button>
        <span className={yearly ? "" : "text-muted"}>
          Yearly <span className="ml-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">save 25%</span>
        </span>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        {plans.map((p, i) => {
          const price = yearly ? p.yearly / 12 : p.monthly;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`relative flex flex-col rounded-3xl p-6 ${
                p.popular ? "bg-ink text-white ring-glow lg:-my-4 lg:py-10" : "border border-line bg-white/70"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white">
                  <Sparkles className="size-3" /> Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-white/70" : "text-muted"}`}>{p.blurb}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <motion.span key={price} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold tracking-tight">
                  {price === 0 ? "$0" : `$${price.toFixed(2)}`}
                </motion.span>
                <span className={`text-sm ${p.popular ? "text-white/60" : "text-muted"}`}>/mo</span>
              </div>
              <p className={`text-xs ${p.popular ? "text-white/60" : "text-muted"}`}>
                {price === 0 ? "Free forever, no card" : yearly ? `Billed $${p.yearly.toFixed(2)}/year` : "Billed monthly"}
              </p>
              <div className={`mt-5 rounded-2xl p-3 text-xs ${p.popular ? "bg-white/10" : "bg-fg/[.04]"}`}>
                <p className="font-semibold">{p.orders}</p>
                <p className={p.popular ? "text-white/70" : "text-muted"}>{p.overage ? `${p.overage} · ` : ""}{p.sms}</p>
              </div>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className={`mt-0.5 size-4 shrink-0 ${p.popular ? "text-brand-2" : "text-brand"}`} />
                    <span className={p.popular ? "text-white/85" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              {p.popular ? (
                <BookButton source="pricing-popular" className="mt-6 w-full">
                  Book a free demo
                </BookButton>
              ) : (
                <Button href={site.install} external arrow variant="dark" className="mt-6 w-full">
                  {price === 0 ? "Start free" : `Start with ${p.name}`}
                </Button>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col items-center gap-3 text-center">
        <p className="text-sm font-medium">
          Not sure which plan fits your order volume?
        </p>
        <BookButton source="pricing-footer" variant="dark">
          Ask us on a free 30-min call
        </BookButton>
        <p className="text-xs text-muted">
          All plans: 0% commission on every order. Prices in USD, billed via Shopify. Cancel anytime from your Shopify admin.
        </p>
      </div>
    </div>
  );
}
