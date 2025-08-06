import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/About'
import Services from './components/Services'
import IndustriesWeServe from './components/IndustriesWeServe'
import TeamSection from './components/TeamSection'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Services/>
      <IndustriesWeServe/>
      <TeamSection/>
      <Testimonials/>
    </main>
  )
}

export default App