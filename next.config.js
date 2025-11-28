/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export para Siteground
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

