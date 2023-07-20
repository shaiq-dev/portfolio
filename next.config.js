/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ['media.graphcms.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.medium.com',
        pathname: '/**',
      },
    ],
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
