import './globals.css'
import type { Metadata } from 'next'
import Main from '@/layouts/Main'

export const metadata: Metadata = {
  title: 'AyoriaXCh',
  description: 'Modern portfolio',
  keywords: ["developer", "junior", "student programer", "tecsup developer", "software developer junior"]
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className=''>
        <main className='dark:bg-black dark:text-gray-300'>
          <Main>{children}</Main>
        </main>
      </body>
    </html>
  )
}
