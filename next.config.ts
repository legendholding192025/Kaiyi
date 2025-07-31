import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.kaiyiglobal.com',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'kaiyiglobal.com',
        port: '',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kaiyiglobal.com',
        port: '',
        pathname: '/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.legendholding.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
