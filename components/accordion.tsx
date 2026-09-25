import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  body: React.ReactNode;
};

/**
 * Built on native <details>, on purpose.
 *
 * The answers are in the HTML whether or not the panel is open, so a crawler
 * reads them, ctrl+F finds them, and none of it needs JavaScript.
 */
export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  return (
    <div className={cn("mt-10 border-t border-line", className)}>
      {items.map((item) => (
        <details key={item.title} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-[0.8em] tracking-[0.22em] uppercase [&::-webkit-details-marker]:hidden">
            {item.title}
            <Plus className="size-4 flex-none text-muted group-open:hidden" aria-hidden />
            <Minus className="hidden size-4 flex-none text-muted group-open:block" aria-hidden />
          </summary>
          <div className="mb-[22px] max-w-[52ch] text-[#3a322b]">{item.body}</div>
        </details>
      ))}
    </div>
  );
}
