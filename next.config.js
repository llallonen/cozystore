/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.unsplash.com" }, { hostname: "lh3.googleusercontent.com" }],
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
