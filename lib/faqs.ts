import { formatPrice, fragrances } from "@/lib/fragrances";

/**
 * The contact page's questions, in one place, so the visible copy and the
 * FAQPage structured data can never drift apart.
 */
export const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Message us on WhatsApp with the fragrance you want. We confirm your address and payment in the same chat, then dispatch.",
  },
  {
    question: "Where do you ship, and how long does it take?",
    answer:
      "We ship anywhere in India. Orders are confirmed on WhatsApp and dispatched within two working days.",
  },
  {
    question: "How much is each fragrance?",
    answer: `Every eau de parfum in the debut collection is ${formatPrice(fragrances[0].price)} for 50 ml.`,
  },
  {
    question: "Do you take gifting and stockist enquiries?",
    answer:
      "Yes. For bulk orders, corporate gifting or retail stocking, message us on WhatsApp with a short note about what you have in mind.",
  },
] as const;
