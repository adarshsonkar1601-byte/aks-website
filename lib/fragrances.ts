import type { StaticImageData } from "next/image";

import sceneGondhoraj from "@/public/images/scene-gondhoraj.jpg";
import sceneFirstRain from "@/public/images/scene-firstrain.jpg";
import sceneGul from "@/public/images/scene-gul.jpg";
import sceneJalsa from "@/public/images/scene-jalsa.jpg";
import sceneThaat from "@/public/images/scene-thaat.jpg";

import tileGondhoraj from "@/public/images/tile-gondhoraj.jpg";
import tileFirstRain from "@/public/images/tile-first-rain.jpg";
import tileGul from "@/public/images/tile-gul.jpg";
import tileJalsa from "@/public/images/tile-jalsa.jpg";
import tileThaat from "@/public/images/tile-thaat.jpg";

import bottleGondhoraj from "@/public/images/bottle-gondhoraj-large.jpg";
import bottleFirstRain from "@/public/images/bottle-first-rain-large.jpg";
import bottleGul from "@/public/images/bottle-gul.jpg";
import bottleJalsa from "@/public/images/bottle-jalsa-large.jpg";
import bottleThaat from "@/public/images/bottle-thaat.jpg";

export type Fragrance = {
  /** URL path, e.g. /gondhoraj */
  slug: string;
  name: string;
  region: string;
  mood: string;
  /** The one-line hook. Doubles as the "Inspiration" answer and the teaser. */
  opening: string;
  /** Full story, paragraph by paragraph, in reading order. */
  story: string[];
  /** The shorter version used on the homepage. */
  teaser: string[];
  notes: string[];
  price: number;
  volumeMl: number;
  images: {
    scene: StaticImageData;
    tile: StaticImageData;
    bottle: StaticImageData;
  };
  alt: {
    scene: string;
    tile: string;
    bottle: string;
  };
  /** Meta description for this page. Under 160 characters. */
  metaDescription: string;
};

