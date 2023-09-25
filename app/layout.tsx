import Navbar from '@/components/nav-bar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ToastProvider from '@/providers/toast'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '潘达国际卡券',
  description: '潘达国际卡券,全球招代理',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
