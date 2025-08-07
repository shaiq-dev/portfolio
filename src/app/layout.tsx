import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './global.css'

export const metadata: Metadata = {
  title: 'shaiq kar - Google Search',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/mortezaom/google-sans-cdn@master/fonts.css"
        />
      </head>
      <body>
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}
