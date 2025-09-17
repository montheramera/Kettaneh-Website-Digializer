
/** @type {import('next').NextConfig} */

 import createNextIntlPlugin from "next-intl/plugin";
 const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["www.kettaneh.com.jo", "res.cloudinary.com", "admin.kettaneh.com.jo"],
  },
  env: {
    NEXT_PUBLIC_STRAPI_BASE_URL: process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'https://admin.kettaneh.com.jo',
    NEXT_PUBLIC_MAIN_SITE: process.env.NEXT_PUBLIC_MAIN_SITE || 'https://www.kettaneh.com.jo',
  },
  output: 'standalone',
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