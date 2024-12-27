import './globals.css'
import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'

const inter = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars Universe',
  description: 'Explore the Star Wars Universe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-gray-300 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
