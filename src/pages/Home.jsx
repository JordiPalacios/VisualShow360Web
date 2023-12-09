import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigationPage = useNavigate()

  function eventosreales () {
    navigationPage('/eventos-reales')
  }
  function products () {
    navigationPage('/productos')
  }
  function payment () {
    navigationPage('/compra-segura')
  }
  function avisolegal () {
    navigationPage('/aviso-legal')
  }
  function politicaprivacidad () {
    navigationPage('/politica-privacidad')
  }
  function terminoscondiciones () {
    navigationPage('/terminos-condiciones')
  }

  function error () {
    navigationPage('terminoscondicionessss')
  }

  return (
    <div>
      <h1>Visual Show 360 - Home Page</h1>
      <button onClick={eventosreales}>Eventos Reales</button>
      <button onClick={products}>Productos</button>
      <button onClick={payment}>Pago</button>
      <button onClick={avisolegal}>AvisoLegal</button>
      <button onClick={politicaprivacidad}>PoliticaPrivacidad</button>
      <button onClick={terminoscondiciones}>TerminosConidiciones</button>
      <button onClick={error}>error</button>
    </div>
  )
}
