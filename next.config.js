/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig
