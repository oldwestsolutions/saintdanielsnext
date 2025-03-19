/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'seashell-app-v8vex.ondigitalocean.app'],
    unoptimized: true
  },
  env: {
    PORT: process.env.PORT || 8080
  },
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  basePath: '',
  crossOrigin: 'anonymous'
}

module.exports = nextConfig 