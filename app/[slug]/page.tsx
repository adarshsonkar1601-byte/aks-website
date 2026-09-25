import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BuySection } from "@/components/buy-section";
import { DevanagariMark } from "@/components/devanagari-mark";
import { FragranceCard, FragranceGrid } from "@/components/fragrance-card";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { StorySection } from "@/components/story-section";
import { fragrances, getFragrance, notesLine } from "@/lib/fragrances";
import {
  breadcrumbSchema,
  graph,
  imageUrl,
  pageSchema,
  productSchema,
} from "@/lib/structured-data";

type Params = { params: Promise<{ slug: string }> };

/** The five fragrance pages are generated at build time. */
export function generateStaticParams() {
  return fragrances.map((fragrance) => ({ slug: fragrance.slug }));
}

/** Any other path under / is a 404, not a page rendered on demand. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const fragrance = getFragrance(slug);

  if (!fragrance) return {};

  const title = `${fragrance.name} — ${fragrance.region}`;
  const path = `/${fragrance.slug}`;

  return {
    title,
    description: fragrance.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | AKS`,
      description: fragrance.metaDescription,
      url: path,
      type: "website",
      images: [
        {
          url: fragrance.images.scene.src,
          width: fragrance.images.scene.width,
          height: fragrance.images.scene.height,
          alt: fragrance.alt.scene,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AKS`,
      description: fragrance.metaDescription,
      images: [imageUrl(fragrance.images.scene)],
    },
    other: {
      "product:price:amount": String(fragrance.price),
      "product:price:currency": "INR",
    },
  };
}

export default async function FragrancePage({ params }: Params) {
  const { slug } = await params;
  const fragrance = getFragrance(slug);

  if (!fragrance) notFound();

  const others = fragrances.filter((item) => item.slug !== fragrance.slug);

  return (
    <>
      <article>
        <StorySection fragrance={fragrance} variant="full" priority />
        <BuySection fragrance={fragrance} />
      </article>

      <section className="px-pad py-[clamp(76px,9vw,140px)]">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <h2 className="m-0 mb-[18px] text-[0.72em] tracking-[0.26em] text-muted uppercase">
              Also in the debut collection
            </h2>
          </Reveal>

          <FragranceGrid className="mt-[clamp(28px,3vw,44px)]">
            {others.map((item) => (
              <Reveal key={item.slug}>
                <FragranceCard fragrance={item} />
              </Reveal>
            ))}
          </FragranceGrid>
        </div>
      </section>

      <DevanagariMark />

      <JsonLd
        data={graph(
          pageSchema({
            type: "ItemPage",
            path: `/${fragrance.slug}`,
            name: `${fragrance.name} — ${fragrance.region} · ${notesLine(fragrance)}`,
            description: fragrance.metaDescription,
            primaryImage: fragrance.images.bottle,
          }),
          productSchema(fragrance),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Debut Collection", path: "/debut-collection" },
            { name: fragrance.name, path: `/${fragrance.slug}` },
          ]),
        )}
      />
    </>
  );
}
