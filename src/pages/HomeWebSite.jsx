import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormContact, ImgSlider, InfiniteLoop, NavItem, NavbarMenu, NewPage, ReviewsCard, WhatsAppMessage } from '../components'
import Slider from "react-slick";
import CompaniesData from '../assets/mocks/companiesData.json'
import FotomatonData from '../assets/mocks/fotomatonData.json'
import ReviewsData from '../assets/mocks/reviewsData.json'

export const HomeWebsite = () => {
  const companyData = CompaniesData
  const fotomatonData = FotomatonData
  const reviewsData = ReviewsData
  const [workingMode, setWorkingMode] = useState('')

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  const [sliderSettingsReviews, setSliderSettingsReviews] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  })

// useEffect para crear las marcas del modo trabajo PC - Tablet - Mobile
useEffect (() => {
  const checkWorkingMode = () => {
    if (window.innerWidth > 1023) {
      setWorkingMode('PC')
    } else if ( (window.innerWidth < 1024) && (window.innerWidth > 759)) {
      setWorkingMode('Tablet')
    } else {
      setWorkingMode('Mobile')
    }
  }

  window.addEventListener('resize', checkWorkingMode)

  checkWorkingMode()

  return () => {
    window.removeEventListener('resize', checkWorkingMode)
  }

}, [])

