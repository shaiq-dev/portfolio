import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://907ded7a4e5a4ad1b2d14876d548d281@o4504272588505088.ingest.sentry.io/4504272593289216',
  tracesSampleRate: 1.0,
})
