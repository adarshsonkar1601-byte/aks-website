import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { graph, organizationSchema, websiteSchema } from "@/lib/structured-data";

import hero from "@/public/images/hero-collection.jpg";

import "./globals.css";

/* next/font downloads both faces at build time and serves them from our own
   origin. No render-blocking request to fonts.googleapis.com, no layout shift
   when they land, and one fewer third party in the critical path. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const title = `${site.name} — Fragrance the Indian Way`;

export const metadata: Metadata = {
  /* Every relative URL below — canonicals, OG images, the sitemap — is
     resolved against this. */
  metadataBase: new URL(site.url),

  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,

  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "shopping",

  keywords: [
    "AKS",
    "AKS fragrance",
    "Indian perfume",
    "eau de parfum India",
    "GONDHORAJ perfume",
    "FIRST RAIN perfume",
    "GUL perfume",
    "JALSA perfume",
    "THAAT perfume",
    "Indian fragrance house",
    "perfume 50 ml",
  ],

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title,
    description: site.description,
    images: [
      {
        url: hero.src,
        width: hero.width,
        height: hero.height,
        alt: "The AKS debut collection — five eaux de parfum",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [hero.src],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* WhatsApp numbers and the 50 ml sizes shouldn't be auto-linked as phone
     numbers by Safari. */
  formatDetection: { telephone: false, address: false, email: false },

  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4ede3",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Marks the document as scripted before anything paints. The scroll
            reveal hides nothing until this class exists, so the page reads
            perfectly with JavaScript off. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
      </body>
    </html>
  );
}
