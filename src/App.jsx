import React from 'react'
import './App.css'

import ProductCards from './Components/Products/Products'
import AccountingServices from './Components/Accountservices/Accountservices'
import AboutUs from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import AppointmentsAndReviews from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Sitemaintenance from './Components/Page/page'





function App() {

  return (
    <>
    <Hero/>
    <Navbar/>
    <ProductCards/>
    <AccountingServices/>
    <AboutUs/>
    <Gallery/>
    <AppointmentsAndReviews/>
    <Sitemaintenance/>
    </>
  )
}

export default App
