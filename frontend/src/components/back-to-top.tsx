"use client";

import { ArrowUp } from "lucide-react";

/** Scrolls to the top of the current page (smoothly, unless the visitor prefers reduced motion). */
export function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={label}
      title={label}
      className="flex size-11 items-center justify-center rounded-full border-3 border-white bg-plum transition-colors hover:bg-butter hover:text-black"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
