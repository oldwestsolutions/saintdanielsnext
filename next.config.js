/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  env: {
    PORT: process.env.PORT || 3000
  },
  output: 'standalone'
}

module.exports = nextConfig 