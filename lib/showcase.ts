export type ShowcaseItem = { id: string; eyebrow: string; title: string; body: string; bullets: string[]; img: string; alt: string };

export const showcase: ShowcaseItem[] = [
  {
    id: "design",
    eyebrow: "AI form designer",
    title: "A branded checkout that matches your store. In one click.",
    body: "Foxly reads your theme and generates a form in your colors, fonts and radius. Or start from 14 templates and tweak anything.",
    bullets: ["AI-generated theme match", "14 pre-built templates", "Custom fields, layouts, buttons & messages", "Your logo on every loading screen"],
    img: "/screens/ai-design.webp",
    alt: "Foxly AI designer generating three branded order forms",
  },
  {
    id: "upsells",
    eyebrow: "Upsells & downsells",
    title: "Raise order value before, during and after the order.",
    body: "Show the right offer at the right moment: upgrade before ordering, add-on during, downsell after a decline. One tap, no re-entry.",
    bullets: ["Pre-order upsell", "In-form frequently-bought-together", "Post-purchase downsell", "Quantity bundles with tiered savings"],
    img: "/screens/upsells.webp",
    alt: "Foxly upsell offers before, during and after an order",
  },
  {
    id: "fraud",
    eyebrow: "OTP & fraud protection",
    title: "Block fake orders before they cost you a shipment.",
    body: "Real-time OTP on the phone number, plus blocking by IP, phone, email and postal code. Bots and serial refusers never reach your warehouse.",
    bullets: ["Instant OTP verification", "IP, phone, email & PIN blocklists", "Address validation", "COD show/hide by risk rules"],
    img: "/screens/otp.webp",
    alt: "Foxly OTP verification flow",
  },
  {
    id: "pixels",
    eyebrow: "Multi-pixel tracking",
    title: "Every order form conversion, attributed correctly.",
    body: "Custom forms usually break ad tracking. Foxly fires InitiateCheckout, AddPaymentInfo and Purchase to every pixel you run.",
    bullets: ["Meta, Google, TikTok, Snapchat", "Pinterest, Taboola, Kwai", "Server-side accuracy for the events that matter", "Add a pixel in 10 seconds"],
    img: "/screens/pixels.webp",
    alt: "Foxly pixel tracking dashboard",
  },
];
