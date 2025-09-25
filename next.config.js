/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disabled because we're using Babel
  compiler: {
    styledComponents: true,
  },
  
  // Image optimization settings
  images: {
    unoptimized: true,
  },
  
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig
