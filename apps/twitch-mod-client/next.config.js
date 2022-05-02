/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['static-cdn.jtvnw.net']
  }
}

module.exports = nextConfig
