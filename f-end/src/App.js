import React from 'react'
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import OurServices from './Components/OurServices';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BookNow from './Pages/BookNow';

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/booknow' element={<BookNow/>} />
          </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
