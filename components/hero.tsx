import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import heroCollection from "@/public/images/newAksBg1.jpeg";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-[#F3D5B7]">
      {/* Hero background image */}
      <Image
        src={heroCollection}
        alt="AKS luxury fragrance collection featuring five signature perfumes"
        fill
        sizes="100vw"
        placeholder="blur"
        priority
        className="-z-20 object-cover object-[62%_center] md:object-center"
      />

      {/* Warm overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#F6DCC2]/95 via-[#F6DCC2]/80 to-transparent md:from-[#F6DCC2]/95 md:via-[#F6DCC2]/65 md:to-transparent" />

      {/* Subtle bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-black/15 to-transparent" />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-[1600px] px-6 py-20 sm:px-10 md:px-14 lg:px-20">
        <div className="w-full max-w-[650px] text-center md:text-left">
          {/* Brand identity */}
          {/* <div className="mb-12 md:mb-14">
            <Link
              href="/"
              aria-label="AKS Fragrance home"
              className="inline-block"
            >
              <span className="block font-display text-6xl leading-none tracking-[0.02em] text-[#111111] sm:text-7xl">
                AKS
              </span>

              <span className="mt-2 block font-display text-sm italic tracking-wide text-[#30251E] sm:text-base">
                Reflect your unique presence.
              </span>
            </Link>

            <div className="mx-auto mt-6 h-px w-14 bg-[#6C4A37] md:mx-0" />
          </div> */}

          {/* Headline */}
          <h1 className="font-display text-[clamp(38px,5.1vw,76px)] font-normal uppercase leading-[0.98] tracking-[-0.035em] text-[#17110F]">
            Fragrance,
            <br />
            <span className="text-[#65180F]">the Indian way.</span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-7 font-display text-[clamp(20px,2vw,30px)] italic leading-[1.35] text-[#30231D]">
            Five fragrances. Five places.
            <br />
            One reflection of you.
          </p>

          {/* Call to action */}
          <div className="mt-9">
            <Link
              href="/debut-collection"
              className="group inline-flex min-h-[62px] min-w-[270px] items-center justify-center gap-6 border-2 border-[#65180F] bg-[#65180F] px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-[#FFF6EC] shadow-lg transition-all duration-300 hover:bg-transparent hover:text-[#65180F] sm:min-w-[340px] sm:text-base"
            >
              <span>Explore Now</span>

              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Website address */}
          {/* <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
            <span className="h-px w-10 bg-[#6C4A37]/60" />

            <Link
              href="/"
              className="font-display text-sm tracking-wide text-[#30251E] transition-colors hover:text-[#65180F]"
            >
              aksfragrance.in
            </Link>

            <span className="h-px w-10 bg-[#6C4A37]/60" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
