# AKS — website 

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. The whole site is
pre-rendered to static HTML at build time, so every page is as fast as the old
hand-written one — and, unlike the old one, everything a search engine needs is
in that HTML.

---

## 1. Running it

You need Node 20.9 or newer. Once, to install:

```bash
npm install
```

Then, day to day:

```bash
npm run dev     # http://localhost:3000, reloads as you edit
npm run build   # the real build — run this before you publish
npm start       # serve what `npm run build` produced
npm run lint
```

---

## 2. Set your WhatsApp number first

Open `lib/site.ts`. Everything you are likely to change is at the top:

```ts
whatsapp:  "919999999999",          // your number, country code first, digits only
instagram: "_aks_official__",
email:     "hello@aksfragrance.com",
url:       "https://aksfragrance.com",
```

**`whatsapp`** — replace `919999999999` with your real number. For India that is
`91` followed by the 10-digit number, no `+`, no spaces, no dashes. Every "Order
on WhatsApp" button opens a chat with the message already typed, e.g. *"Hello
AKS, I'd like to order GONDHORAJ · Eau de Parfum · 50 ml."* You set it once and
it applies everywhere.

**`url`** — your real domain. Google is told this is the one true address of
every page, so it must be right before you launch. If it ever changes, you can
override it at deploy time with an environment variable called
`NEXT_PUBLIC_SITE_URL` instead of editing the file.

---

## 3. Editing the fragrances

All five live in one file: `lib/fragrances.ts`. Each one is a block like this:

```ts
{
  slug: "gondhoraj",            // the web address: /gondhoraj
  name: "GONDHORAJ",
  region: "Bengal",
  mood: "Brightness",
  opening: "Where the heat meets something unexpectedly fresh.",
  story: [ "...", "..." ],      // the fragrance's own page, paragraph by paragraph
  teaser: [ "...", "..." ],     // the shorter version on the homepage
  notes: ["Gondhoraj lime", "Citrus", "Green notes"],
  price: 999,
  volumeMl: 50,
  images: { scene, tile, bottle },
  alt: { ... },                 // what the photos show, for screen readers and Google
  metaDescription: "...",       // the grey line under the title in search results
}
```

Change the words there and they change everywhere at once — the homepage, the
collection grid, the fragrance page, the pre-filled WhatsApp message, the
sitemap and the Google product listing all read from this one file. There is no
second place to keep in sync.

**Prices** are the `price` field. Change `999` and every place that shows
₹999 follows.

**To add a sixth fragrance**, copy one block, give it a new `slug`, add the three
images (below) and import them at the top of the file. The new page, its grid
card, its sitemap entry and its Google listing all appear on their own.

---

## 4. Images

They live in `public/images/`. To swap one, save your new image with the **exact
same filename** and drop it in. Nothing else needs changing.

| File | Where it appears |
|---|---|
| `hero-collection.jpg` | Homepage hero, and the preview when the site is shared |
| `hero-full.jpg` | Not used on the site any more — kept in case you want it back |
| `tile-*.jpg` | Collection grid, square (900 × 900) |
| `scene-*.jpg` | The large photograph on each fragrance page |
| `bottle-*.jpg` | The bottle shot in the buy section |
| `mark-aks-devanagari.jpg` | The अक्स mark in the closing section |
| `favicon.png` | Browser tab icon (also `app/icon.png`) |

Use the biggest, sharpest version you have. The build resizes each one into
several widths and serves AVIF or WebP to browsers that support them, so a large
original costs visitors nothing.

---

## 5. Other text

| What | Where |
|---|---|
| Homepage hero headline and CTA | `components/hero.tsx` |
| The Reflection page | `app/the-reflection/page.tsx` |
| Contact page intro | `app/contact/page.tsx` |
| The contact questions and answers | `lib/faqs.ts` |
| Footer wording | `components/site-footer.tsx` |
| Menu links | `components/site-header.tsx` |
| Colours and fonts | `app/globals.css`, the `@theme` block at the top |

The questions in `lib/faqs.ts` are written into the page *and* handed to Google
as structured data from the same source, so the two can never disagree.

---

## 6. Pages

```
/                    Homepage — hero, the five stories, अक्स section
/debut-collection    All five fragrances
/gondhoraj           Bengal · Brightness
/first-rain          Kerala · Renewal
/gul                 Kashmir · Desire
/jalsa               Mumbai · Rhythm
/thaat               Rajasthan · Presence
/the-reflection      Brand story
/contact             WhatsApp, email, Instagram, questions
```

The old `.html` addresses still work — `/gul.html` sends visitors and search
engines to `/gul` with a permanent redirect, so no old link or search result
breaks.

`/sitemap.xml`, `/robots.txt` and the site manifest are generated from the same
data and need no maintenance.

---

## 7. Putting it on your domain

**Vercel** is the easiest, as it is made by the people who make Next.js.
Push this folder to GitHub, go to vercel.com/new, pick the repository, press
Deploy. Add your domain under Settings → Domains. HTTPS is automatic.

**Netlify** and **Cloudflare Pages** both run Next.js too. Point them at the
repository; the build command is `npm run build`.

Whichever you use, set the environment variable `NEXT_PUBLIC_SITE_URL` to your
real address (e.g. `https://aksfragrance.com`) and, if you like,
`NEXT_PUBLIC_WHATSAPP` to your number, so neither is baked into the code.

Unlike the old site, you can no longer just drag the folder onto a host — there
is a build step now. That build step is what pre-renders every page.

---

## 8. After you launch

1. Add the site to [Google Search Console](https://search.google.com/search-console).
2. Submit `https://yourdomain.com/sitemap.xml` there.
3. Check a fragrance page in the
   [Rich Results Test](https://search.google.com/test/rich-results) — it should
   report a Product with a price, and a breadcrumb.
4. Run a [PageSpeed](https://pagespeed.web.dev/) check on the homepage.

---

## 9. The old site

The original hand-written HTML, CSS and JavaScript is kept in `legacy/` for
reference. Nothing uses it and nothing is served from it. Delete the folder
whenever you are happy with the new site.
