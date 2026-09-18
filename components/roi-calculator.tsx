"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { TrendingDown, TrendingUp, Wallet, PackageX } from "lucide-react";
import { Counter } from "./counter";
import { Button } from "./ui";
import { site } from "@/lib/site";

// ponytail: single-currency (INR), assumption-based model. Ranges below are conservative
// defaults; merchants tune via sliders. Upgrade path: currency toggle + saved presets.
const RTO_DROP = 0.4; // partial+OTP typically cuts RTO 30-50%
const PREPAID_LIFT = 0.25; // share of COD orders that switch to prepaid with a discount
const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export function RoiCalculator({ compact = false }: { compact?: boolean }) {
  const [orders, setOrders] = useState(600);
  const [aov, setAov] = useState(1200);
  const [codShare, setCodShare] = useState(70);
  const [rto, setRto] = useState(25);
  const [shipCost, setShipCost] = useState(160);

  const codOrders = orders * (codShare / 100);
  const rtoOrders = codOrders * (rto / 100);
  const lossNow = rtoOrders * shipCost * 2 + rtoOrders * aov * 0.05; // forward+return shipping + 5% handling/damage
  const rtoAfter = rtoOrders * (1 - RTO_DROP);
  const lossAfter = rtoAfter * shipCost * 2 + rtoAfter * aov * 0.05;
  const saved = lossNow - lossAfter;
  const prepaidCash = codOrders * PREPAID_LIFT * aov;

  return (
    <div className={`grid gap-6 ${compact ? "" : "lg:grid-cols-[1fr_1.1fr]"}`}>
      <div className="grid gap-5 rounded-3xl border border-line bg-white/70 p-6">
        <Range label="Monthly orders" v={orders} set={setOrders} min={50} max={10000} step={50} fmt={(n) => n.toLocaleString()} />
        <Range label="Average order value" v={aov} set={setAov} min={200} max={10000} step={50} fmt={fmt} />
        <Range label="COD share of orders" v={codShare} set={setCodShare} min={10} max={100} step={5} fmt={(n) => n + "%"} />
        <Range label="Current RTO rate" v={rto} set={setRto} min={5} max={60} fmt={(n) => n + "%"} />
        <Range label="Shipping cost per leg" v={shipCost} set={setShipCost} min={40} max={600} step={10} fmt={fmt} />
        <p className="text-[11px] leading-relaxed text-muted">
          Model: RTO cost = 2× shipping + 5% of AOV per returned order. Assumes Foxly cuts RTO by {RTO_DROP * 100}% via OTP + partial
          payment and shifts {PREPAID_LIFT * 100}% of COD orders to prepaid with a discount. Tune the sliders to your numbers.
        </p>
      </div>
      <div className="grid content-start gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Stat icon={PackageX} label="RTO burning per month" tone="bad">
            <Counter to={lossNow} prefix="₹" />
          </Stat>
          <Stat icon={TrendingDown} label="Returned orders / month" tone="bad">
            <Counter to={rtoOrders} />
          </Stat>
          <Stat icon={Wallet} label="Saved with Foxly / month" tone="good">
            <Counter to={saved} prefix="₹" />
          </Stat>
          <Stat icon={TrendingUp} label="Cash collected upfront" tone="good">
            <Counter to={prepaidCash} prefix="₹" />
          </Stat>
        </div>
        <motion.div layout className="rounded-3xl bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Yearly, that is roughly</p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
            <Counter to={saved * 12} prefix="₹" />
          </p>
          <p className="mt-1 text-sm text-white/70">
            back in your margin. Foxly Pro costs $6.99/month. Free plan costs nothing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={site.install} external arrow>
              Stop the bleed, install free
            </Button>
            {!compact && (
              <Button href="/pricing" variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40">
                See pricing
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Range({ label, v, set, min, max, step = 1, fmt }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number; fmt: (n: number) => string }) {
  return (
    <label className="grid gap-2">
      <span className="flex items-baseline justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-bold text-brand">{fmt(v)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} className="w-full accent-[var(--brand)]" />
    </label>
  );
}

function Stat({ icon: Icon, label, tone, children }: { icon: typeof Wallet; label: string; tone: "good" | "bad"; children: React.ReactNode }) {
  const c = tone === "good" ? "text-emerald-600 bg-emerald-50" : "text-rose-600 bg-rose-50";
  return (
    <div className="rounded-3xl border border-line bg-white/70 p-5">
      <span className={`inline-grid size-9 place-items-center rounded-xl ${c}`}>
        <Icon className="size-4" />
      </span>
      <p className="mt-3 text-2xl font-bold tracking-tight">{children}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}
