import React from 'react'
import Providers from '../../components/providers'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'StoryBoard',
  description: 'Browse stories and categories for you favorite stories',
}

export default function SitesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main >{children}</main>
        <Footer />
      </div>
    </Providers>
  )
}
