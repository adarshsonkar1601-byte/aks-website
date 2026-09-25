import type { StaticImageData } from "next/image";

import { absoluteUrl, instagramUrl, site, whatsappUrl } from "@/lib/site";
import { type Fragrance, notesLine } from "@/lib/fragrances";

import mark from "@/public/images/mark-aks-devanagari.jpg";

/** Static imports give a path like /_next/static/media/x.jpg — schema.org wants an absolute URL. */
export function imageUrl(image: StaticImageData) {
  return absoluteUrl(image.src);
}

const brandId = absoluteUrl("/#brand");
const websiteId = absoluteUrl("/#website");

/**
 * The brand itself. Emitted once, in the root layout, so every page on the
 * site can reference it by @id instead of repeating it.
 */
export function organizationSchema() {
  return {
    "@type": ["Organization", "Brand"],
    "@id": brandId,
    name: site.name,
    legalName: site.legalName,
    alternateName: "अक्स",
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: imageUrl(mark),
      width: mark.width,
      height: mark.height,
    },
    email: site.email,
    sameAs: [instagramUrl],
    areaServed: { "@type": "Country", name: "India" },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        url: whatsappUrl(),
        email: site.email,
        availableLanguage: ["en", "hi"],
        areaServed: "IN",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": brandId },
  };
}

export function productSchema(fragrance: Fragrance) {
  return {
    "@type": "Product",
    "@id": absoluteUrl(`/${fragrance.slug}#product`),
    name: fragrance.name,
    description: fragrance.metaDescription,
    category: "Eau de Parfum",
    url: absoluteUrl(`/${fragrance.slug}`),
    image: [
      imageUrl(fragrance.images.bottle),
      imageUrl(fragrance.images.tile),
      imageUrl(fragrance.images.scene),
    ],
    brand: { "@id": brandId },
    countryOfOrigin: { "@type": "Country", name: "India" },
    size: `${fragrance.volumeMl} ml`,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Fragrance notes", value: notesLine(fragrance) },
      { "@type": "PropertyValue", name: "Inspiration", value: fragrance.region },
      { "@type": "PropertyValue", name: "Mood", value: fragrance.mood },
      { "@type": "PropertyValue", name: "Volume", value: `${fragrance.volumeMl} ml` },
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/${fragrance.slug}`),
      price: fragrance.price,
      priceCurrency: site.currency,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": brandId },
      areaServed: { "@type": "Country", name: "India" },
    },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function collectionSchema(fragrances: Fragrance[]) {
  return {
    "@type": "ItemList",
    name: "AKS Debut Collection",
    description: "Five eaux de parfum, 50 ml each, inspired by five Indian places.",
    numberOfItems: fragrances.length,
    itemListElement: fragrances.map((fragrance, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/${fragrance.slug}`),
      name: fragrance.name,
    })),
  };
}

export function pageSchema(options: {
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
  path: string;
  name: string;
  description: string;
  primaryImage?: StaticImageData;
}) {
  return {
    "@type": options.type,
    "@id": absoluteUrl(`${options.path}#page`),
    url: absoluteUrl(options.path),
    name: options.name,
    description: options.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": brandId },
    inLanguage: "en-IN",
    ...(options.primaryImage
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: imageUrl(options.primaryImage),
            width: options.primaryImage.width,
            height: options.primaryImage.height,
          },
        }
      : {}),
  };
}

/** Wrap any number of schema nodes into one @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/**
 * FAQ markup. The question and answer strings passed here are the exact
 * strings rendered on the page — Google's guidelines require that the
 * marked-up content is the content a visitor actually sees.
 */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
