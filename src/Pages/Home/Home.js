import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Cards from '../../Components/Cards/Cards'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Cards/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
