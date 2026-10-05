"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="nb-btn size-11 bg-surface p-0!">
      <Sun className="hidden size-5 in-data-[theme=dark]:block" />
      <Moon className="size-5 in-data-[theme=dark]:hidden" />
    </button>
  );
}
