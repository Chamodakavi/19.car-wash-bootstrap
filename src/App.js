import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';

const App = () => {
  return (
    <>
        <Navbar/>
        <Welcome/>
        <AboutUs/>
        <OurServices/>
        <Footer/>
    </>
  )
}

export default App
