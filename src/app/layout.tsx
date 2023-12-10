import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import GlobalNavBar from '../components/common/global-nav-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grocery App',
  description: 'App to track grocery',
}

export default function RootLayout(
  {children, modal}: { children: React.ReactNode, modal: React.ReactNode }
) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalNavBar/>
        <main className='m-6'>
          {children}
        </main>
        {modal}
      </body>
    </html>
  )
}
