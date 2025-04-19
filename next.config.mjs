
/** @type {import('next').NextConfig} */

 import createNextIntlPlugin from "next-intl/plugin";
 const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["www.kettaneh.com.jo", "res.cloudinary.com"],
  },
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