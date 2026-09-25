import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4ede3",
    theme_color: "#f4ede3",
    lang: "en-IN",
    icons: [
      { src: "/images/favicon.png", sizes: "256x256", type: "image/png" },
    ],
  };
}
