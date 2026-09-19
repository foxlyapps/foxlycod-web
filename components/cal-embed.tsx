"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Cal.com booking iframe.
 * Lazy by default (mounts when scrolled near) so pages stay light on mobile;
 * pass `eager` inside the modal, where the user has already asked for it.
 * Always keeps a plain link fallback in case the iframe is blocked.
 */
export function CalEmbed({
  src = site.book,
  eager = false,
  className = "",
  frameClassName = "min-h-[640px] rounded-3xl border border-line sm:min-h-[720px]",
}: {
  src?: string;
  eager?: boolean;
  className?: string;
  frameClassName?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  // No IntersectionObserver (old browsers, some in-app webviews)? Load eagerly.
  const [mount, setMount] = useState(
    () => eager || (typeof window !== "undefined" && !("IntersectionObserver" in window)),
  );
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (mount || !el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMount(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mount]);

  const url = `${src}${src.includes("?") ? "&" : "?"}embed=true&layout=month_view&theme=light`;

  return (
    <div ref={box} data-cal-embed className={`relative w-full ${className}`}>
      <div className={`relative w-full overflow-hidden bg-white ${frameClassName}`}>
        {mount && (
          <iframe
            src={url}
            title="Book your free Foxly demo call"
            loading={eager ? "eager" : "lazy"}
            onLoad={() => setReady(true)}
            className="absolute inset-0 size-full"
            style={{ border: 0 }}
            allow="camera; microphone; fullscreen; payment"
          />
        )}
        {!ready && (
          <div className="absolute inset-0 grid place-items-center text-sm text-muted">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="size-5 animate-spin text-brand" />
              Loading available slots…
            </div>
          </div>
        )}
      </div>
      <p className="mt-4 text-center text-sm text-muted">
        Calendar not loading?{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
        >
          Open the booking page <ExternalLink className="size-3.5" />
        </a>
      </p>
    </div>
  );
}
