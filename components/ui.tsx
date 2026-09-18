"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", ...p }: ComponentProps<"div">) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`} {...p} />;
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  ...rest
}: { children: ReactNode; delay?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand ${className}`}
    >
      <span className="size-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

export function Heading({
  eyebrow,
  title,
  sub,
  align = "center",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2";
}) {
  const a = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${a}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="max-w-3xl text-[1.75rem] font-bold leading-[1.15] tracking-tight text-balance sm:text-4xl sm:leading-tight lg:text-5xl">{title}</Tag>
      {sub && <p className="max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">{sub}</p>}
    </Reveal>
  );
}

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "dark";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", size = "md", className = "", external, arrow }: BtnProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 will-change-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
  const sizes = size === "lg" ? "h-13 px-6 text-base sm:px-7" : "h-11 px-5 text-sm";
  const variants = {
    primary: "bg-brand-gradient text-white shadow-[0_10px_30px_-10px_rgba(255,77,18,.7)] hover:shadow-[0_18px_40px_-10px_rgba(255,77,18,.8)] hover:-translate-y-0.5",
    ghost: "border border-line bg-white/60 text-fg hover:bg-white hover:border-fg/20",
    dark: "bg-ink text-white hover:bg-black hover:-translate-y-0.5",
  } as const;
  const cls = `${base} ${sizes} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 blur-sm transition-transform duration-700 group-hover:translate-x-[300%]" />
        </span>
      )}
      <span className="relative">{children}</span>
      {arrow && <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function Card({ className = "", ...p }: ComponentProps<"div">) {
  return (
    <div
      className={`rounded-3xl border border-line bg-white/70 shadow-[0_1px_0_rgba(255,255,255,.8)_inset,0_20px_50px_-30px_rgba(20,11,7,.25)] ${className}`}
      {...p}
    />
  );
}
