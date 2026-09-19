"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { useBooking } from "./booking-modal";

/**
 * Desktop-only floating CTA, site-wide.
 * Appears once the first screenful is scrolled past; hides while an inline
 * calendar is on screen or the booking modal is open, so it never competes
 * with the booker. Mobile uses the bottom StickyCta bar instead.
 */
export function FloatingBookCta() {
  const { open, isOpen } = useBooking();
  const path = usePathname();
  const [pastFold, setPastFold] = useState(false);
  const [calVisible, setCalVisible] = useState(false);

  useEffect(() => {
    const f = () => setPastFold(window.scrollY > window.innerHeight * 0.9);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, [path]);

  // Hide while an inline calendar is on screen (the /book-demo page has two).
  useEffect(() => {
    const cals = Array.from(document.querySelectorAll("[data-cal-embed]"));
    if (!cals.length) return;
    const seen = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) seen.add(e.target);
          else seen.delete(e.target);
        }
        setCalVisible(seen.size > 0);
      },
      { threshold: 0.25 },
    );
    cals.forEach((c) => io.observe(c));
    return () => {
      io.disconnect();
      setCalVisible(false); // next route has its own calendars (or none)
    };
  }, [path]);

  const show = pastFold && !calVisible && !isOpen;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden md:block"
        >
          <button
            type="button"
            onClick={() => open("floating")}
            className="group flex items-center gap-4 rounded-full bg-ink py-2.5 pl-5 pr-2.5 text-white shadow-[0_20px_50px_-15px_rgba(20,11,7,.6)] ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span className="flex items-center gap-2.5">
              <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient">
                <CalendarCheck className="size-4.5" />
                <span className="absolute inset-0 rounded-full bg-brand/50 animate-pulse-ring" />
              </span>
              <span className="text-left leading-tight">
                <span className="block text-sm font-bold">Book your free demo</span>
                <span className="block text-xs text-white/60">30 min · no card · setup included</span>
              </span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
