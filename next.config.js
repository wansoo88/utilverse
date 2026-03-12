/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production'

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
  'https://pagead2.googlesyndication.com',
  'https://www.googletagservices.com',
  'https://www.googletagmanager.com'
].join(' ')

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src ${scriptSrc}`,
  "connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.google-analytics.com",
  "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com"
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' }
]

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/random-decision/en',
        permanent: true,
        basePath: false
      },
      {
        source: '/random-decision',
        destination: '/random-decision/en',
        permanent: true,
        basePath: false
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
}

module.exports = nextConfig
