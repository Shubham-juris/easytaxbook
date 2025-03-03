import React from 'react'
import './App.css'

import ProductCards from './Components/Products/Products'
import AccountingServices from './Components/Accountservices/Accountservices'
import AboutUs from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import AppointmentsAndReviews from './Components/Footer/Footer'
import MainComponent from './Components/Navbar/Navbar'





function App() {

  return (
    <>
    <MainComponent/>
    <ProductCards/>
    <AccountingServices/>
    <AboutUs/>
    <Gallery/>
    <AppointmentsAndReviews/>
    </>
  )
}

export default App
