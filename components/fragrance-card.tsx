import Image from "next/image";
import Link from "next/link";

import { formatPrice, type Fragrance } from "@/lib/fragrances";
import { cn } from "@/lib/utils";

export function FragranceCard({ fragrance }: { fragrance: Fragrance }) {
  return (
    <Link href={`/${fragrance.slug}`} className="group block">
      <div className="aspect-square overflow-hidden bg-[#ede5d9]">
        <Image
          src={fragrance.images.tile}
          alt={fragrance.alt.tile}
          sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw"
          placeholder="blur"
          className="size-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
        />
      </div>
      <h3 className="mt-[26px] mb-2 text-center font-display text-[clamp(21px,1.7vw,27px)] tracking-[0.16em]">
        {fragrance.name}
      </h3>
      <p className="m-0 text-center text-[0.76em] tracking-[0.2em] text-muted uppercase">
        {fragrance.region} · {fragrance.mood}
      </p>
      <p className="mt-3 text-center text-[1.02em]">{formatPrice(fragrance.price)}</p>
    </Link>
  );
}

/** The three-up grid the cards sit in. */
export function FragranceGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-[clamp(44px,5vw,72px)] grid grid-cols-1 gap-4 mob:grid-cols-2 lap:grid-cols-3 lap:gap-[clamp(18px,2.4vw,40px)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
