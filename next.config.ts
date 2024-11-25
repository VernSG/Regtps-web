import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "assets.aceternity.com",
      "aceternity.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
