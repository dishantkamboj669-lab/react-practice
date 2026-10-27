import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Home from '../pages/home'
import Product from '../pages/product'
import Settings from '../pages/settings'
import About from '../pages/about'
const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        <Route path='/Product' element={<Product/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default AppRoutes
