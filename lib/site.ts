export const site = {
  name: "Foxly",
  tagline: "COD + Partial & Prepaid",
  url: "https://foxlycod.com",
  install: "https://apps.shopify.com/foxly-cod-partial-prepaid",
  demo: "https://vanitydotin.myshopify.com/products/lavender-lemonade-berry-berry-lip-balm-combo",
  reviews: "https://apps.shopify.com/foxly-cod-partial-prepaid/reviews",
  support: "support@redfoxdigital.in",
  developer: "RedFox Digital",
};

export const nav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/calculator", label: "COD Calculator" },
];

export type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  orders: string;
  overage?: string;
  sms: string;
  blurb: string;
  features: string[];
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    orders: "40 orders / month",
    sms: "100 free OTPs (India)",
    blurb: "Everything you need to test COD + Prepaid on real orders.",
    features: [
      "Prepaid, Partial & COD in one form",
      "0% commission on every order",
      "AI one-click branded form designer",
      "14 pre-built form templates",
      "Multi-pixel tracking & fraud rules",
      "Upsells, downsells & bundles",
      "24/7 live chat support",
    ],
  },
  {
    name: "Pro",
    monthly: 6.99,
    yearly: 62.91,
    orders: "450 orders / month",
    overage: "$0.05 per extra order",
    sms: "₹0.80 per SMS (India)",
    blurb: "For growing stores that want prepaid conversion on autopilot.",
    popular: true,
    features: [
      "Everything in Free",
      "450 orders included",
      "Priority chat support",
      "Abandoned cart recovery",
      "OTP verification at scale",
    ],
  },
  {
    name: "Advanced",
    monthly: 24.99,
    yearly: 224.91,
    orders: "10,000 orders / month",
    overage: "$0.05 per extra order",
    sms: "₹0.60 per SMS (India)",
    blurb: "High-volume D2C and dropshipping brands.",
    features: [
      "Everything in Pro",
      "10,000 orders included",
      "Cheaper OTP rates",
      "Advanced fraud blocking (IP, phone, email, PIN)",
      "Custom form fields & layouts",
    ],
  },
  {
    name: "Enterprise",
    monthly: 69.99,
    yearly: 629.99,
    orders: "Unlimited orders",
    sms: "₹0.35 per SMS (India)",
    blurb: "No caps. Your brand only.",
    features: [
      "Everything in Advanced",
      "Unlimited orders, no overage",
      "Remove Foxly branding",
      "Custom code assistance",
      "Lowest OTP rates",
    ],
  },
];

export const faqs = [
  {
    q: "Does Foxly replace Shopify checkout?",
    a: "No. Foxly adds a branded 1-click order form on your product and cart pages. Prepaid and partial payments are collected through Shopify Checkout, so your payment gateways, taxes and order data stay exactly where they are.",
  },
  {
    q: "How does partial payment reduce fake COD orders?",
    a: "A customer who pays even 10-20% upfront has skin in the game. Fake and impulse orders drop sharply, and the remaining balance is collected on delivery like a normal COD order.",
  },
  {
    q: "Is there really 0% commission?",
    a: "Yes. Every plan, including Free, charges 0% commission on Prepaid, Partial and COD orders. You pay a flat plan price plus a small per-order overage above your included volume.",
  },
  {
    q: "Which countries and languages are supported?",
    a: "Foxly works with any Shopify store worldwide and ships in English, Arabic, Hebrew, Spanish, French, German, Italian and Russian, including RTL layouts. OTP SMS pricing shown is for India; contact us for other regions.",
  },
  {
    q: "Will the form match my store design?",
    a: "Yes. The AI designer reads your theme and generates a matching form in one click. Or pick one of 14 templates and fine-tune colors, fonts, fields and layout yourself.",
  },
  {
    q: "Does it work for dropshipping stores?",
    a: "Yes. Foxly is built for both dropshipping and D2C e-commerce stores, with COD show/hide rules by location, cart value and product.",
  },
  {
    q: "How long does setup take?",
    a: "Most merchants are live in under 10 minutes: install, pick a template or hit AI design, set your payment rules, done. 24/7 live chat is there if you get stuck.",
  },
  {
    q: "Can I try it before paying?",
    a: "The Free plan is free forever with 40 orders a month and 100 OTPs. No card required. Upgrade only when the orders are flowing.",
  },
];

export const pixels = ["Meta", "Google", "TikTok", "Snapchat", "Pinterest", "Taboola", "Kwai"];

export const languages = ["English", "Arabic", "Hebrew", "Spanish", "French", "German", "Italian", "Russian"];
