import React from 'react'
import { NavItem, NewPage, ProductsCard } from '../components'

export const Home = () => {
  return (
    <>
      <header>
        <div className="navbarContainer">
          <div className="hamburgerMenu">
            <img src="src/assets/icons/hamburger.svg" alt="iconHamburger" className='hamburgerMenu' height='20px'/>
            <img src="src\assets\icons\cross.svg" alt="iconCross" className='crossMenu' height='20px' />
          </div>
          <nav className='navigation'>
            <ul>
              <NavItem href='/' label='Home' />
              <NavItem href='/' label='Servicios Party' />
              <div className="serviciosParty">
                <NavItem href='#plataforma360' label='Plataforma 360' />
                <NavItem href='#magic-mirror' label='Magic Mirror' />
                <NavItem href='#ring-ring-experience' label='Ring Ring Experience' />
              </div>
              <NavItem href='/' label='Bodas y Eventos' />
              <div className="bodasEventos">
                <NavItem href='#letras-love' label='Letras Love' />
                <NavItem href='#neones' label='Neones' />
                <NavItem href='#kitAntiResaca' label='Kit AntiResaca' />
              </div>
              <NavItem href='#caja-hora-loca' label='Caja Hora Loca' />
              <NavItem href='#nosotros' label='Nosotros' />
            </ul>
          </nav>
        </div>
        <div className="presentationContainer">          
          <h1>Header - Visual Show 360</h1>
          <p>Vídeo + Texto Potente</p>
        </div>
      </header>
      <main>
        <section id='plataforma360' className='service1'>
          <h2>Servicio 1 - Fotomaton 360</h2>
        </section>
        <section id='magic-mirror' className='service2'>
          <h2>Servicio 2 - Magic Mirror</h2>
        </section>
        <section id='ring-ring-experience' className="service3">
          <h2>Servicio 3 - Ring Ring Experience</h2>
        </section>
        <section className="service4">
          <h2>Servicio 4 - Productos Alquiler</h2>
          <p>Poner el componente Card para mostrar los 3 productos: Letras Love - Neones - KitAntiResaca</p>
          <ProductsCard />
        </section>
        <section id='caja-hora-loca'>
          <h2>Caja Hora Loca</h2>
        </section>
        <section className="reviews">
          <h2>Reviews Clientes</h2>
        </section>
        <section className="companies">
          <h2>Empresas con las que se han trabajado</h2>
        </section>
        <section id="nosotros" className="aboutUs">
          <h2>Sobre Nosotros - Equipo</h2>
        </section>
        <section className="contactUs">
          <h2>Formulario Contacto</h2>
        </section>
      </main>
      <footer>
        <h2>Footer</h2>
        <p>Poner el Logo y las RRSS</p>
        <button>
          <NewPage href="/aviso-legal" label="Aviso Legal" />
        </button>
        <button>
          <NewPage href="/politica-privacidad" label="Politica de Privacidad" />
        </button>
        <button>
          <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" />
        </button>
      </footer>
      
      <button>
        <NewPage href="/eventos-reales" label="Eventos Reales" />
      </button>
      <button>
        <NewPage href="/compra-segura" label="Pago" />
      </button>

    </>
  )
}
