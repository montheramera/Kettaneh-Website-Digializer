
import createMiddleware from "next-intl/middleware";


export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en"],
  // Used when no locale matches
  defaultLocale: "en",
  // Custom middleware logic

});

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};



