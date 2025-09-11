import React from 'react'
import Navbar from './components/Navbar'
import ResponsiveMenu from './components/ResponsiveMenu'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <ResponsiveMenu/>
    <Hero/>
    <Menu/>
    <About/>
    <Testimonials/>
    <Footer/>
   </div>
  )
}

export default App