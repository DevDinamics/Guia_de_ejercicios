/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false, 
  images: {
    domains: [
      'raw.githubusercontent.com', 
      'github.com' 
    ],
    
    minimumCacheTTL: 60, 
    formats: ['image/webp'], 
  },
  // Otras configuraciones globales aquí
}

module.exports = nextConfig
