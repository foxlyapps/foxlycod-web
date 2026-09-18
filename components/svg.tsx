"use client";

import { motion } from "motion/react";

const draw = (delay = 0) => ({
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { pathLength: { duration: 1.4, delay, ease: "easeInOut" as const }, opacity: { duration: 0.2, delay } },
});

/** Animated flow: one form → three payment rails → paid orders */
export function PaymentFlowSvg({ className = "" }: { className?: string }) {
  const rails = [
    { y: 60, c: "#0f9d58", label: "Prepaid", sub: "−10% · paid now" },
    { y: 150, c: "#1f5eff", label: "Partial", sub: "20% now · rest on delivery" },
    { y: 240, c: "#ff4d12", label: "COD", sub: "+fee · OTP verified" },
  ];
  return (
    <svg viewBox="0 0 640 300" className={className} role="img" aria-label="One order form routing to prepaid, partial and COD">
      <defs>
        <linearGradient id="fg" x1="0" x2="1">
          <stop offset="0" stopColor="#ff4d12" />
          <stop offset="1" stopColor="#ff8a00" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* form */}
      <motion.rect x="20" y="90" width="150" height="120" rx="18" fill="white" stroke="url(#fg)" strokeWidth="2" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} />
      {[115, 140, 165].map((y, i) => (
        <motion.rect key={y} x="36" y={y} width={i === 2 ? 70 : 118} height="12" rx="6" fill="#ffe9de" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }} style={{ transformOrigin: "36px 0" }} />
      ))}
      <motion.rect x="36" y="186" width="118" height="14" rx="7" fill="url(#fg)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }} />
      <text x="95" y="80" textAnchor="middle" fontSize="12" fontWeight="700" fill="#140b07">One branded form</text>

      {rails.map((r, i) => (
        <g key={r.label}>
          <motion.path d={`M170 150 C 260 150, 260 ${r.y}, 350 ${r.y}`} fill="none" stroke={r.c} strokeWidth="2.5" strokeLinecap="round" {...draw(0.6 + i * 0.2)} />
          {/* travelling dot */}
          <motion.circle r="5" fill={r.c} filter="url(#glow)" initial={{ offsetDistance: "0%", opacity: 0 }} animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }} transition={{ duration: 2.2, delay: 1.6 + i * 0.4, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }} style={{ offsetPath: `path("M170 150 C 260 150, 260 ${r.y}, 350 ${r.y}")` }} />
          <motion.g initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 1.6 + i * 0.2 }}>
            <rect x="350" y={r.y - 26} width="180" height="52" rx="14" fill="white" stroke={r.c} strokeWidth="1.5" />
            <circle cx="374" cy={r.y} r="8" fill={r.c} />
            <path d={`M370 ${r.y} l3 3 l6 -6`} stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            <text x="392" y={r.y - 4} fontSize="13" fontWeight="700" fill="#140b07">{r.label}</text>
            <text x="392" y={r.y + 13} fontSize="10" fill="#6b5a52">{r.sub}</text>
          </motion.g>
          <motion.path d={`M530 ${r.y} C 560 ${r.y}, 570 150, 600 150`} fill="none" stroke={r.c} strokeWidth="2" strokeDasharray="4 5" {...draw(1.8 + i * 0.15)} />
        </g>
      ))}
      <motion.g initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.4, type: "spring", stiffness: 200, damping: 14 }} style={{ transformOrigin: "610px 150px" }}>
        <circle cx="610" cy="150" r="24" fill="url(#fg)" />
        <path d="M600 150 l7 7 l14 -14" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <text x="610" y="195" textAnchor="middle" fontSize="11" fontWeight="600" fill="#140b07">Real orders</text>
    </svg>
  );
}

