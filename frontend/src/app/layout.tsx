import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { getPortfolio } from "@/lib/api";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { profile } = await getPortfolio();
    return {
      title: {
        default: `${profile.name} — ${profile.title}`,
        template: `%s · ${profile.name}`,
      },
      description: profile.summary,
      openGraph: {
        title: `${profile.name} — ${profile.title}`,
        description: profile.tagline,
        type: "website",
      },
    };
  } catch {
    return { title: "Portfolio" };
  }
}

// Applies the saved (or system) theme before first paint to avoid a flash.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
