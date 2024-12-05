import React from 'react'
import Navbar from './Components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';

import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BookNow from './Pages/BookNow';
import Dashboard from './Pages/Dashboard';
import { useLocation } from 'react-router-dom';
import MessagePage from './Pages/MessagePage';
import { Nav } from 'react-bootstrap';
import AdminLayout from './Pages/AdminLayout';
import BookingPage from './Pages/BookingPage';

const App = () => {

  const location = useLocation()
  
  return (
    <>
       
       {!location.pathname.startsWith('/dashboard') && <Navbar />}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/booknow' element={<BookNow/>} />

            <Route path='/dashboard/*' element={<AdminLayout/>} >
              <Route path="messages" element={<MessagePage />} />
              <Route path="booking" element={<BookingPage />} />
            </Route>
            
          </Routes>
          {!location.pathname.startsWith('/dashboard') && <Footer />}
        
    </>
  )
}

export default App
