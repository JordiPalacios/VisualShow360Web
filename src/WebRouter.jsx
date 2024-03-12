import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AvisoLegal, HomeWebsite, OtrosProductos, PoliticaPrivacidad, TerminosCondiciones } from './pages'
import { Navbar } from './components'


export const WebRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<HomeWebsite />} />
        <Route path='otros-productos' element={<OtrosProductos />} />
        <Route path='aviso-legal' element={<AvisoLegal />} />
        <Route path='politica-privacidad' element={<PoliticaPrivacidad />} />
        <Route path='terminos-condiciones' element={<TerminosCondiciones />} />
      </Route>

      <Route path='*' element={<HomeWebsite />} />
    </Routes>
  )
}
