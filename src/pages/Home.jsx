import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductsCard } from '../components/ProductsCard'

export const Home = () => {
  const navigationPage = useNavigate()

  function eventosreales () {
    navigationPage('/eventos-reales')
  }
  // function products () {
  //   navigationPage('/productos')
  // }
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

  return (
    <>
      <header>
        <div className="navbar">
          <p>Navbar</p>
        </div>
        <div className="presentation">          
          <h1>Header - Visual Show 360</h1>
          <p>Vídeo + Texto Potente</p>
        </div>
      </header>
      <main>
        <section className='service1'>
          <h2>Servicio 1 - Fotomaton 360</h2>
        </section>
        <section className='service2'>
          <h2>Servicio 2 - Magic Mirror</h2>
        </section>
        <section className="service3">
          <h2>Servicio 3 - Ring Ring Experience</h2>
        </section>
        <section className="service4">
          <h2>Servicio 4 - Productos Alquiler</h2>
          <p>Poner el componente Card para mostrar los 3 productos: Letras Love - Neones - KitAntiResaca</p>
          <ProductsCard />
        </section>
        <section className="reviews">
          <h2>Reviews Clientes</h2>
        </section>
        <section className="companies">
          <h2>Empresas con las que se han trabajado</h2>
        </section>
        <section className="aboutUs">
          <h2>Sobre Nosotros - Equipo</h2>
        </section>
        <section className="contactUs">
          <h2>Formulario Contacto</h2>
        </section>
      </main>
      <footer>
        <h2>Footer</h2>
        <p>Poner el Logo y las RRSS</p>
        <button onClick={avisolegal}>AvisoLegal</button>
        <button onClick={politicaprivacidad}>PoliticaPrivacidad</button>
        <button onClick={terminoscondiciones}>TerminosConidiciones</button>
      </footer>
      
      <button onClick={eventosreales}>Eventos Reales</button>
      
      <button onClick={payment}>Pago</button>
      
    </>
  )
}
