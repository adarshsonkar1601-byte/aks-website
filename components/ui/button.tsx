import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex cursor-pointer items-center gap-3 self-start border px-[34px] py-[17px] font-body text-[0.82em] tracking-[0.22em] uppercase transition-colors duration-350",
  {
    variants: {
      variant: {
        solid: "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink",
        light:
          "border-paper/50 bg-transparent text-paper hover:bg-paper hover:text-ink",
      },
    },
    defaultVariants: { variant: "solid" },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants>;

/** An internal link that looks like the site's button. */
export function ButtonLink({
  className,
  variant,
  ...props
}: ComponentProps<typeof Link> & ButtonProps) {
  return <Link className={cn(buttonVariants({ variant }), className)} {...props} />;
}

/** An outbound link (WhatsApp, Instagram, mail) that looks like the site's button. */
export function ButtonAnchor({
  className,
  variant,
  ...props
}: ComponentProps<"a"> & ButtonProps) {
  return <a className={cn(buttonVariants({ variant }), className)} {...props} />;
}
