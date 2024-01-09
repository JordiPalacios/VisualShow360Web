import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavItem, NewPage, ProductsCard } from '../components'
import { NavbarContext } from '../context/NavbarContext'

export const Home = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
  const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const { breakpoint, navbarHeight, updateNavbarData } = useContext(NavbarContext)
  const navbarRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    updateNavbarData(navbarRef, headerRef)
  }, [])

  useEffect (() => {
    const onScroll = () => {
      let windowPos = window.scrollY
      console.log(windowPos)
      setIsFixed(windowPos >= breakpoint)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [breakpoint])
  

  console.log(breakpoint)
  console.log(isFixed)

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
      <nav id='navbar' ref={navbarRef} className={isFixed ? 'navFixed' : ''}>    
        <div className="logoMenu">
          <button 
            className={isMenuToggled ? 'crossMenu' : 'hamburgerMenu'}
            onClick={() => toggleClass('menuOpen')}>
          </button>
          <h1><NewPage href='/' label='Visual Show 360' colorText='var(--primary-color-500)'/></h1>   
        </div>
        <div className={isMenuToggled ? 'menuOpened' : ''}>
          <ul>
            <b><NavItem href='/' label='Home' colorText='var(--primary-color-100)' /></b>
            <li onClick={() => toggleClass('products')}><b>Servicios Party ↓</b></li>
            <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'} >
              <NavItem href='#plataforma360' label='Plataforma 360' colorText='var(--primary-color-300)'/>
              <NavItem href='#magic-mirror' label='Magic Mirror' colorText='var(--primary-color-300)'/>
              <NavItem href='#ring-ring-experience' label='Ring Ring Experience' colorText='var(--primary-color-300)'/>
            </div>
            <li onClick={() => toggleClass('weddings')}><b>Bodas y Eventos ↓</b></li>
            <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
              <NavItem href='#letras-love' label='Letras Love' colorText='var(--primary-color-300)'/>
              <NavItem href='#neones' label='Neones' colorText='var(--primary-color-300)'/>
              <NavItem href='#kitAntiResaca' label='Kit AntiResaca' colorText='var(--primary-color-300)'/>
            </div>
            <b><NavItem href='#caja-hora-loca' label='Caja Hora Loca' colorText='var(--primary-color-100)' /></b>
            <b><NavItem href='#nosotros' label='Nosotros' colorText='var(--primary-color-100)' /></b>
          </ul>
        </div>   
      </nav>
      <header ref={headerRef} >
        <div className="presentationContainer">          
          <h1>
          · Fotomaton <br /> 
          · Magic Mirror <br />  
          · RingRing Experience <br /> 
          Barcelona
          </h1>
          <p>
            Haremos que tu evento sea... 
            <br /> 
            ¡ I N O L V I D A B L E !
          </p>
          <video autoPlay muted loop>
            <source src="src/assets/video/wedding.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>       
        </div> 
      </header>
      <main>
        {/* El punto que se ve al lado del si quiero es debido a los estilos, debemos quitarlo desde el css */}
        <section id='plataforma360'>
          <div className="service1Container">            
            <h2>Servicio 1 - Fotomaton 360</h2>
            <button>
              <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-500)'/>
            </button>
            <button>
              <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-500)'/>
            </button>
          </div>
        </section>
        <section id='magic-mirror'>
          <div className='service2Container'>            
            <h2>Servicio 2 - Magic Mirror</h2>
            <button>
              <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-500)'/>
            </button>
            <button>
              <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-500)'/>
            </button>
          </div>
        </section>
        <section id='ring-ring-experience'>
          <div className="service3Container">            
            <h2>Servicio 3 - Ring Ring Experience</h2>
            <button>
              <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-500)'/>
            </button>
            <button>
              <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-500)'/>
            </button>
          </div>
        </section>
        {/* !Este section es de products */}
        <section>
          <div className="service4Container">                      
            <h2>Servicio 4 - Productos Alquiler</h2>
            <ProductsCard id='letras-love' tittle='Letras Love' description='Letras Love Description' imgUrl='src/assets/icons/ig.svg'/>
            <ProductsCard id='neones' tittle='Neones' description='Neones Description' imgUrl='src/assets/icons/ig.svg'/>
            <ProductsCard id='kitAntiResaca' tittle='Kit AntiResaca' description='Kit AntiResaca Description' imgUrl='src/assets/icons/ig.svg'/>
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
        <section id='contacto'>
          <div className="contactoContainer">            
            <h2>Formulario Contacto</h2>
          </div>
        </section>
      </main>
      <footer>
        <div className="footerContainer">          
          <h2>Footer</h2>
          <p>Poner el Logo y las RRSS</p>
          <button>
            <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--primary-color-500)'/>
          </button>
          <button>
            <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--primary-color-500)'/>
          </button>
          <button>
            <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--primary-color-500)'/>
          </button>
        </div>
      </footer>
      {/* Para cuando deban comprar el producto */}
      <button>
        <NewPage href="/compra-segura" label="Pago" colorText='var(--primary-color-500)'/>
      </button>
    </>
  )
}
