import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/lib/providers'
import './globals.css'
import { GlobalNavBar } from '@/components/common'
import { i18n } from '../../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grocery App',
  description: 'App to track grocery',
}

export default function RootLayout({
  children,
  modal,
  params
}: { 
  children: React.ReactNode, 
  modal: React.ReactNode,
  params: { lang: string }
}
) {
  return (
    <Providers>
    <html lang={params ? params.lang : 'en'}>
      <body className={inter.className}>
        <GlobalNavBar/>
        <main className='m-6'>
          {children}
        </main>
        {modal}
      </body>
    </html>
    </Providers>
  )
}
