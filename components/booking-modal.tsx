"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, CalendarCheck, Check, Star } from "lucide-react";
import { CalEmbed } from "./cal-embed";

type Ctx = { open: (source?: string) => void; close: () => void; isOpen: boolean };

const BookingCtx = createContext<Ctx | null>(null);

/** Open the booking modal from anywhere. */
export function useBooking() {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error("useBooking must be used inside <BookingProvider>");
  return ctx;
}

const perks = [
  "We show you the plugin, live",
  "We learn how your store sells",
  "We set it up with you on the call",
];

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  // Which CTA opened it — handy later for analytics attribution.
  const [, setSource] = useState<string | undefined>();

  const open = useCallback((source?: string) => {
    setSource(source);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll + close on Escape while the modal is up.
  useEffect(() => {
    if (!isOpen) return;
    const { overflow, paddingRight } = document.body.style;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <BookingCtx.Provider value={{ open, close, isOpen }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Book your free demo call"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-0 w-full max-w-5xl overflow-hidden bg-bg shadow-[0_40px_100px_-20px_rgba(20,11,7,.6)] sm:my-auto sm:max-h-[92vh] sm:rounded-[28px]"
            >
              <button
                onClick={close}
                aria-label="Close booking dialog"
                className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-fg shadow-sm backdrop-blur transition-colors hover:bg-white sm:right-4 sm:top-4"
              >
                <X className="size-5" />
              </button>

              <div className="grid lg:grid-cols-[.85fr_1.15fr] lg:overflow-y-auto">
                {/* value reminder — keeps the offer visible while they pick a slot */}
                <div className="relative overflow-hidden bg-ink px-6 py-6 text-white sm:px-8 sm:py-10 lg:flex lg:flex-col lg:justify-center">
                  <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-brand/40 blur-[100px]" />
                  <div className="pointer-events-none absolute inset-0 grain opacity-[.15]" />
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                      <CalendarCheck className="size-3.5 text-brand-2" /> Free 30-min call
                    </span>
                    <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight text-balance sm:text-3xl">
                      Pick a time. We set up <span className="text-gradient">your store.</span>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-white/70 sm:mt-3">
                      Thirty minutes, no cost, no card. You leave with your order form live and a prepaid offer built to
                      bring in more paid orders.
                    </p>
                    <ul className="mt-6 hidden gap-2.5 text-sm lg:grid">
                      {perks.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-white/85">
                          <Check className="mt-0.5 size-4 shrink-0 text-brand-2" /> {p}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-white/70 lg:mt-6 lg:pt-5">
                      <span className="flex text-brand-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-current" />
                        ))}
                      </span>
                      5.0 on the Shopify App Store
                    </div>
                  </div>
                </div>

                {/* the calendar */}
                <div className="bg-bg p-3 sm:p-5">
                  <CalEmbed
                    eager
                    frameClassName="min-h-[560px] rounded-2xl border border-line sm:min-h-[620px] lg:h-[calc(92vh-7rem)] lg:min-h-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </BookingCtx.Provider>
  );
}
