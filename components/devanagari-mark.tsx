import Image from "next/image";
import Link from "next/link";

import { InstagramIcon } from "@/components/icons";
import { instagramUrl, site } from "@/lib/site";

import mark from "@/public/images/mark-aks-devanagari.jpg";

/** The closing section: the अक्स mark, with the two quiet links either side. */
export function DevanagariMark() {
  return (
    <section className="bg-[#FEFEFE] px-pad py-[clamp(56px,7vw,96px)]" aria-label="AKS">
      <div className="-mx-pad mt-[calc(-1*clamp(56px,7vw,96px))] h-[clamp(56px,9vw,108px)] bg-black" />

      <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-[34px] pt-[clamp(48px,7vw,96px)] pb-[clamp(28px,4vw,52px)] text-center lap:grid-cols-[1fr_auto_1fr] lap:gap-9 lap:text-left">
        <div className="flex flex-col items-center gap-2.5 text-[0.76em] tracking-[0.22em] uppercase lap:items-start">
          <Link href="/the-reflection" className="border-b border-transparent hover:border-current">
            About us
          </Link>
          <Link href="/contact" className="border-b border-transparent hover:border-current">
            Contact us
          </Link>
        </div>

        <Image
          src={mark}
          alt="अक्स — AKS written in Devanagari"
          className="mx-auto h-auto w-[min(54vw,620px)] max-w-full"
          sizes="(max-width: 1000px) 54vw, 620px"
          placeholder="blur"
        />

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 text-[0.84em] tracking-[0.06em] lap:justify-self-end"
        >
          <InstagramIcon className="size-[19px] flex-none" />
          <span>@{site.instagram}</span>
        </a>
      </div>
    </section>
  );
}
