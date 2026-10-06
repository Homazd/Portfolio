import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Lalezar, Vazirmatn } from "next/font/google";
import { hasLocale, localeMeta, locales } from "@/i18n/config";
import { DEFAULT_THEME, isTheme, THEME_COOKIE } from "@/lib/theme";
import { getPortfolio } from "@/lib/api";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

// Persian: Vazirmatn for text, Lalezar for the chunky display headings.
const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
});

const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["arabic", "latin"],
  weight: "400",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]));
  try {
    const { profile } = await getPortfolio(lang);
    return {
      title: {
        default: `${profile.name} — ${profile.title}`,
        template: `%s · ${profile.name}`,
      },
      description: profile.summary,
      alternates: { canonical: `/${lang}`, languages },
      openGraph: {
        title: `${profile.name} — ${profile.title}`,
        description: profile.tagline,
        type: "website",
        locale: localeMeta[lang].ogLocale,
      },
    };
  } catch {
    return { title: "Portfolio", alternates: { languages } };
  }
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const fonts = lang === "fa" ? `${vazirmatn.variable} ${lalezar.variable}` : bricolage.variable;

  // The visitor's saved theme is rendered by the server, so it survives every
  // navigation (including switching language). Without a saved choice: dark.
  const saved = (await cookies()).get(THEME_COOKIE)?.value;
  const theme = isTheme(saved) ? saved : DEFAULT_THEME;

  return (
    <html
      lang={lang}
      dir={localeMeta[lang].dir}
      data-theme={theme}
      suppressHydrationWarning
      className={`${fonts} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
