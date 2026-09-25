import { whatsappUrl } from "@/lib/site";
import { WhatsappIcon } from "@/components/icons";
import { ButtonAnchor, type buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

/**
 * "Order on WhatsApp".
 *
 * The wa.me link, message and all, is built during the render on the server,
 * so it ships inside the HTML. The old site wrote these links from a script
 * after load, which meant crawlers only ever saw href="#".
 */
export function OrderButton({
  item,
  children = "Order on WhatsApp",
  variant,
  className,
}: {
  /** The product line that goes into the pre-filled message. */
  item?: string;
  children?: React.ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonAnchor
      href={whatsappUrl(item)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      className={className}
    >
      <WhatsappIcon className="size-[17px] flex-none" />
      {children}
    </ButtonAnchor>
  );
}
