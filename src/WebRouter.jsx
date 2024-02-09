import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AvisoLegal, BuyProducts, EventosReales, HomeWebsite, NotFound, Payment, PoliticaPrivacidad, TerminosCondiciones } from './pages'
import { Navbar } from './components'


export const WebRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<HomeWebsite />} />
        <Route path='eventos-reales' element={<EventosReales />} />
        <Route path='productos' element={<BuyProducts />} />
        <Route path='compra-segura' element={<Payment />} />
        <Route path='aviso-legal' element={<AvisoLegal />} />
        <Route path='politica-privacidad' element={<PoliticaPrivacidad />} />
        <Route path='terminos-condiciones' element={<TerminosCondiciones />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
