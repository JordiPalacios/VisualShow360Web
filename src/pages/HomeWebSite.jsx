import React, { useContext, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FormContact, ImgSlider, InfiniteLoop, NavItem, NewPage, ProductsCard, ReviewsCard } from '../components'
import { NavbarContext } from '../context/NavbarContext'
import Slider from "react-slick";
import CompaniesData from '../assets/mocks/companiesData.json'
import FotomatonData from '../assets/mocks/fotomatonData.json'
import ReviewsData from '../assets/mocks/reviewsData.json'




export const HomeWebsite = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
  const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const companyData = CompaniesData
  const fotomatonData = FotomatonData
  const reviewsData = ReviewsData

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
  
// ToDo : Simplificar estas repeticiones
  const settingsServices = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const settingsCompanies = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  const settingsReviews = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
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
              <NavItem href='#white-magic-mirror' label='White Magic Mirror' colorText='var(--primary-color-300)' />
              <NavItem href='#ring-ring-experience' label='Ring Ring Experience' colorText='var(--primary-color-300)'/>
            </div>
            <li onClick={() => toggleClass('weddings')}><b>Bodas y Eventos {isMoreWeddingsInfo ? '⮵' : '⮷'} </b></li>
            <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
              <NavItem href='#letras-love' label='Letras Love' colorText='var(--primary-color-300)'/>
              <NavItem href='#neones' label='Neones' colorText='var(--primary-color-300)'/>
              <NavItem href='#kitAntiResaca' label='Kit AntiResaca' colorText='var(--primary-color-300)'/>
            </div>
            <b><NavItem href='#nosotros' label='Nosotros' colorText='var(--primary-color-100)' /></b>
          </ul>
        </div>   
      </nav>
      <header ref={headerRef}>
        <div className="presentationContainer">
          <p>Poner eslogan - una frase que buscaria alguien que busca el mejor evento</p>  
          <h2>¡Las mejores bodas las creamos aqui!</h2>   
          <h3>Gracias a nuestro equipo de alta calidad</h3>    
          <h1>Fotomaton</h1>
          <h1>Magic Mirror</h1>
          <h1>RingRing Experience</h1>  
          <p>
            Haremos que tu evento sea... 
          </p>
          <h1>¡ I N O L V I D A B L E !</h1>
          <video autoPlay muted loop>
            <source src="src/assets/video/wedding1.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>       
        </div> 
      </header>

      <main>
        {/* El punto que se ve al lado del si quiero es debido a los estilos, debemos quitarlo desde el css */}  
        <section id='plataforma360'>
          <div className="service1Container">            
            <h2>Fotomaton 360</h2>
            <div className="fotomatonImg">
            <Slider {...settingsServices}>   
                {fotomatonData.map((data) => (
                    <ImgSlider key={data.id} urlImg={data.urlImg} imgName={data.id} styleType='services'/>
                ))}
              </Slider>
            </div>
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
            <h2>Magic Mirror</h2>
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
        <section id='white-magic-mirror'>
          <div className="service3Container">            
            <h2>White Magic Mirror</h2>
            <img src="src/assets/img/servicios/magicMirrorWhite.jpg" alt="EspejpoMagico"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
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
        <section id='ring-ring-experience'>
          <div className="service4Container">            
            <h2>Ring Ring Experience</h2>
            <img src="src/assets/img/servicios/RingRingExperience.webp" alt="InstruccionesRingRing" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
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
        {/* InfiniteLoop */}
        <section>
          <div className="logo">                   
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" />
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" />
          </div>
        </section>
        {/* !Este section es de products */}
        <section id='products'>
          <div className="productsContainer">
            <div className="productsTittle">              
              <h2>Bodas y Eventos</h2>          
            </div>
            <div className="generalProducts">
              <ProductsCard 
                id='letras-love' 
                tittle='Letras Love' 
                description='' 
                imgUrl='src/assets/img/servicios/Neones.webp' 
                colorText='var(--primary-color-100)'/>   
              <ProductsCard 
                id='neones' 
                tittle='Neones' 
                description='' 
                imgUrl='src/assets/img/servicios/Neones.webp'
                colorText='var(--primary-color-100)'/> 
            </div>                                                 
            <ProductsCard 
              id='kitAntiResaca' 
              tittle='Kit AntiResaca' 
              description='Kit AntiResaca Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!' 
              imgUrl='src/assets/img/servicios/kitAntiresacaFocus.webp' 
              darkBg={true}
              colorText='var(--primary-color-100)'/>
          </div>
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">                   
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" />
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" />
          </div>
        </section>
        {/* !Este section es de reviews */}
        <section>
          <div className="reviewsContainer">
            <h2>Reviews Clientes</h2>
            <div className="line"></div>
            <div className="fotomatonImg">
            <Slider {...settingsReviews}>   
                {reviewsData.map((data) => (
                    <ReviewsCard 
                    key={data.id}
                    id={data.id}
                    tittle={data.tittle} 
                    client={data.client}
                    description={data.description}
                    imgUrl={data.imgUrl}
                    colorText={data.colorText}
                    cardClassName={data.cardClassName}/>
                ))}
              </Slider>
            </div>

          </div>          
        </section>
        {/* !Este section es de companies */}   
        <section>
          <div className="companiesContainer">            
            <h2>Empresas con las que se han trabajado</h2>
            <div className="line"></div>
            <div className="logoCompanies">
              <Slider {...settingsCompanies}>   
                {companyData.map((data) => (
                    <ImgSlider key={data.companyName} urlImg={data.urlImg} imgName={data.companyName} styleType='companies'/>
                ))}
              </Slider>
            </div>
            </div>
        </section>
        <section id="nosotros">
          <div className="aboutUsContainer">            
            <h2>Sobre Nosotros - Equipo</h2>
            <img src="src/assets/img/reviews_equipo/navidadDavidIvet.jpg" alt="VisualShow360Team" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
            </p>
          </div>
        </section>
        {/* !Este section es de contact us */}
        <section id='contacto'>
          <div className="contactoContainer">            
            <h2>Formulario Contacto</h2>
            <div className="elementsContainer">   
              <div className="formContainer">
                <FormContact />
              </div>
              <div className="mediaContainer">
                <video autoPlay muted loop>
                  <source src="src/assets/video/wedding.mp4" type="video/mp4"/>
                  Este navegador no soporta vídeos.
                </video>
              </div>           
            </div>
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
        <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
      </footer>
      {/* Para cuando deban comprar el producto */}
      <button>
        <NewPage href="/compra-segura" label="Pago" colorText='var(--primary-color-500)'/>
      </button>
    </>
  )
}
