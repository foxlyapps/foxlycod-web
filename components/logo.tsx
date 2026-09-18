import Image from "next/image";
import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Foxly home">
      <Image src="/icon.png" alt="" width={36} height={36} className="size-9 rounded-xl shadow-md" priority />
      <span className="leading-none">
        <span className={`block text-lg font-bold tracking-tight ${dark ? "text-white" : "text-fg"}`}>Foxly</span>
        <span className={`block text-[10px] font-medium tracking-wide ${dark ? "text-white/60" : "text-muted"}`}>
          COD + Partial &amp; Prepaid
        </span>
      </span>
    </Link>
  );
}
