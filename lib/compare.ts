export type Cell = true | false | string;
export const compareCols = ["Foxly", "COD King", "Typical COD form apps"] as const;
export const compareRows: { f: string; v: [Cell, Cell, Cell]; note?: string }[] = [
  { f: "Prepaid, Partial & COD in one form", v: [true, true, "COD only"] },
  { f: "Branded 1-click order page (product & cart)", v: [true, "Not listed", true] },
  { f: "AI one-click form designer", v: [true, "Not listed", false] },
  { f: "Pre-built form templates", v: ["14", "Not listed", "Varies"] },
  { f: "Upsells, downsells & bundle offers", v: [true, "Not listed", "Some"] },
  { f: "Pixel tracking platforms", v: ["Meta, Google, TikTok, Snap, Pinterest, Taboola, Kwai", "Meta, Google", "Varies"] },
  { f: "OTP phone verification", v: [true, true, true] },
  { f: "Fraud blocking (IP, phone, email, PIN)", v: [true, true, "Partial"] },
  { f: "COD fee & show/hide rules", v: [true, true, "Partial"] },
  { f: "Abandoned cart recovery", v: [true, true, "Some"] },
  { f: "WhatsApp notifications", v: ["—", true, "Some"] },
  { f: "Languages", v: ["8 incl. Arabic & Hebrew RTL", "Not listed", "Varies"] },
  { f: "Commission on orders", v: ["0%", "Usage-based", "Varies"] },
  { f: "Free plan", v: ["40 orders/mo, forever", true, "Usually"] },
  { f: "Paid plans from", v: ["$6.99/mo", "See their site", "Varies"] },
];
