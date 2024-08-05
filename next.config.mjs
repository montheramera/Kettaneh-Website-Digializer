// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */

// const withNextIntl = require("next-intl/plugin")("./i18n.js");
 import createNextIntlPlugin from "next-intl/plugin";
 const withNextIntl = createNextIntlPlugin();

const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "placehold.com",
//       },
//       {
//         protocol: "https",
//         // hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
//       },
//     ],
//   },
  async redirects() {
    return [
      {
        source: "/en/home",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/ar/home",
        destination: "/ar",
        permanent: true,
      },
    ];
  },
};
export default withNextIntl(nextConfig);