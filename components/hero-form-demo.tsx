"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Wallet, CreditCard, Truck, ShieldCheck, Sparkles, Check, Lock, Phone, User, MapPin, Flame, ChevronRight } from "lucide-react";

const themes = [
  { name: "Ember", c: "#ff4d12", soft: "#fff1ea" },
  { name: "Cocoa", c: "#7a3b1e", soft: "#f6ede7" },
  { name: "Rose", c: "#e6265e", soft: "#fdeef3" },
  { name: "Mint", c: "#0f9d58", soft: "#eaf7f0" },
  { name: "Ocean", c: "#1f5eff", soft: "#ebf0ff" },
];

const bundles = [
  { units: 1, off: 0 },
  { units: 2, off: 10 },
  { units: 3, off: 20, popular: true },
];

const UNIT = 499;
const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export function HeroFormDemo() {
  const [theme, setTheme] = useState(0);
  const [bundle, setBundle] = useState(2);
  const [pay, setPay] = useState<"prepaid" | "partial" | "cod">("prepaid");
  const [prepaidOff, setPrepaidOff] = useState(10);
  const [partialPct, setPartialPct] = useState(20);
  const [codFee, setCodFee] = useState(60);
  const [step, setStep] = useState<"form" | "otp" | "done">("form");
  const [controls, setControls] = useState(false);

  const t = themes[theme];
  const b = bundles[bundle];
  const subtotal = UNIT * b.units * (1 - b.off / 100);
  const totals = useMemo(
    () => ({
      prepaid: subtotal * (1 - prepaidOff / 100),
      partialNow: subtotal * (partialPct / 100),
      partialLater: subtotal * (1 - partialPct / 100),
      cod: subtotal + codFee,
    }),
    [subtotal, prepaidOff, partialPct, codFee],
  );
  const payNow = pay === "prepaid" ? totals.prepaid : pay === "partial" ? totals.partialNow : 0;
  const total = pay === "prepaid" ? totals.prepaid : pay === "partial" ? subtotal : totals.cod;

  useEffect(() => {
    if (step === "otp") {
      const id = setTimeout(() => setStep("done"), 2200);
      return () => clearTimeout(id);
    }
    if (step === "done") {
      const id = setTimeout(() => setStep("form"), 3200);
      return () => clearTimeout(id);
    }
  }, [step]);

  const opts = [
    {
      id: "prepaid" as const,
      icon: Wallet,
      title: "Full Prepaid",
      sub: `Pay now & save ${fmt(subtotal - totals.prepaid)}`,
      badge: "Save the most",
      price: fmt(totals.prepaid),
      strike: fmt(subtotal),
    },
    {
      id: "partial" as const,
      icon: CreditCard,
      title: "Partial Payment",
      sub: `Pay ${partialPct}% now · ${fmt(totals.partialLater)} on delivery`,
      badge: "Most popular",
      price: fmt(totals.partialNow),
      strike: "",
    },
    {
      id: "cod" as const,
      icon: Truck,
      title: "Cash on Delivery",
      sub: codFee ? `+${fmt(codFee)} COD fee · pay when you receive` : "Pay when you receive",
      badge: "",
      price: fmt(totals.cod),
      strike: "",
    },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[420px]" style={{ ["--t" as string]: t.c, ["--ts" as string]: t.soft }}>
      {/* theme swatches (AI designer) */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-y-2 gap-x-3 px-1">
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted">
          <Sparkles className="size-3.5 text-brand" /> Brand theme
        </div>
        <div className="flex gap-1.5">
          {themes.map((th, i) => (
            <button
              key={th.name}
              onClick={() => setTheme(i)}
              aria-label={`${th.name} theme`}
              className={`size-7 rounded-full border-2 transition-transform hover:scale-110 sm:size-6 ${i === theme ? "scale-110 border-fg" : "border-white"}`}
              style={{ background: th.c }}
            />
          ))}
        </div>
        <button
          onClick={() => setControls((v) => !v)}
          className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors ${controls ? "border-brand bg-brand text-white" : "border-line bg-white text-fg"}`}
        >
          Merchant rules
        </button>
      </div>

      <motion.div
        layout
        className="relative overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_30px_80px_-30px_rgba(20,11,7,.45)]"
      >
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3 text-white" style={{ background: t.c }}>
          <span className="text-xs font-medium opacity-90">Free &amp; fast delivery</span>
          <span className="flex items-center gap-1 text-[11px] font-semibold">
            <Lock className="size-3" /> 100% secure
          </span>
        </div>

        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }} className="p-4 sm:p-5">
              {/* bundles */}
              <div className="mb-4 flex flex-col gap-2">
                {bundles.map((bd, i) => {
                  const price = UNIT * bd.units * (1 - bd.off / 100);
                  const on = i === bundle;
                  return (
                    <button
                      key={bd.units}
                      onClick={() => setBundle(i)}
                      className={`relative flex items-center gap-3 rounded-2xl border-2 px-3 py-2.5 text-left transition-all ${on ? "shadow-sm" : "border-black/6 hover:border-black/15"}`}
                      style={on ? { borderColor: t.c, background: t.soft } : {}}
                    >
                      {bd.popular && (
                        <span className="absolute -top-2.5 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: t.c }}>
                          Most popular
                        </span>
                      )}
                      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-orange-100 to-rose-100 text-lg">🧴</span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold">{bd.units} Unit{bd.units > 1 ? "s" : ""}</span>
                        {bd.off > 0 && (
                          <span className="rounded px-1.5 py-0.5 text-[10px] font-bold text-white" style={{ background: t.c }}>
                            Save {bd.off}%
                          </span>
                        )}
                      </span>
                      <span className="text-right">
                        {bd.off > 0 && <span className="block text-[11px] text-muted line-through">{fmt(UNIT * bd.units)}</span>}
                        <span className="block text-sm font-bold">{fmt(price)}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* fields */}
              <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                <Field icon={Phone} ph="Phone number" full />
                <Field icon={User} ph="Full name" full />
                <Field icon={MapPin} ph="Delivery address" full />
                <Field icon={MapPin} ph="City" />
                <Field icon={MapPin} ph="PIN code" />
              </div>

              {/* payment */}
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-semibold">Choose payment option</span>
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  <Flame className="size-3" /> Save more on prepaid
                </span>
              </div>
              <div className="flex flex-col gap-2" role="radiogroup">
                {opts.map((o) => {
                  const on = pay === o.id;
                  return (
                    <motion.button
                      key={o.id}
                      layout
                      role="radio"
                      aria-checked={on}
                      onClick={() => setPay(o.id)}
                      whileTap={{ scale: 0.985 }}
                      className={`relative flex items-center gap-3 rounded-2xl border-2 px-3 py-2.5 text-left transition-colors ${on ? "" : "border-black/6 hover:border-black/15"}`}
                      style={on ? { borderColor: t.c, background: t.soft } : {}}
                    >
                      {o.badge && (
                        <span className="absolute -top-2.5 left-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: t.c }}>
                          {o.badge}
                        </span>
                      )}
                      <o.icon className="size-5 shrink-0" style={{ color: t.c }} />
                      <span className="flex-1 leading-tight">
                        <span className="block text-sm font-semibold">{o.title}</span>
                        <span className="block text-[11px] text-muted">{o.sub}</span>
                      </span>
                      <span className="text-right">
                        {o.strike && <span className="block text-[11px] text-muted line-through">{o.strike}</span>}
                        <motion.span key={o.price} initial={{ opacity: 0.4, y: 4 }} animate={{ opacity: 1, y: 0 }} className="block text-sm font-bold" style={{ color: on ? t.c : undefined }}>
                          {o.price}
                        </motion.span>
                      </span>
                      <span className={`grid size-4 place-items-center rounded-full border-2 ${on ? "border-transparent" : "border-black/20"}`} style={on ? { background: t.c } : {}}>
                        {on && <Check className="size-3 text-white" strokeWidth={3} />}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* summary */}
              <div className="mt-4 rounded-2xl bg-black/[.03] p-3 text-xs">
                <div className="flex justify-between text-muted">
                  <span>Subtotal ({b.units} item{b.units > 1 ? "s" : ""})</span>
                  <span>{fmt(subtotal)}</span>
                </div>
                {pay === "prepaid" && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Prepaid discount ({prepaidOff}%)</span>
                    <span>-{fmt(subtotal - totals.prepaid)}</span>
                  </div>
                )}
                {pay === "cod" && codFee > 0 && (
                  <div className="flex justify-between text-muted">
                    <span>COD fee</span>
                    <span>+{fmt(codFee)}</span>
                  </div>
                )}
                <div className="flex justify-between text-muted">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-700">FREE</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between border-t border-black/5 pt-2 text-sm font-bold">
                  <span>Total</span>
                  <motion.span key={total} initial={{ scale: 1.08 }} animate={{ scale: 1 }} style={{ color: t.c }}>
                    {fmt(total)}
                  </motion.span>
                </div>
                {pay === "partial" && (
                  <div className="mt-1 flex justify-between text-[11px] text-muted">
                    <span>Pay now</span>
                    <span className="font-semibold text-fg">{fmt(payNow)}</span>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep("otp")}
                className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold text-white shadow-lg"
                style={{ background: t.c }}
              >
                {pay === "cod" ? "Place COD order" : pay === "partial" ? `Pay ${fmt(payNow)} & place order` : "Pay & complete order"}
                <ChevronRight className="size-4" />
              </motion.button>
              <p className="mt-2 text-center text-[10px] text-muted">Try it: switch themes, bundles and payment. It&apos;s live.</p>
            </motion.div>
          )}

          {step === "otp" && (
            <motion.div key="otp" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center gap-4 p-8 text-center">
              <div className="relative grid size-16 place-items-center">
                <span className="absolute inset-0 rounded-full animate-pulse-ring" style={{ background: t.soft, border: `2px solid ${t.c}` }} />
                <ShieldCheck className="relative size-8" style={{ color: t.c }} />
              </div>
              <div>
                <p className="text-base font-bold">Verify your phone</p>
                <p className="text-xs text-muted">Enter the OTP sent to +91 98765 43210</p>
              </div>
              <div className="flex gap-2">
                {"247163".split("").map((d, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.18 }}
                    className="grid size-10 place-items-center rounded-xl border-2 text-base font-bold"
                    style={{ borderColor: t.c }}
                  >
                    {d}
                  </motion.span>
                ))}
              </div>
              <p className="text-[11px] text-muted">Blocks fake numbers &amp; bot orders before they cost you a shipment.</p>
            </motion.div>
          )}

          {step === "done" && (
            <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-3 p-8 text-center">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 18 }} className="grid size-16 place-items-center rounded-full bg-emerald-500 text-white">
                <Check className="size-8" strokeWidth={3} />
              </motion.div>
              <p className="text-base font-bold">Order confirmed</p>
              <p className="text-xs text-muted">
                {pay === "prepaid" && `Paid ${fmt(total)}. Verified & pixel-tracked.`}
                {pay === "partial" && `${fmt(payNow)} collected now, ${fmt(totals.partialLater)} on delivery.`}
                {pay === "cod" && `COD order verified by OTP. ${fmt(total)} on delivery.`}
              </p>
              <div className="mt-1 w-full rounded-2xl border border-dashed p-3 text-left text-xs" style={{ borderColor: t.c, background: t.soft }}>
                <p className="font-semibold">Wait! Add earbuds for ₹1,499? <span className="text-muted line-through">₹3,999</span></p>
                <p className="text-[10px] text-muted">Post-purchase upsell · one tap, no re-entry</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* merchant controls */}
      <AnimatePresence>
        {controls && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 grid gap-3 rounded-2xl border border-line bg-ink p-4 text-white">
              <p className="text-xs font-semibold text-white/70">What you control from Shopify admin</p>
              <Slider label="Prepaid discount" v={prepaidOff} set={setPrepaidOff} min={0} max={30} unit="%" />
              <Slider label="Partial amount now" v={partialPct} set={setPartialPct} min={5} max={60} step={5} unit="%" />
              <Slider label="COD fee" v={codFee} set={setCodFee} min={0} max={200} step={10} unit="₹" pre />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ icon: Icon, ph, full }: { icon: typeof Phone; ph: string; full?: boolean }) {
  return (
    <div className={`flex items-center gap-2 rounded-xl border border-black/8 px-3 py-2 text-muted ${full ? "col-span-2" : ""}`}>
      <Icon className="size-3.5" style={{ color: "var(--t)" }} />
      <span>{ph}</span>
    </div>
  );
}

function Slider({ label, v, set, min, max, step = 1, unit, pre }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number; unit: string; pre?: boolean }) {
  return (
    <label className="grid gap-1.5 text-xs">
      <span className="flex justify-between">
        <span className="text-white/80">{label}</span>
        <span className="font-bold text-brand-2">{pre ? `${unit}${v}` : `${v}${unit}`}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(+e.target.value)}
        aria-label={label}
        className="h-9 [&::-moz-range-track]:bg-white/20 [&::-webkit-slider-runnable-track]:bg-white/20"
      />
    </label>
  );
}
