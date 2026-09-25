import type { MetadataRoute } from "next";

import { fragrances } from "@/lib/fragrances";
import { absoluteUrl, site } from "@/lib/site";

/** Served at /sitemap.xml and pointed to from robots.txt. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    /* No trailing slash, so this matches the canonical the homepage emits. */
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: absoluteUrl("/debut-collection"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...fragrances.map((fragrance) => ({
      url: absoluteUrl(`/${fragrance.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: absoluteUrl("/the-reflection"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
