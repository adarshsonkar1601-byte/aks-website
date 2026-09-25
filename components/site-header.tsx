"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { fragranceSlugs } from "@/lib/fragrances";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/debut-collection", label: "Debut Collection" },
  { href: "/the-reflection", label: "The Reflection" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  /* The homepage and every fragrance page open on a full-bleed photograph,
     so the header starts transparent and sits on top of it. */
  const onFragrance = fragranceSlugs.includes(pathname.replace(/^\//, ""));
  const overPhoto = onFragrance || pathname === "/";
  const current = onFragrance ? "/debut-collection" : pathname;
  /* While the menu is open the header sits on the bone overlay, not the photo. */
  const light = overPhoto && !stuck && !open;

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Don't let the page scroll behind the open menu. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navLink =
    "border-b border-transparent pb-[3px] transition-colors duration-300 hover:border-current aria-[current=page]:border-current";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] grid grid-cols-[auto_1fr_auto] items-center gap-6",
        "px-pad py-4 lap:grid-cols-[1fr_auto_1fr] lap:py-[22px]",
        "border-b border-transparent transition-[background-color,border-color] duration-400 ease-out",
        light
          ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0))]"
          : "bg-bone",
        stuck && "border-line",
      )}
    >
      <button
        type="button"
        className={cn(
          "relative z-[56] flex cursor-pointer items-center gap-2 border-0 bg-transparent p-1 text-[0.74em] tracking-[0.2em] uppercase lap:hidden",
          light ? "text-paper" : "text-ink",
        )}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-4" aria-hidden />
        ) : (
          <Menu className="size-4" aria-hidden />
        )}
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-navigation"
        aria-label="Primary"
        className={cn(
          /* Mobile: a full-screen panel that fades in over the page. */
          "fixed inset-0 -z-10 flex flex-col items-center justify-center gap-[30px] bg-bone text-[1em] text-ink opacity-0",
          "pointer-events-none transition-opacity duration-350 ease-out",
          /* From 1000px up it is simply a row of links in the header. */
          "lap:pointer-events-auto lap:static lap:z-auto lap:flex-row lap:justify-start lap:gap-[34px] lap:bg-transparent lap:text-[0.74em] lap:opacity-100",
          "tracking-[0.2em] uppercase",
          open && "pointer-events-auto z-[55] opacity-100",
        )}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(navLink, light && "lap:text-paper")}
            aria-current={current === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        aria-label="AKS — home"
        onClick={() => setOpen(false)}
        className={cn(
          "relative z-[56] justify-self-center pb-[9px] font-display text-[clamp(24px,2.4vw,34px)] leading-none tracking-[0.14em]",
          "after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[26px] after:-translate-x-1/2 after:content-['']",
          light ? "text-paper after:bg-paper" : "text-ink after:bg-ink",
        )}
      >
        AKS
      </Link>

      {/* Third grid column. Empty, but it is what keeps the AKS wordmark
          centred in the 1fr / auto / 1fr grid — don't delete it. */}
      <div
        className={cn(
          "relative z-[56] flex items-center justify-end gap-[34px] text-[0.74em] tracking-[0.2em] uppercase",
          light && "text-paper",
        )}
      />
    </header>
  );
}
