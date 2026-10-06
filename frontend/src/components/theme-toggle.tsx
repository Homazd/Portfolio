"use client";

import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { DEFAULT_THEME, isTheme, THEME_COOKIE, type Theme } from "@/lib/theme";

const ONE_YEAR = 60 * 60 * 24 * 365;

function saveTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.cookie = `${THEME_COOKIE}=${theme}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

export function ThemeToggle({ label }: { label: string }) {
  const router = useRouter();

  // One-time move of a choice saved by the previous version (localStorage) into the cookie.
  useEffect(() => {
    try {
      const legacy = localStorage.getItem("theme") ?? undefined;
      if (isTheme(legacy) && !document.cookie.includes(`${THEME_COOKIE}=`)) saveTheme(legacy);
      localStorage.removeItem("theme");
    } catch {}
  }, []);

  function toggle() {
    const root = document.documentElement;
    const current: Theme = isTheme(root.dataset.theme) ? root.dataset.theme : DEFAULT_THEME;
    saveTheme(current === "dark" ? "light" : "dark");
    // Re-render server components so cached layouts carry the new theme too.
    router.refresh();
  }

  return (
    <button type="button" onClick={toggle} aria-label={label} title={label} className="nb-btn size-11 bg-surface p-0!">
      <Sun className="theme-icon-sun size-5" />
      <Moon className="theme-icon-moon size-5" />
    </button>
  );
}
