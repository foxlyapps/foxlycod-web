"use client";

import { usePathname } from "next/navigation";
import { ShieldCheck, Zap, BadgePercent, CalendarCheck } from "lucide-react";
import { Container, Button, BookButton, Reveal } from "./ui";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[28px] bg-ink px-5 py-14 text-center text-white sm:rounded-[40px] sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full bg-brand/40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -right-20 size-96 rounded-full bg-brand-2/30 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grain opacity-[.15]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[1.875rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Your next COD order could be a <span className="text-gradient">paid order.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/70 text-pretty sm:mt-5 sm:text-lg">
              Book 30 free minutes. We show you the plugin, learn how your store sells, then set up your form and your
              prepaid offer with you on the call.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center">
              <BookButton size="lg" source="final-cta">
                Book my free demo
              </BookButton>
              <Button
                href={site.install}
                external
                size="lg"
                variant="ghost"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
              >
                Or install it free yourself
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              <li className="flex items-center gap-1.5"><CalendarCheck className="size-4 text-brand-2" /> 30 min, no card</li>
              <li className="flex items-center gap-1.5"><BadgePercent className="size-4 text-brand-2" /> 0% commission</li>
              <li className="flex items-center gap-1.5"><Zap className="size-4 text-brand-2" /> Setup done with you</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-brand-2" /> Uninstall anytime</li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function StickyCta() {
  const path = usePathname();
  const focus = path === "/book-demo";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <div className="glass flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 shadow-[0_-10px_40px_-20px_rgba(20,11,7,.4)]">
        <div className="text-xs leading-tight">
          <p className="flex items-center gap-1 font-bold">
            <CalendarCheck className="size-3.5 text-brand" /> Free 30-min call
          </p>
          <p className="text-muted">{focus ? "No cost · No commitment" : "We set it up with you"}</p>
        </div>
        <BookButton source="sticky-mobile">Book now</BookButton>
      </div>
    </div>
  );
}