useEffect (() => {
  const handleResize = () => {
    const newSetttings = window.innerWidth < 1024
    ? {...sliderSettings, slidesToShow: 1}
    : {...sliderSettings, slidesToShow: 3}

    setSliderSettings(newSetttings)
  }

  const handleResizeReviews = () => {
    const newSetttingsReviews = window.innerWidth < 1024
    ? {...sliderSettingsReviews, slidesToShow: 1, dots: true}
    : {...sliderSettingsReviews, slidesToShow: 3, dots: true}

    setSliderSettingsReviews(newSetttingsReviews)
  }

  window.addEventListener('resize', handleResize)
  window.addEventListener('resize', handleResizeReviews)

  handleResize()
  handleResizeReviews()

  return () => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('resize', handleResizeReviews)
  }
}, [])

  return (
    <>
      
      <header>
        <NavbarMenu />
        <div className="presentationContainer">
          <h1 style={{ 
            color:'var(--text-50)',
            // filter: 'drop-shadow(0px 0px 5px var(--accent-300))' 
            }}>Frase Potente 1</h1>
          <h2 style={{ color:'var(--secondary-200)' }}>Frase Potente 2</h2>
          <div className="palabrasClave">
            <h1>Fotomaton</h1>
            <h1>Magic Mirror</h1>
            <h1>RingRing Experience</h1>
          </div>
          <video autoPlay muted loop>
            <source src="src/assets/video/bgPartyNight.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>
        </div>
      </header>

      <main>
        {/* El punto que se ve al lado del si quiero es debido a los estilos, debemos quitarlo desde el css */}
        <section id='plataforma360'>
          <div className="service1Container">
            <h2>Fotomaton 360</h2>
            <h3> ¡Frase Guay Para PC/Tablet!</h3>
            <div className="fotomatonImgService1">
              <Slider {...sliderSettings}>
                  {fotomatonData.map((data) => (
                      <ImgSlider key={data.id} urlImg={data.urlImg} imgName={data.id} styleType='services'/>
                  ))}
              </Slider>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta labore culpa facere ab illum dolorem temporibus, fuga quibusdam, animi magnam obcaecati! Omnis dignissimos nam beatae sapiente adipisci ut soluta?
            </p>
            <div className="buttonsContainer">
              {/* <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-950)'/>
              </button> */}
              <button>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent-950)'/>
              </button>
            </div>
          </div>
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
          </div>
        </section>
        <section id='magic-mirror'>
          {workingMode === 'PC' ? (
            <div className='service2Container'>
              <div className="service2ContentContainer">
                <img src="src/assets/img/servicios/EspejoMagico.webp" alt="EspejoMagico"/>           
                <div className="service2DescriptionContainer">  
                  <h2>Magic Mirror</h2>
                  <h4> ¡Frase Guay Para PC!</h4>    
                  <div className='line'></div>             
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                  </p>
                  <div className="buttonsContainerEven">
                    {/* <button>
                      <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                    </button> */}
                    <button>
                      <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent-50)'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          (
            <div className='service2Container'>
              <h2>Magic Mirror</h2>
              <h3> ¡Frase Guay Para PC/Tablet!</h3>
              <div className="service2ContentContainer">              
                <img src="src/assets/img/servicios/EspejoMagico.webp" alt="EspejpoMagico"/>
                <div className="service2DescriptionContainer">                
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                  </p>
                  <div className="buttonsContainerEven">
                    {/* <button>
                      <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                    </button> */}
                    <button>
                      <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent-50)'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
        </section>
        <section id='white-magic-mirror'>
          {workingMode === 'PC' ? (
            <div className="service3Container">
              <div className="service3ContentContainer">  
                <img src="src/assets/img/servicios/magicMirrorWhite.jpg" alt="EspejoMagicoWhite"/>                      
              <div className="service3DescriptionContainer">  
                <h2>White Magic Mirror</h2>
                <h4> ¡Titulo Guay Para PC/Tablet!</h4>    
                <div className='line'></div>        
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                {/* <button>
                  <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
                </button> */}
                <button>
                  <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--primary-color-100)'/>
                </button>
              </div>
              </div>
              </div>
            </div>
          ) : (
            <div className="service3Container">
              <h2>White Magic Mirror</h2>
              <h3> ¡Titulo Guay Para PC/Tablet!</h3>
              <div className="service3ContentContainer">              
              <img src="src/assets/img/servicios/magicMirrorWhite.jpg" alt="EspejpoMagico"/>
              <div className="service3DescriptionContainer">              
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                {/* <button>
                  <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
                </button> */}
                <button>
                  <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--primary-color-100)'/>
                </button>
              </div>
              </div>
              </div>
            </div>
          )}
          
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
          </div>
        </section>
        {/* !Este section es de reviews */}
        <section>
          <div className="reviewsContainer">
            <h2>Qué piensan de nosotros ...</h2>
            <div className="line"></div>
            <div className="fotomatonImgReviews">
              <Slider {...sliderSettingsReviews}>
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
            <h2>Empresas que han confiado en nosotros</h2>
            <div className="line"></div>
            <div className="logoCompanies">
              {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
              ))}
              {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
              ))}
            </div>
          </div>
        </section>
        <section id="nosotros">
          <div className="aboutUsContainer">
            <h2>¿ Quienes Somos ?</h2>
            <img src="src/assets/img/reviews_equipo/navidadDavidIvet.jpg" alt="VisualShow360Team" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
            </p>
          </div>
        </section>
        {/* !Este section es de contact us */}
        <section id='contacto'>
          <div className="contactoContainer">
            <h2>¡ SÍ Quiero !</h2>
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
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <footer>
        <div className="footerContainer">  
          <h3>No hacemos eventos...</h3>      
          <h4>¡ Creamos recuerdos !</h4>
          <div className="line"></div>
          <div className="rrssContainer">
            <a href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
              <img id="ig" src="src/assets/icons/ig.svg"/>
            </a>            
            <a href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" target="_blank" rel="noopener noreferrer">
              <img id="ig" src="src/assets/icons/tiktok.svg"/>
            </a>
          </div>
          <div className="normativeContainer">
          <p>© 2024 VisualShow360 - Todos los derechos reservados</p>
          <button>
            <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--text-100)'/>
          </button>
          <button>
            <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--text-100)'/>
          </button>
          <button>
            <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--text-100)'/>
          </button>
          </div>
          <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
          <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
          style={{ fontSize:'.6rem', padding:'10px' }}> Creada y diseñada x Jordi Code</a>
        </div>
      </footer>
    </>
  )
}
