import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/layout/Navbar';
import Providers from '@/provider/Provider';
import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'

import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <html lang="en" className='light'>
     <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
           <Toaster /> 
          <Navbar />
          {children}
        </body>
    </html>
    </Providers>
  )
}
