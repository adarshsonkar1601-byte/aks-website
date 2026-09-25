import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    // Modern formats first — smaller files, better Core Web Vitals.
    formats: ["image/avif", "image/webp"],
    // A year of caching for optimised images.
    minimumCacheTTL: 31_536_000,
  },

  // Keep the old flat .html URLs alive. Anything already indexed or linked
  // from elsewhere lands on the new clean URL with a permanent redirect,
  // so the ranking signal follows it across.
  async redirects() {
    const pages = [
      ["/index.html", "/"],
      ["/debut-collection.html", "/debut-collection"],
      ["/the-reflection.html", "/the-reflection"],
      ["/contact.html", "/contact"],
      ["/gondhoraj.html", "/gondhoraj"],
      ["/first-rain.html", "/first-rain"],
      ["/gul.html", "/gul"],
      ["/jalsa.html", "/jalsa"],
      ["/thaat.html", "/thaat"],
      // blocks.html was an internal copy-paste reference, never a real page.
      ["/blocks.html", "/"],
    ];

    return pages.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
