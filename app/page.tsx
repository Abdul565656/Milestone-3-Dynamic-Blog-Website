import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './components/blog'
import Footer from './components/Footer'

const page = async () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </div>
  )
}

export default page