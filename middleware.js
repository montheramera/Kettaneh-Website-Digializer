import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  const homePaths = [
    "/en/contact-us", "/en/our-project", "/en/business-units", "/en/products",
    "/en/node/262", "/en/aircondition-products/86", "/en/water-brands/118",
    "/en/aircondition-products/88", "/en/aircondition-products/87", "/en/aftermarket-brands/120",
    "/en/social-media/265", "/en/aircondition-brands/1", "/en/gallery/129",
    "/en/node/278", "/en/node/279", "/en/node/280", "/en/node/281", "/en/node/282",
    "/en/node/283", "/sites/default/files/2019-01/PLC.pdf", "/sites/default/files/2019-01/SCADA.pdf",
    "/sites/default/files/2019-01/Software.pdf", "/sites/default/files/2019-01/Sensors.pdf",
    "/sites/default/files/2019-01/Room%20Thermostat.pdf", "/sites/default/files/2018-12/HMI%20Panels.pdf",
    "/sites/default/files/2018-12/ws-dc-motoren-en.pdf", "/sites/default/files/2018-12/DFMC-B10034-00-7600.pdf",
    "/sites/default/files/2018-12/simotics-brochure-en-2018_0.pdf", "/sites/default/files/2018-12/simotics-hv-en-2018.pdf",
    "/sites/default/files/2019-01/Valves%20and%20Actuators.pdf", "/sites/default/files/2018-12/1.pdf",
    "/sites/default/files/2018-12/3-%20For%20Agitators.docx", "/sites/default/files/2018-12/1-%20For%20Bucket%20Elevators.docx",
    "/sites/default/files/2018-12/6-%20For%20Conveyor%20Belts.docx", "/sites/default/files/2018-12/12-%20For%20Double%20Screw%20Extruders.docx",
    "/sites/default/files/2018-12/8-%20For%20Vertical%20Mills.docx", "/sites/default/files/2018-12/9-%20For%20Platnetary%20Gear-Units.docx",
    "/sites/default/files/2018-12/5-%20For%20Condensation%20Fans_0.docx", "/sites/default/files/2018-12/13-%20For%20water%20turbines.docx",
    "/sites/default/files/2018-12/10-%20For%20Bucket%20Wheels.docx", "/sites/default/files/2018-12/2-%20For%20Hoisting%20and%20Lifting%20Applications.docx",
    "/sites/default/files/2018-12/11-%20For%20Single%20Screw%20Extruders.docx"
  ]

  const machineryPaths = [
    "/en/machinery-products/63", "/en/machinery-products/64", "/en/machinery-products/67", 
    "/en/machinery-products/66", "/en/machinery-brands/3", "/en/machinery-products/65",
    "/en/machinery-products/294"
  ]

  const electricalPaths = [
    "/en/electrical", "/en/electrical-products/14", "/en/electrical-brands/2",
  ]

  const lightingPaths = [
    "/en/lighting-brands/119",
  ]

  if(homePaths.includes(pathname)){
    return NextResponse.redirect(new URL("/en", request.url), 301);
  }
  if(machineryPaths.includes(pathname)){
    return NextResponse.redirect(new URL("/en/categories/machinery", request.url), 301);
  }
  if(electricalPaths.includes(pathname)){
    return NextResponse.redirect(new URL("/en/categories/electrical", request.url), 301);
  }
  if(lightingPaths.includes(pathname)){
    return NextResponse.redirect(new URL("/en/categories/lighting", request.url), 301);
  }

  // Redirect specific paths
  if (pathname === "/en/privacy") {
    return NextResponse.redirect(new URL("/en/privacy-policy", request.url), 301);
  }

  if (pathname === "/en/about-us") {
    return NextResponse.redirect(new URL("/en/about", request.url), 301);
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