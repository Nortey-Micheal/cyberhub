import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // optional if you’ll use Unsplash too
      },
    ],
  },
} as NextConfig;

export default nextConfig;
