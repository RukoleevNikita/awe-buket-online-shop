/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awe-buket.storage.yandexcloud.net',
        port: '',
        pathname: '/test/**',
      },
    ],
  },
};

module.exports = nextConfig;
