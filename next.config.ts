import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com", "assets.aceternity.com", "aceternity.com", "images.unsplash.com"],
  },
  reactStrictMode: true,
};

export default nextConfig;