/** Shield with orbiting fraud signals being blocked */
export function ShieldSvg({ className = "" }: { className?: string }) {
  const threats = [
    { a: 0, l: "Fake phone" },
    { a: 72, l: "Bot IP" },
    { a: 144, l: "Bad PIN" },
    { a: 216, l: "Dup email" },
    { a: 288, l: "No OTP" },
  ];
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Fraud signals blocked by OTP verification shield">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff4d12" />
          <stop offset="1" stopColor="#ff8a00" />
        </linearGradient>
      </defs>
      {[150, 120, 90].map((r, i) => (
        <motion.circle key={r} cx="200" cy="200" r={r} fill="none" stroke="#ff4d12" strokeOpacity={0.12 + i * 0.06} strokeWidth="1.5" initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.8 }} style={{ transformOrigin: "200px 200px" }} />
      ))}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "200px 200px" }}>
        {threats.map((t) => {
          const rad = (t.a * Math.PI) / 180;
          const x = Math.round((200 + Math.cos(rad) * 150) * 100) / 100;
          const y = Math.round((200 + Math.sin(rad) * 150) * 100) / 100;
          return (
            <g key={t.l}>
              <motion.g animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: `${x}px ${y}px` }}>
                <rect x={x - 34} y={y - 13} width="68" height="26" rx="13" fill="white" stroke="#f43f5e" strokeWidth="1.5" />
                <line x1={x - 24} y1={y - 5} x2={x - 14} y2={y + 5} stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                <line x1={x - 14} y1={y - 5} x2={x - 24} y2={y + 5} stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                <text x={x - 8} y={y + 4} fontSize="10" fontWeight="600" fill="#140b07">{t.l}</text>
              </motion.g>
            </g>
          );
        })}
      </motion.g>
      <motion.path
        d="M200 120 l60 24 v50 c0 40 -30 66 -60 80 c-30 -14 -60 -40 -60 -80 v-50 z"
        fill="url(#sg)"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 160, damping: 14, delay: 0.3 }}
        style={{ transformOrigin: "200px 200px" }}
      />
      <motion.path d="M178 198 l16 16 l30 -34" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" {...draw(0.9)} />
    </svg>
  );
}

/** Pixel network: order → fanned-out platforms */
export function PixelSvg({ className = "" }: { className?: string }) {
  const nodes = ["Meta", "Google", "TikTok", "Snap", "Pinterest", "Taboola", "Kwai"];
  return (
    <svg viewBox="0 0 520 260" className={className} role="img" aria-label="Order events sent to every ad pixel">
      <defs>
        <linearGradient id="pg" x1="0" x2="1">
          <stop offset="0" stopColor="#ff4d12" />
          <stop offset="1" stopColor="#ff8a00" />
        </linearGradient>
      </defs>
      <motion.rect x="20" y="100" width="120" height="60" rx="16" fill="url(#pg)" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} />
      <text x="80" y="126" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">Purchase</text>
      <text x="80" y="143" textAnchor="middle" fontSize="10" fill="white" opacity="0.85">₹957 · 3 items</text>
      {nodes.map((n, i) => {
        const y = 24 + i * 36;
        const d = `M140 130 C 260 130, 260 ${y}, 380 ${y}`;
        return (
          <g key={n}>
            <motion.path d={d} fill="none" stroke="#ff4d12" strokeOpacity="0.35" strokeWidth="1.5" {...draw(0.2 + i * 0.08)} />
            <motion.circle r="4" fill="#ff4d12" initial={{ offsetDistance: "0%", opacity: 0 }} animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }} transition={{ duration: 1.6, delay: 1 + i * 0.25, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }} style={{ offsetPath: `path("${d}")` }} />
            <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 + i * 0.08 }}>
              <rect x="380" y={y - 14} width="120" height="28" rx="14" fill="white" stroke="rgba(20,11,7,.1)" />
              <circle cx="398" cy={y} r="6" fill="#ff4d12" fillOpacity="0.15" stroke="#ff4d12" />
              <text x="412" y={y + 4} fontSize="11" fontWeight="600" fill="#140b07">{n} pixel</text>
            </motion.g>
          </g>
        );
      })}
    </svg>
  );
}
