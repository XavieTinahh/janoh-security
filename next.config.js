/** @type {import('next').NextConfig} */
const nextConfig = {
  // serverActions is now stable in Next.js 14, no need for experimental flag
  // Temporarily disable Fast Refresh to fix script loading issues
  reactStrictMode: true,
}

module.exports = nextConfig
