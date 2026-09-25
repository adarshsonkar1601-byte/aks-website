import Image from "next/image";

import { Accordion } from "@/components/accordion";
import { OrderButton } from "@/components/order-button";
import { formatPrice, notesLine, orderLabel, type Fragrance } from "@/lib/fragrances";

export function BuySection({ fragrance }: { fragrance: Fragrance }) {
  return (
    <section className="grid grid-cols-1 bg-paper text-ink lap:grid-cols-2" id="order">
      <div className="relative h-[62svh] overflow-hidden bg-oxblood lap:h-auto lap:min-h-[60vh]">
        <Image
          src={fragrance.images.bottle}
          alt={fragrance.alt.bottle}
          fill
          sizes="(max-width: 1000px) 100vw, 50vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col justify-center px-pad py-[clamp(56px,7vw,96px)]">
        <p className="m-0 text-[0.72em] tracking-[0.26em] text-muted uppercase">
          Eau de parfum
        </p>

        <h2 className="mt-2 font-display text-[clamp(38px,4.6vw,68px)] leading-none font-normal tracking-[0.03em]">
          {fragrance.name}
        </h2>

        <p className="mt-[26px] text-[1.15em] tracking-[0.06em]">
          {formatPrice(fragrance.price)}
          <span className="mx-3.5 text-muted">|</span>
          {fragrance.volumeMl} ml
        </p>

        <div className="my-[30px] h-px w-[42px] bg-line" />

        <OrderButton item={orderLabel(fragrance)} />

        <p className="mt-[22px] max-w-[36ch] text-[0.86em] text-muted">
          We&rsquo;ll confirm your address and payment on WhatsApp. Dispatch within two
          working days, anywhere in India.
        </p>

        <Accordion
          items={[
            { title: "Inspiration", body: <p>{fragrance.opening}</p> },
            { title: "Notes", body: <p>{notesLine(fragrance)}</p> },
            {
              title: "Size and format",
              body: <p>Eau de parfum, {fragrance.volumeMl} ml. Bottled in India.</p>,
            },
          ]}
        />
      </div>
    </section>
  );
}
