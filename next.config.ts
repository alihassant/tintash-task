import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        // Match any image on the domain
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
