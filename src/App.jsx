import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/header';
import Footer from './components/footer/footer';
import Home from './components/Home/home';
import AdminDashboard from './components/Dashboard/admin/dashboard/adminDashboard';
import PaidDashboard from './components/Dashboard/admin/dashboard/paidDashboard/paidDashboard';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/signup' element={ <AdminDashboard /> } />
        <Route path='/login' element={ <h1>Login</h1> } />
        <Route path='/admin/:businessName' element={ <PaidDashboard /> } />
        <Route path='/employee' element={ <h1>employee</h1> } />
        <Route path="*" element={ <h1>No Page Found</h1> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App