import type { Metadata } from "next";

import { DevanagariMark } from "@/components/devanagari-mark";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <section className="px-pad pt-[clamp(140px,14vw,200px)] pb-[clamp(76px,9vw,140px)]">
        <div className="mx-auto max-w-[760px]">
          <p className="m-0 mb-[18px] text-[0.72em] tracking-[0.26em] text-muted uppercase">
            404
          </p>
          <h1 className="m-0 font-display text-[clamp(34px,4.4vw,62px)] leading-[1.08] font-normal tracking-[0.02em]">
            Nothing here.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[1.12em] leading-[1.75] text-[#3a322b]">
            The page you were looking for has moved or never existed. The five
            fragrances are all one click away.
          </p>
          <div className="mt-12 flex flex-wrap gap-[18px]">
            <ButtonLink href="/debut-collection">See the collection</ButtonLink>
            <ButtonLink href="/" className="border-ink/25 bg-transparent text-ink hover:bg-ink hover:text-paper">
              Back home
            </ButtonLink>
          </div>
        </div>
      </section>

      <DevanagariMark />
    </>
  );
}
