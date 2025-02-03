import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect specific paths
  if (pathname === "/en/privacy") {
    return NextResponse.redirect(new URL("/privacy-policy", request.url), 301);
  }

  if (pathname === "/en/products") {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  if (pathname === "/en/about-us") {
    return NextResponse.redirect(new URL("/about", request.url), 301);
  }

  // Redirect if locale is missing
  if (
    !pathname.startsWith("/en") &&
    !pathname.match(/^\/(api|static|_next|.*\..*)/)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  // Use next-intl for further processing
  return createMiddleware({
    locales: ["en"], // Supported locales
    defaultLocale: "en", // Default locale
  })(request);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};