import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digi | Presale',
  description: 'Digi | Presale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={josefin_sans.className}>{children}</body>
    </html>
  )
}
