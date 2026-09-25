/* ============================================================
   AKS — site settings
   EDIT THE VALUES IN `site` BELOW. Nothing else needs touching.
   ============================================================ */

export const site = {
  name: "AKS",
  legalName: "AKS Fragrance",
  tagline: "Fragrance the Indian way",

  /** Canonical domain. Every canonical URL, the sitemap, robots.txt and
   *  every social preview is built from this. Set NEXT_PUBLIC_SITE_URL in
   *  production if the domain ever changes. No trailing slash. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://aksfragrance.com").replace(/\/$/, ""),

  /** WhatsApp number in full international format.
   *  Country code + number, digits only. No +, no spaces.
   *  India example: 919876543210 */
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "918335823764",

  /** Instagram handle, without the @. Mind the underscores: one in front, two behind. */
  instagram: "_aks_official__",

  email: "hello@aksfragrance.com",

  description:
    "AKS is a fragrance house built on Indian memory. Five eaux de parfum inspired by Bengal, Kerala, Kashmir, Mumbai and Rajasthan.",

  /** Used in Product structured data and on every price on the site. */
  currency: "INR",

  /** Verification tokens. Paste the content value from Search Console here. */
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
} as const;

export const instagramUrl = `https://www.instagram.com/${site.instagram}`;
export const emailUrl = `mailto:${site.email}`;

/**
 * A wa.me link with the order message already typed.
 *
 * Unlike the old site, this is resolved at build time, so the real link is
 * in the HTML that crawlers and link previews see — no JavaScript needed.
 */
export function whatsappUrl(item?: string) {
  const message = item
    ? `Hello AKS, I'd like to order ${item}.`
    : "Hello AKS, I'd like to place an order.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Absolute URL for a site-relative path — canonicals, sitemap, JSON-LD. */
export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
