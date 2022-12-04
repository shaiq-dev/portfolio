/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs')

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
    ],
  },
  sentry: {
    hideSourceMaps: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
