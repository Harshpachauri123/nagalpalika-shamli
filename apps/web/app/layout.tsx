

import QueryProvider from '@/components/providers/query-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nagar Palika Parishad, Shamli',
  description:
    'Official website of Nagar Palika Parishad, Shamli - Empowering citizens through digital transparency and efficient municipal services',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
         <html
        lang="en"
        suppressHydrationWarning
        data-scroll-behavior="smooth"
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      >
        <body className="font-sans antialiased bg-background text-foreground">
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
  )
}
