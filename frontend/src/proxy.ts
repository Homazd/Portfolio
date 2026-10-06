import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, LOCALE_COOKIE, localizePath, type Locale } from "@/i18n/config";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** The visitor's saved choice, otherwise Persian. */
function preferredLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  return hasLocale(saved) ? saved : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (hasLocale(first)) {
    // Remember the language the visitor is reading, so the next visit opens in it.
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, { path: "/", maxAge: ONE_YEAR, sameSite: "lax" });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = localizePath(pathname, preferredLocale(request));
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and files with an extension (resume.pdf, favicon.ico, …).
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
