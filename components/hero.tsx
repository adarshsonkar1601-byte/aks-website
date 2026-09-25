import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import heroCollection from "@/public/images/hero-collection.jpg";

/**
 * The homepage hero.
 *
 * The headline is real text sitting on top of the photograph, not part of it,
 * so it is the page's h1, it reflows on a phone and Google can read it.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-ink tab:justify-end">
      <Image
        src={heroCollection}
        alt="The AKS debut collection — five eaux de parfum on stone"
        fill
        sizes="100vw"
        placeholder="blur"
        priority
        className="-z-20 object-cover object-[58%_center] tab:object-center"
      />

      {/* Keeps the type readable whatever the photograph is doing underneath. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(20,16,13,0.68)_0%,rgba(20,16,13,0.34)_52%,rgba(20,16,13,0.58)_100%)] tab:bg-[linear-gradient(100deg,rgba(20,16,13,0.46)_0%,rgba(20,16,13,0.10)_52%,rgba(20,16,13,0.02)_100%)]" />

      <div className="px-pad pt-24 pb-12 tab:pt-0 tab:pb-[clamp(90px,32svh,340px)]">
        <h1 className="m-0 font-display text-[clamp(38px,6.15vw,150px)] leading-[0.98] tracking-[0.005em] text-paper uppercase">
          Fragrance the Indian way
        </h1>

        <p className="mt-[clamp(24px,3.4vw,52px)] text-[clamp(17px,1.35vw,25px)] leading-[1.45] text-paper/90 italic">
          Places. Moments.
          <br />
          Emotions. In a bottle.
        </p>

        <div className="mt-[clamp(18px,2vw,30px)] h-px w-[38px] bg-paper/55" />

        <Link
          href="/debut-collection"
          className="group mt-[clamp(18px,2.2vw,32px)] inline-flex items-center gap-4 border-b border-paper/35 pb-2.5 text-[0.78em] tracking-[0.24em] text-paper uppercase transition-colors duration-300 hover:border-paper"
        >
          Explore the collection
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}
