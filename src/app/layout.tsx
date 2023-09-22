import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import Gradient from '@/components/gradient'

export const metadata: Metadata = {
  title: 'Get Linked',
  description: 'Created by Joshua Ogbole',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='relative bg-[#150E28] text-white'>
        <Navbar />
        <Gradient />
        {children}
      </body>
    </html>
  )
}
