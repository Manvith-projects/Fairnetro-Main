import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Services from './components/Services'
import TrustedBy from './components/TrustedBy'
import Projects from './components/Projects'
import AboutUs from './components/AboutUS'
import Started from './components/Started'
import LogoDesignProcess from './components/LogoDesignProcess'
import Servin from './components/Servin'
import Prices from './components/Prices'
import Testimonials from './components/Testimonials'
import FeaturedBlog from './components/FeaturedBlog'
import FAQ from './components/FAQSection'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='App'>
      <div className='backgroundcolor'>
      <Navbar/>
      <Landing/>
      <TrustedBy/>
      <Projects/>
      <AboutUs/>
      <Started/>
      <Services/>
      <LogoDesignProcess/>
      <Servin/>
      <Prices/>
      <Testimonials/>
      <FeaturedBlog/>
      <FAQ/>
      <Footer/>
    </div>
    </div>
  )
}

export default App
