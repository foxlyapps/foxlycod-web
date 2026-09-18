import { ShieldCheck, Zap, BadgePercent } from "lucide-react";
import { Container, Button, Reveal } from "./ui";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[40px] bg-ink px-6 py-16 text-center text-white sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-brand/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 size-96 rounded-full bg-brand-2/30 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grain opacity-[.15]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              Your next COD order could be a <span className="text-gradient">paid order.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70 text-pretty">
              Install in 2 minutes. Pick a template or let AI match your theme. Set your rules. Watch prepaid share climb.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={site.install} external size="lg" arrow>
                Install free on Shopify
              </Button>
              <Button href={site.demo} external size="lg" variant="ghost" className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40">
                Try the live demo store
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <li className="flex items-center gap-1.5"><BadgePercent className="size-4 text-brand-2" /> 0% commission</li>
              <li className="flex items-center gap-1.5"><Zap className="size-4 text-brand-2" /> No card required</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-brand-2" /> Uninstall anytime</li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <div className="glass flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 shadow-[0_-10px_40px_-20px_rgba(20,11,7,.4)]">
        <div className="text-xs leading-tight">
          <p className="font-bold">Free to install</p>
          <p className="text-muted">40 orders/mo · 0% commission</p>
        </div>
        <Button href={site.install} external arrow>
          Install
        </Button>
      </div>
    </div>
  );
}
