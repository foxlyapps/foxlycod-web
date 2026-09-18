"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6 ${
          scrolled || open ? "glass shadow-[0_10px_40px_-20px_rgba(20,11,7,.35)]" : "bg-transparent"
        }`}
      >
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-fg/5 ${
                path === n.href ? "text-brand" : "text-fg/80"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button href={site.demo} variant="ghost" external>
            Live demo
          </Button>
          <Button href={site.install} external arrow>
            Install free
          </Button>
        </div>
        <button
          className="grid size-10 place-items-center rounded-full hover:bg-fg/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 flex max-w-7xl flex-col gap-1 rounded-2xl border border-line bg-white/98 p-3 shadow-[0_20px_50px_-20px_rgba(20,11,7,.45)] backdrop-blur-xl md:hidden"
          >
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-base font-medium hover:bg-fg/5">
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button href={site.demo} variant="ghost" external>
                Live demo
              </Button>
              <Button href={site.install} external arrow>
                Install free on Shopify
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
