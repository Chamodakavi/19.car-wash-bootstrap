import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

const App = () => {
  return (
    <>
        <Navbar/>
        <Welcome/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default App
