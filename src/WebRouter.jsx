import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { BuyProducts, Home, NotFound, Payment } from './pages'


export const WebRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='products' element={<BuyProducts />} />
        <Route path='payment' element={<Payment />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
