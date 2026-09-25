import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Accordion } from "@/components/accordion";
import { DevanagariMark } from "@/components/devanagari-mark";
import { InstagramIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { OrderButton } from "@/components/order-button";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/faqs";
import { emailUrl, instagramUrl, site } from "@/lib/site";
import { breadcrumbSchema, faqSchema, graph, pageSchema } from "@/lib/structured-data";

const title = "Contact — order on WhatsApp";
const description =
  "Order AKS fragrance, ask about stock, gifting or stockists. A person reads every WhatsApp message, usually within a few hours. We ship across India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | AKS`,
    description,
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="px-pad pt-[clamp(140px,14vw,200px)] pb-[clamp(76px,9vw,140px)]">
        <div className="mx-auto max-w-[760px]">
          <Reveal>
            <p className="m-0 mb-[18px] text-[0.72em] tracking-[0.26em] text-muted uppercase">
              Contact
            </p>
          </Reveal>

          <Reveal>
            <h1 className="m-0 font-display text-[clamp(34px,4.4vw,62px)] leading-[1.08] font-normal tracking-[0.02em]">
              Talk to us directly.
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-7 max-w-[60ch] text-[1.12em] leading-[1.75] text-[#3a322b]">
              Orders, stock, gifting and stockist enquiries all go through WhatsApp. A
              person reads every message, usually within a few hours.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-11 flex flex-wrap gap-[18px]">
              <OrderButton>Message us on WhatsApp</OrderButton>
            </div>
          </Reveal>

          {/* Plain, crawlable contact details — not hidden behind a panel. */}
          <Reveal>
            <address className="mt-10 flex flex-col gap-3.5 text-[1.02em] not-italic">
              <a href={emailUrl} className="flex items-center gap-3 hover:text-oxblood">
                <Mail className="size-[18px] flex-none text-muted" aria-hidden />
                {site.email}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-oxblood"
              >
                <InstagramIcon className="size-[18px] flex-none text-muted" />@
                {site.instagram}
              </a>
            </address>
          </Reveal>

          <Reveal>
            <h2 className="mt-16 text-[0.72em] tracking-[0.26em] text-muted uppercase">
              Questions we get asked
            </h2>
            <Accordion
              items={faqs.map((faq) => ({
                title: faq.question,
                body: <p>{faq.answer}</p>,
              }))}
            />
          </Reveal>
        </div>
      </section>

      <DevanagariMark />

      <JsonLd
        data={graph(
          pageSchema({
            type: "ContactPage",
            path: "/contact",
            name: title,
            description,
          }),
          faqSchema(faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />
    </>
  );
}
