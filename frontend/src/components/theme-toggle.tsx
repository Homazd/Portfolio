"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      className="nb-btn size-11 bg-surface p-0!"
    >
      <Sun className="hidden size-5 in-data-[theme=dark]:block" />
      <Moon className="size-5 in-data-[theme=dark]:hidden" />
    </button>
  );
}
