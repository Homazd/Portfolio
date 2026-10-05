import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Bricolage_Grotesque, Lalezar, Vazirmatn } from "next/font/google";
import { hasLocale, localeMeta, locales } from "@/i18n/config";
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

// Applies the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const fonts = lang === "fa" ? `${vazirmatn.variable} ${lalezar.variable}` : bricolage.variable;

  return (
    <html lang={lang} dir={localeMeta[lang].dir} suppressHydrationWarning className={`${fonts} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Injected into <head> by Next.js and run before the page is shown. */}
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
