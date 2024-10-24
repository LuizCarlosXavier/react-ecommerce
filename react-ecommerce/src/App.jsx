import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Acessories from './pages/Acessories'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Men from './pages/Men'
import Orders from './pages/Orders'
import PlaceOrders from './pages/PlaceOrders'
import Product from './pages/Product'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/acessories' element={<Acessories/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/place-orders' element={<PlaceOrders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/women' element={<Women/>}/>
      </Routes>
    </div>
  )
}

export default App