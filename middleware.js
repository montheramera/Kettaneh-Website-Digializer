
// import createMiddleware from "next-intl/middleware";


// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en"],
//   // Used when no locale matches
//   defaultLocale: "en",
//   // Custom middleware logic

// });

// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };



import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const { pathname } = request.nextUrl;



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
