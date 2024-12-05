import React from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import MessagePage from './MessagePage'
import Dashboard from './Dashboard'
import BookingPage from './BookingPage'

const AdminLayout = () => {

    const location = useLocation();


  return (
    <>
     {location.pathname === '/dashboard' && <Dashboard />}

     <Outlet />
    </>
  )
}

export default AdminLayout