export const fragrances: Fragrance[] = [
  {
    slug: "gondhoraj",
    name: "GONDHORAJ",
    region: "Bengal",
    mood: "Brightness",
    opening: "Where the heat meets something unexpectedly fresh.",
    story: [
      "Where the heat meets something unexpectedly fresh.",
      "Bengal in the afternoon can be intense. The heat settles over the streets. The air feels heavy. And then comes the sharp scent of a Gondhoraj lime — cut open, bright and unmistakably fresh.",
      "For a moment, everything changes.",
      "The citrus cuts through the heat. The air feels lighter. The familiar suddenly feels new.",
      "GONDHORAJ captures that moment.",
      "A bright citrus fragrance built around the unmistakable character of Gondhoraj lime — fresh, green and quietly vibrant.",
      "A reflection of Bengal beyond the clichés.",
      "Not the Bengal you expect. The Bengal you remember.",
    ],
    teaser: [
      "Where the heat meets something unexpectedly fresh.",
      "Bengal in the afternoon can be intense. The heat settles over the streets. The air feels heavy. And then comes the sharp scent of a Gondhoraj lime — cut open, bright and unmistakably fresh.",
    ],
    notes: ["Gondhoraj lime", "Citrus", "Green notes"],
    price: 999,
    volumeMl: 50,
    images: { scene: sceneGondhoraj, tile: tileGondhoraj, bottle: bottleGondhoraj },
    alt: {
      scene: "Bengal — the inspiration behind GONDHORAJ",
      tile: "GONDHORAJ eau de parfum — Bengal",
      bottle: "The GONDHORAJ 50 ml eau de parfum bottle",
    },
    metaDescription:
      "GONDHORAJ, an eau de parfum inspired by Bengal. Gondhoraj lime, citrus and green notes. 50 ml, ₹999, bottled in India.",
  },
  {
    slug: "first-rain",
    name: "FIRST RAIN",
    region: "Kerala",
    mood: "Renewal",
    opening: "Where the first rain changes everything.",
    story: [
      "Where the first rain changes everything.",
      "In Kerala, rain doesn't simply arrive. It changes the air. It darkens the earth. Leaves begin to shine, the roads turn quiet, and the scent of wet soil rises with the first drops.",
      "For a moment, everything feels new.",
      "FIRST RAIN captures that moment.",
      "Fresh, green and quietly earthy, it brings together the freshness of rain with the warmth of the earth beneath it.",
      "A fragrance that feels like stepping outside just after the rain has passed. Cool air. Wet earth. Green everywhere.",
      "Not the rain itself. The feeling it leaves behind.",
    ],
    teaser: [
      "Where the first rain changes everything.",
      "In Kerala, rain doesn't simply arrive. It changes the air. It darkens the earth. Leaves begin to shine, the roads turn quiet, and the scent of wet soil rises with the first drops.",
    ],
    notes: ["Fresh green", "Earthy", "Woody"],
    price: 999,
    volumeMl: 50,
    images: { scene: sceneFirstRain, tile: tileFirstRain, bottle: bottleFirstRain },
    alt: {
      scene: "Kerala — the inspiration behind FIRST RAIN",
      tile: "FIRST RAIN eau de parfum — Kerala",
      bottle: "The FIRST RAIN 50 ml eau de parfum bottle",
    },
    metaDescription:
      "FIRST RAIN, an eau de parfum inspired by Kerala. Fresh green, earthy and woody. 50 ml, ₹999, bottled in India.",
  },
  {
    slug: "gul",
    name: "GUL",
    region: "Kashmir",
    mood: "Desire",
    opening: "Where the evening feels like it was meant to last.",
    story: [
      "Where the evening feels like it was meant to last.",
      "Kashmir changes after sunset. The noise fades. The mountains become silhouettes. Windows begin to glow against the cold, and somewhere in the quiet, roses carry through the evening air.",
      "There is something intimate about Kashmir at night — soft, mysterious and impossible to rush.",
      "GUL captures that feeling.",
      "A rich rose accord meets warm, sensual depth, creating a fragrance inspired by Kashmir after dark — romantic without being delicate, expressive without being loud.",
      "A scent for evenings that linger. For glances that stay a little longer. For moments you don't want to forget.",
    ],
    teaser: [
      "Where the evening feels like it was meant to last.",
      "Kashmir changes after sunset. The noise fades. The mountains become silhouettes. Windows begin to glow against the cold, and somewhere in the quiet, roses carry through the evening air.",
    ],
    notes: ["Rose", "Floral", "Warm woods"],
    price: 999,
    volumeMl: 50,
    images: { scene: sceneGul, tile: tileGul, bottle: bottleGul },
    alt: {
      scene: "Kashmir — the inspiration behind GUL",
      tile: "GUL eau de parfum — Kashmir",
      bottle: "The GUL 50 ml eau de parfum bottle",
    },
    metaDescription:
      "GUL, an eau de parfum inspired by Kashmir after dark. Rose, floral and warm woods. 50 ml, ₹999, bottled in India.",
  },
  {
    slug: "jalsa",
    name: "JALSA",
    region: "Mumbai",
    mood: "Rhythm",
    opening: "Mumbai has its own rhythm.",
    story: [
      "Mumbai has its own rhythm.",
      "The first local before sunrise. The sound of shutters opening. Rain against old windows. Conversations spilling onto balconies. The glow of the city long after the sun goes down.",
      "But beneath the rush, there is another Mumbai — the Bombay of old apartments, warm lights, worn wood and evenings that move a little slower.",
      "JALSA captures that rhythm.",
      "A soft floral warmth meets the character of old Bombay — elegant, familiar and quietly magnetic.",
      "Not the Mumbai that tries to impress. The Mumbai that stays with you.",
    ],
    teaser: [
      "Mumbai has its own rhythm.",
      "The first local before sunrise. The sound of shutters opening. Rain against old windows. Conversations spilling onto balconies. The glow of the city long after the sun goes down.",
    ],
    notes: ["Mogra", "Floral", "Warm woods"],
    price: 999,
    volumeMl: 50,
    images: { scene: sceneJalsa, tile: tileJalsa, bottle: bottleJalsa },
    alt: {
      scene: "Mumbai — the inspiration behind JALSA",
      tile: "JALSA eau de parfum — Mumbai",
      bottle: "The JALSA 50 ml eau de parfum bottle",
    },
    metaDescription:
      "JALSA, an eau de parfum inspired by old Bombay. Mogra, floral and warm woods. 50 ml, ₹999, bottled in India.",
  },
  {
    slug: "thaat",
    name: "THAAT",
    region: "Rajasthan",
    mood: "Presence",
    opening: "Where grandeur doesn't ask for attention. It simply stays.",
    story: [
      "Where grandeur doesn't ask for attention. It simply stays.",
      "As the sun begins to fall over Rajasthan, the pink walls catch the last light. The air carries warmth from stone, traces of spice, aged wood and the quiet richness of old rooms. Everything feels still, yet nothing feels empty.",
      "There is a certain presence here — deep, warm and unmistakable.",
      "THAAT captures that presence.",
      "Warm spices meet smooth woods and amber, creating a fragrance that feels like Rajasthan after sunset — rich without excess, familiar yet commanding.",
      "A scent for those who don't need to enter a room loudly. They simply leave a presence behind.",
    ],
    teaser: [
      "Where grandeur doesn't ask for attention. It simply stays.",
      "As the sun begins to fall over Rajasthan, the pink walls catch the last light. The air carries warmth from stone, traces of spice, aged wood and the quiet richness of old rooms. Everything feels still, yet nothing feels empty.",
    ],
    notes: ["Warm spice", "Wood", "Amber"],
    price: 999,
    volumeMl: 50,
    images: { scene: sceneThaat, tile: tileThaat, bottle: bottleThaat },
    alt: {
      scene: "Rajasthan — the inspiration behind THAAT",
      tile: "THAAT eau de parfum — Rajasthan",
      bottle: "The THAAT 50 ml eau de parfum bottle",
    },
    metaDescription:
      "THAAT, an eau de parfum inspired by Rajasthan after sunset. Warm spice, wood and amber. 50 ml, ₹999, bottled in India.",
  },
];

export function getFragrance(slug: string) {
  return fragrances.find((fragrance) => fragrance.slug === slug);
}

export const fragranceSlugs = fragrances.map((fragrance) => fragrance.slug);

/** "₹999" — the same formatting the print copy uses. */
export function formatPrice(price: number) {
  return `₹${price.toLocaleString("en-IN")}`;
}

/** The label that goes into the pre-filled WhatsApp order message. */
export function orderLabel(fragrance: Fragrance) {
  return `${fragrance.name} · Eau de Parfum · ${fragrance.volumeMl} ml`;
}

export function notesLine(fragrance: Fragrance) {
  return fragrance.notes.join(" · ");
}
