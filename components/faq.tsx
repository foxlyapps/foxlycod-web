import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function Faq({ items = faqs }: { items?: typeof faqs }) {
  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-line bg-white/70 open:bg-white open:shadow-[0_20px_40px_-30px_rgba(20,11,7,.3)] transition-all">
          <summary className="flex items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold">
            {f.q}
            <Plus className="chev size-5 shrink-0 text-brand transition-transform duration-300" />
          </summary>
          <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqJsonLd({ items = faqs }: { items?: typeof faqs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
