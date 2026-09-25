import type { Metadata } from "next";

import { DevanagariMark } from "@/components/devanagari-mark";
import { FragranceCard, FragranceGrid } from "@/components/fragrance-card";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { fragrances } from "@/lib/fragrances";
import { breadcrumbSchema, collectionSchema, graph, pageSchema } from "@/lib/structured-data";

const title = "Debut Collection — five eaux de parfum";
const description =
  "The AKS debut collection: five eaux de parfum, 50 ml each, inspired by Bengal, Kerala, Kashmir, Mumbai and Rajasthan. ₹999 each, shipped across India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/debut-collection" },
  openGraph: {
    title: `${title} | AKS`,
    description,
    url: "/debut-collection",
    type: "website",
  },
};

export default function DebutCollectionPage() {
  return (
    <>
      <section className="px-pad pt-[clamp(140px,14vw,200px)] pb-[clamp(76px,9vw,140px)]">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <p className="m-0 mb-[18px] text-[0.72em] tracking-[0.26em] text-muted uppercase">
              Debut collection
            </p>
          </Reveal>

          <Reveal>
            <h1 className="m-0 font-display text-[clamp(34px,4.4vw,62px)] leading-[1.08] font-normal tracking-[0.02em]">
              Eau de parfum, 50 ml
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-[60ch] text-[1.12em] leading-[1.75] text-[#3a322b]">
              Five fragrances, each built around one Indian place and the feeling it
              leaves behind. Order any of them on WhatsApp — we&rsquo;ll confirm your
              address and dispatch within two working days.
            </p>
          </Reveal>

          <FragranceGrid>
            {fragrances.map((fragrance) => (
              <Reveal key={fragrance.slug}>
                <FragranceCard fragrance={fragrance} />
              </Reveal>
            ))}
          </FragranceGrid>
        </div>
      </section>

      <DevanagariMark />

      <JsonLd
        data={graph(
          pageSchema({
            type: "CollectionPage",
            path: "/debut-collection",
            name: title,
            description,
          }),
          collectionSchema(fragrances),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Debut Collection", path: "/debut-collection" },
          ]),
        )}
      />
    </>
  );
}
