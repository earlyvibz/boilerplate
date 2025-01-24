import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { ClientProviders } from '@/providers/client-providers'

const inter = Inter({
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Boilerplate for saas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
