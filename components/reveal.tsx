"use client";

import { useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Fades a block up as it scrolls into view.
 *
 * The element and its text are always in the DOM — the transform only ever
 * comes from the `.js .rise` rule in globals.css, which needs JavaScript to
 * be switched on. Search engines and readers without JavaScript get the
 * finished page, not an empty one.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

  return (
    <div
      ref={ref}
      className={cn("rise", inView && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
