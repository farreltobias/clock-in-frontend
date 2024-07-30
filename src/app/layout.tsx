import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '../context/theme-provider'
import { cn } from '../lib/utils'

import './globals.css'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Clock In',
  description: 'A simple punch clock app',
}

type Props = Readonly<{
  children: React.ReactNode
  times: React.ReactNode
}>

export default function RootLayout({ children, times }: Props) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="space-y-12 py-12">
            {children}
            {times}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
