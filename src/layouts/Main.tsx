import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function Main({ children }: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  )
}
