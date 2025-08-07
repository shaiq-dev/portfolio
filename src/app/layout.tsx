import type { Metadata } from 'next'

import './global.css'

export const metadata: Metadata = {
  title: 'shaiq kar - Google Search',
  verification: {
    google: 'ouDVbST3T8-LW94heAgxjwU_cY7m60Qr3z3vkxt7sSU',
  },
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
      <body>{children}</body>
    </html>
  )
}
