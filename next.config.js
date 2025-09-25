/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disabled because we're using Babel
  compiler: {
    styledComponents: true,
  },
  
  // Enable static export
  output: 'export',
  trailingSlash: true,
  
  // Image optimization settings for static export
  images: {
    unoptimized: true,
  },
  
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig
