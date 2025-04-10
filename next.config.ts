import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  productionBrowserSourceMaps: false, // Se Desactiva source maps en el cliente
};

module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

export default nextConfig;
