import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supreme App',
  description: 'Created with love',
  generator: 'shashank.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
