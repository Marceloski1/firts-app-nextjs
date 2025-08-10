import type { NextConfig } from "next";

//Inclir otra inicializacion

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  //reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
