import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransitions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'gateway.pinata.cloud',
      },
      {
        protocol: 'https',
        hostname: '*.ipfs.w3s.link',
      },
      {
        protocol: 'https',
        hostname: 'nft-cdn.alchemy.com',
      },
       {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
