/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ['idb-keyval', 'zustand'],
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;