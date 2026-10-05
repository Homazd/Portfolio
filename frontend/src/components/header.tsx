"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
];

export function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-3 border-line bg-background">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="display flex size-11 items-center justify-center rounded-full border-3 border-line bg-plum pt-0.5 text-2xl text-plum-foreground">
            {name.charAt(0)}
          </span>
          <span className="text-lg font-extrabold">{name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold decoration-plum decoration-3 underline-offset-6 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="nb-btn hidden bg-butter text-on-color md:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            className="nb-btn size-11 bg-surface p-0! md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-3 border-line px-6 py-4 md:hidden" aria-label="Mobile">
          {[...NAV, { href: "/#contact", label: "Get in touch" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display block py-2 text-4xl hover:text-plum"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
