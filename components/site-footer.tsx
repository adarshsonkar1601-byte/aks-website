import Link from "next/link";

import { instagramUrl, site, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink px-pad py-[clamp(52px,6vw,80px)] text-[#cfc4b6]">
      <div className="mx-auto flex max-w-shell flex-wrap items-end justify-between gap-x-14 gap-y-7">
        <div>
          <div className="font-display text-[30px] tracking-[0.16em] text-paper">AKS</div>
          <p className="mt-3 max-w-[30ch]">
            Fragrance the Indian way. Bottled in India, in editions of five.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-[26px] text-[0.78em] tracking-[0.2em] uppercase"
        >
          <Link href="/debut-collection" className="hover:text-paper">
            Debut Collection
          </Link>
          <Link href="/the-reflection" className="hover:text-paper">
            The Reflection
          </Link>
          <Link href="/contact" className="hover:text-paper">
            Contact
          </Link>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
          >
            Instagram
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper"
          >
            Order on WhatsApp
          </a>
        </nav>

        <div className="mt-3.5 flex w-full flex-wrap justify-between gap-3 border-t border-[rgba(207,196,182,0.2)] pt-[22px] text-[0.78em] tracking-[0.06em] text-[#8e8275]">
          <span>
            © {year} {site.legalName}
          </span>
          <span>Orders and enquiries on WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
