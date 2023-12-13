import React, { useCallback, useState } from 'react'
import { NavItem, NewPage, ProductsCard } from '../components'

export const Home = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
  const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
  
  const toggleClass = (className) => {
  switch (className) {
    case 'menuOpen':
      setIsMenuToggled(!isMenuToggled)
      break;
  
    case 'products':
      setIsMoreProductsInfo(!isMoreProductsInfo)
      break;

    case 'weddings':
      setIsMoreWeddingsInfo(!isMoreWeddingsInfo)
      break;

    default:
      break;
  }
  }

  return (
    <>
      <header>
        <div className="headaerContainer">
          <div className="hamburgerMenu">
            <button 
            onClick={() => toggleClass('menuOpen')}>&darr;</button>
          </div>
          <nav id='navbar' className={isMenuToggled ? 'menuOpened' : ''}>
            <div className="navbarContainer">              
              <ul>
                <NavItem href='/' label='Home' />
                {/* <NavItem href='/' label='Servicios Party' /> */}
                <li onClick={() => toggleClass('products')}>Servicios Party</li>
                <div className={isMoreProductsInfo ? 'productos' : ''} >
                  <NavItem href='#plataforma360' label='Plataforma 360' />
                  <NavItem href='#magic-mirror' label='Magic Mirror' />
                  <NavItem href='#ring-ring-experience' label='Ring Ring Experience' />
                </div>
                {/* <NavItem href='/' label='Bodas y Eventos'/> */}
                <li onClick={() => toggleClass('weddings')}>Bodas y Eventos</li>
                <div className={isMoreWeddingsInfo ? "bodasEventos" : ''}>
                  <NavItem href='#letras-love' label='Letras Love' />
                  <NavItem href='#neones' label='Neones' />
                  <NavItem href='#kitAntiResaca' label='Kit AntiResaca' />
                </div>
                <NavItem href='#caja-hora-loca' label='Caja Hora Loca' />
                <NavItem href='#nosotros' label='Nosotros' />
              </ul>
            </div>
          </nav>
        </div>
        <div className="presentationContainer">          
          <h1>Header - Visual Show 360</h1>
          <p>Vídeo + Texto Potente</p>
        </div>
      </header>
      <main>
        <section id='plataforma360'>
          <div className="service1Container">            
            <h2>Servicio 1 - Fotomaton 360</h2>
          </div>
        </section>
        <section id='magic-mirror'>
          <div className='service2Container'>            
            <h2>Servicio 2 - Magic Mirror</h2>
          </div>
        </section>
        <section id='ring-ring-experience'>
          <div className="service3Container">            
            <h2>Servicio 3 - Ring Ring Experience</h2>
          </div>
        </section>
        {/* !Este section es de products */}
        <section>
          <div className="service4Container">                      
            <h2>Servicio 4 - Productos Alquiler</h2>
            <ProductsCard id='letras-love' tittle='Letras Love' description='Letras Love Description' imgUrl='src\assets\icons\ig.svg'/>
            <ProductsCard id='neones' tittle='Neones' description='Neones Description' imgUrl='src\assets\icons\ig.svg'/>
            <ProductsCard id='kitAntiResaca' tittle='Kit AntiResaca' description='Kit AntiResaca Description' imgUrl='src\assets\icons\ig.svg'/>
          </div>
        </section>
        <section id='caja-hora-loca'>
          <div className="horaLocaContainer">            
            <h2>Caja Hora Loca</h2>
          </div>
        </section>
        {/* !Este section es de reviews */}
        <section>
          <div className="reviewsContainer">
            <h2>Reviews Clientes</h2>
          </div>          
        </section>
        {/* !Este section es de companies */}
        <section>
          <div className="companiesContainer">            
            <h2>Empresas con las que se han trabajado</h2>
          </div>
        </section>
        <section id="nosotros">
          <div className="aboutUsContainer">            
            <h2>Sobre Nosotros - Equipo</h2>
          </div>
        </section>
        {/* !Este section es de contact us */}
        <section>
          <div className="contactUsContainer">            
            <h2>Formulario Contacto</h2>
          </div>
        </section>
      </main>
      <footer>
        <div className="footerContainer">          
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
        </div>
      </footer>
      {/* Para cuando deban comprar el producto */}
      <button>
        <NewPage href="/compra-segura" label="Pago" />
      </button>
    </>
  )
}
