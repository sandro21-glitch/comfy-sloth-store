import React from 'react'
import HeroSection from '../components/HeroSection'
import Featured from '../components/Featured'
import Services from '../components/Services'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <main>
      <HeroSection />
      <Featured />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
