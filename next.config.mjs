/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "external-content.duckduckgo.com",
      },
      {
        hostname: "cdn.dummyjson.com",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;
