import React, { useContext, useEffect, useRef, useState } from 'react'
import { CompanyImg, NavItem, NewPage, ProductsCard, ReviewsCard } from '../components'
import { NavbarContext } from '../context/NavbarContext'

export const Home = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
  const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  const { breakpoint, navbarHeight, navbarRef, headerRef} = useContext(NavbarContext)

  useEffect (() => {
    const onScroll = () => {
      let windowPos = window.scrollY
      const isNavFixed = windowPos >= breakpoint
      setIsFixed(isNavFixed)
      if (isNavFixed) {
        headerRef.current.style.paddingTop = `${navbarHeight}px`
      } else {
        headerRef.current.style.paddingTop = `0px`
      }
    }
    window.addEventListener('scroll', onScroll)
    
    return () => window.removeEventListener('scroll', onScroll)
  }, [breakpoint])

  

  // ToDo: Exportar esto a un componente
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
          <h1><NewPage href='/' label='Visual Show 360' colorText='var(--primary-color-200)'/></h1>   
        </div>
        <div className={isMenuToggled ? 'menuOpened' : ''}>
          <ul>
            <b><NavItem href='/' label='Home' colorText='var(--primary-color-100)' /></b>
            <li onClick={() => toggleClass('products')}><b>Servicios Party {isMoreProductsInfo ? '⮵' : '⮷'} </b></li>
            <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'} >
              <NavItem href='#plataforma360' label='Plataforma 360' colorText='var(--primary-color-300)'/>
              <NavItem href='#magic-mirror' label='Magic Mirror' colorText='var(--primary-color-300)'/>
              <NavItem href='#ring-ring-experience' label='Ring Ring Experience' colorText='var(--primary-color-300)'/>
            </div>
            <li onClick={() => toggleClass('weddings')}><b>Bodas y Eventos {isMoreWeddingsInfo ? '⮵' : '⮷'} </b></li>
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
      <header ref={headerRef}>
        <div className="presentationContainer">          
          <h1>
          ¡Aqui poner palabras clave como titulo SEO! <br /> <br />
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
            <img src="src/assets/img/servicios/Fotomaton360Focus.webp" alt="Fotomaton360Focus"/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta labore culpa facere ab illum dolorem temporibus, fuga quibusdam, animi magnam obcaecati! Omnis dignissimos nam beatae sapiente adipisci ut soluta?
            </p>
            <div className="buttonsContainer">              
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        <section id='magic-mirror'>
          <div className='service2Container'>            
            <h2>Servicio 2 - Magic Mirror</h2>
            <img src="src/assets/img/servicios/EspejoMagico.webp" alt="EspejpoMagico"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainerEven">              
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        
        <section id='ring-ring-experience'>
          <div className="service3Container">            
            <h2>Servicio 3 - Ring Ring Experience</h2>
            <img src="src/assets/img/servicios/RingRingExperience.webp" alt="InstruccionesRingRing" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
            </p>
            <div className="buttonsContainer">              
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        {/* !Este section es de products */}
        <section id='products'>
          <div className="service4Container">
            <div className="service4Tittle">              
              <h2>Servicio 4 - Bodas y Eventos</h2>          
            </div>
            <ProductsCard 
              id='letras-love' 
              tittle='Letras Love' 
              description='Letras Love Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/servicios/LerasLoveFocus.webp' 
              darkBg={true}
              colorText='var(--primary-color-100)'/>   
            <ProductsCard 
              id='neones' 
              tittle='Neones' 
              description='Neones Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/servicios/Neones.webp'
              colorText='var(--primary-color-100)'/>                                                  
            <ProductsCard 
              id='kitAntiResaca' 
              tittle='Kit AntiResaca' 
              description='Kit AntiResaca Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/servicios/kitAntiresacaFocus.webp' 
              darkBg={true}
              colorText='var(--primary-color-100)'/>
          </div>
        </section>
        <section id='caja-hora-loca'>
          <div className="service5Container">            
            <h2>Caja Hora Loca</h2>
            <img src="src/assets/img/servicios/EspejoMagico.webp" alt="EspejpoMagico"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainerEven">              
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        {/* !Este section es de reviews */}
        <section>
          <div className="reviewsContainer">
            <h2>Reviews Clientes</h2>
            <div className="line"></div>
            <ReviewsCard 
              id='review1' 
              tittle='La BODA del AÑO' 
              client='Jose y Laura'
              description='Review 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/reviews_equipo/David_Ivet.JPG' 
              colorText='var(--primary-color-100)'
              cardClassName='reviewCard'/>
            <ReviewsCard 
              id='review2' 
              tittle='Trato ÚNICO'
              client='David e Ivet' 
              description='Review 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/reviews_equipo/David_Ivet.JPG' 
              colorText='var(--primary-color-100)'
              cardClassName='reviewCard'/>
            <ReviewsCard 
              id='review3' 
              tittle='Repetire sin DUDARLO' 
              client='Julio y Maria' 
              description='Review 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/reviews_equipo/David_Ivet.JPG' 
              colorText='var(--primary-color-100)'
              cardClassName='reviewCard'/>
          </div>          
        </section>
        {/* !Este section es de companies */}
        <section>
          <div className="companiesContainer">            
            <h2>Empresas con las que se han trabajado</h2>
            <div className="line"></div>
            <div className="logoCompanies">
              <CompanyImg 
              urlImg='src/assets/img/empresas/Acciona.png'
              companyName='acciona' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Astrazeca.png'
              companyName='astrazeca' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Atresmedia.png'
              companyName='atresmedia' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Barcelona.png'
              companyName='barcelona' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/CaixaBanc.png'
              companyName='caixabanc' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Cosmopolitan.png'
              companyName='cosmopolitan' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Dell.png'
              companyName='dell' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Esquire.png'
              companyName='esquire' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Fore.png'
              companyName='fore' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Google.png'
              companyName='google' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Nissan.png'
              companyName='nissan' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/Scalpers.png'
              companyName='scalpers' />
              <CompanyImg 
              urlImg='ssrc/assets/img/empresas/Servi.png'
              companyName='servi' />
              <CompanyImg 
              urlImg='src/assets/img/empresas/TikTok.png'
              companyName='tiktok' />
            </div>
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
