import type { Metadata } from "next";

import { DevanagariMark } from "@/components/devanagari-mark";
import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { StorySection } from "@/components/story-section";
import { fragrances } from "@/lib/fragrances";
import { site } from "@/lib/site";
import { collectionSchema, graph, pageSchema } from "@/lib/structured-data";

import heroCollection from "@/public/images/hero-collection.jpg";

export const metadata: Metadata = {
  title: `${site.name} — Fragrance the Indian Way`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* The five stories, alternating sides. */}
      {fragrances.map((fragrance, index) => (
        <StorySection
          key={fragrance.slug}
          fragrance={fragrance}
          variant="teaser"
          flip={index % 2 === 1}
        />
      ))}

      <DevanagariMark />

      <JsonLd
        data={graph(
          pageSchema({
            type: "WebPage",
            path: "/",
            name: `${site.name} — Fragrance the Indian Way`,
            description: site.description,
            primaryImage: heroCollection,
          }),
          collectionSchema(fragrances),
        )}
      />
    </>
  );
}
