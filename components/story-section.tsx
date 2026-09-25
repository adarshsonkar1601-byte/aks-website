import Image from "next/image";
import Link from "next/link";

import { formatPrice, notesLine, type Fragrance } from "@/lib/fragrances";
import { cn } from "@/lib/utils";

type StorySectionProps = {
  fragrance: Fragrance;
  /** "full" is the fragrance's own page (and carries the h1). "teaser" is the homepage. */
  variant: "full" | "teaser";
  /** Photograph on the left instead of the right, from 1000px up. */
  flip?: boolean;
  /** Set on the first image of a page so it is not lazy-loaded. */
  priority?: boolean;
};

export function StorySection({
  fragrance,
  variant,
  flip = false,
  priority = false,
}: StorySectionProps) {
  const full = variant === "full";
  const Heading = full ? "h1" : "h2";
  const paragraphs = full ? fragrance.story : fragrance.teaser;
  const href = `/${fragrance.slug}`;

  const photograph = (
    <>
      <Image
        src={fragrance.images.scene}
        alt={fragrance.alt.scene}
        fill
        sizes="(max-width: 1000px) 100vw, 58vw"
        className="object-cover"
        placeholder="blur"
        priority={priority}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-1 scrim-bottom",
          flip ? "lap:scrim-right" : "lap:scrim-left",
        )}
      />
    </>
  );

  return (
    <section className="grid grid-cols-1 bg-ink text-cream lap:min-h-svh lap:grid-cols-[42%_58%]">
      <div
        className={cn(
          "order-2 flex flex-col justify-center px-pad pt-11 pb-18",
          "lap:pt-[clamp(120px,12vw,170px)] lap:pb-[clamp(60px,7vw,90px)]",
          flip
            ? "lap:order-2 lap:pr-pad lap:pl-[clamp(28px,4vw,64px)]"
            : "lap:order-1 lap:pr-[clamp(28px,4vw,64px)] lap:pl-pad",
        )}
      >
        <p className="m-0 mb-1.5 flex items-center gap-4 text-[0.76em] tracking-[0.28em] text-cream-faint uppercase after:h-px after:w-[34px] after:bg-cream-faint after:content-['']">
          {fragrance.region}
        </p>

        <Heading className="m-0 font-display text-[clamp(38px,4.4vw,72px)] leading-none font-normal tracking-[0.02em]">
          {full ? (
            fragrance.name
          ) : (
            <Link href={href} className="hover:opacity-80">
              {fragrance.name}
            </Link>
          )}
        </Heading>

        <p className="mt-3.5 mb-10 text-[0.8em] tracking-[0.32em] text-cream-dim uppercase">
          {fragrance.mood}
        </p>

        <div>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                "mb-5 max-w-none leading-[1.8] text-cream-body mob:max-w-[46ch]",
                index === 0 && "text-[1.12em] text-cream-bright",
                !full && "mb-[18px]",
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {!full && (
          <Link
            href={href}
            className="mt-9 inline-block self-start border-b border-[rgba(239,233,224,0.45)] pb-[7px] text-[0.8em] tracking-[0.22em] text-cream uppercase transition-colors duration-300 hover:border-cream"
          >
            Read the full story
          </Link>
        )}

        <p className="mt-11 border-t border-[rgba(239,233,224,0.25)] pt-[26px] text-[0.76em] tracking-[0.24em] text-cream-note uppercase">
          {notesLine(fragrance)}
          <span className="mt-2 block text-[#9e9083]">
            Eau de parfum · {fragrance.volumeMl} ml
            {full ? "" : ` · ${formatPrice(fragrance.price)}`}
          </span>
        </p>
      </div>

      {full ? (
        <div
          className={cn(
            "relative order-1 h-[54svh] overflow-hidden lap:h-auto",
            flip ? "lap:order-1" : "lap:order-2",
          )}
        >
          {photograph}
        </div>
      ) : (
        <Link
          href={href}
          aria-label={`${fragrance.name} — ${fragrance.region}`}
          className={cn(
            "relative order-1 block h-[54svh] overflow-hidden lap:h-auto",
            flip ? "lap:order-1" : "lap:order-2",
          )}
        >
          {photograph}
        </Link>
      )}
    </section>
  );
}
