import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  productionBrowserSourceMaps: false, // Desactiva source maps en el cliente
};

export default nextConfig;
