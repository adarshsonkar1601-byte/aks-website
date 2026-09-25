import type { Metadata } from "next";

import { DevanagariMark } from "@/components/devanagari-mark";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { breadcrumbSchema, graph, pageSchema } from "@/lib/structured-data";

const title = "The Reflection — why AKS exists";
const description =
  "Aks means reflection. Why AKS builds fragrance from Indian memory rather than spectacle, and what that means for the five eaux de parfum in the debut collection.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/the-reflection" },
  openGraph: {
    title: `${title} | AKS`,
    description,
    url: "/the-reflection",
    type: "article",
  },
};

export default function TheReflectionPage() {
  return (
    <>
      <section className="px-pad pt-[clamp(140px,14vw,200px)] pb-[clamp(76px,9vw,140px)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <p className="m-0 mb-[18px] text-[0.72em] tracking-[0.26em] text-muted uppercase">
              The reflection
            </p>
          </Reveal>

          <Reveal>
            <h1 className="m-0 font-display text-[clamp(34px,4.4vw,62px)] leading-[1.08] font-normal tracking-[0.02em]">
              Aks means reflection.
            </h1>
          </Reveal>

          <Reveal>
            <div className="mt-7 max-w-[60ch] text-[1.12em] leading-[1.75] text-[#3a322b]">
              <p>
                Most fragrance sold as Indian is sold as spectacle — heavier, louder,
                sweeter, built to announce itself. That is not how India smells to the
                people who live in it.
              </p>
              <p className="mt-6">
                AKS starts from memory instead. A lime cut open in a Kolkata kitchen. Wet
                soil after the first Kerala rain. Mogra on a wet Mumbai evening. Each
                fragrance takes one of those moments and builds outward, so what you wear
                is not a place but the feeling that place left with you.
              </p>
              <p className="mt-6">
                Five fragrances make up the debut collection. Each is an eau de parfum,
                50 ml, bottled in India.
              </p>
              <p className="mt-6">
                Wear it and you don&rsquo;t carry a country. You carry a reflection of
                yourself.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ButtonLink href="/debut-collection" className="mt-12">
              See the collection
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <DevanagariMark />

      <JsonLd
        data={graph(
          pageSchema({
            type: "AboutPage",
            path: "/the-reflection",
            name: title,
            description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "The Reflection", path: "/the-reflection" },
          ]),
        )}
      />
    </>
  );
}
