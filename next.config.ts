import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,   // 👈 Ajoute cette ligne
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
  /*
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/videos/[hash][ext][query]'
      }
    });
  } */
};

export default nextConfig;