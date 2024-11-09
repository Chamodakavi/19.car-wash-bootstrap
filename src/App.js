import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
        <Navbar/>
        <Welcome/>
        <Footer/>
    </>
  )
}

export default App
