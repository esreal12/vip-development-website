/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comentado para desarrollo - descomentar solo para producción estática
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

