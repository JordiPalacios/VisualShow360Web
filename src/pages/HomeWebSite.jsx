import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactUs, Footer, ImgSlider, InfiniteLoop, NavItem, NavbarMenu, ReviewsCard, WhatsAppMessage } from '../components'
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

  const handleClick = () => {
    const element = document.getElementById('plataforma360')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    const newSetttingsReviews = window.innerWidth < 1300
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
          <h1> <span style={{ color: 'var(--textWhite)' }}> ¡ FRASE</span>&nbsp;POTENTE 1 !</h1>
          <h2>Frase Potente 2</h2>
          <div className="palabrasClave">
            <h1>Fotomaton</h1>
            <h1>Magic Mirror</h1>
            <h1>RingRing Experience</h1>
          </div>
          <video className='videoMobile' autoPlay muted loop>
            <source src="src/assets/video/videoMobileBW.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>
          <video className='videoTabletPC' autoPlay muted loop>
            <source src="src/assets/video/weedingBW.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>
          <img onClick={handleClick} src="src/assets/gifs/arrow.gif" alt="arrowGift" />
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
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
              </button>
            </div>
          </div>
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="VisualShow" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="VisualShow" equal={true}/>
          </div>
        </section>
        <section id='magic-mirror'>
          {workingMode === 'PC' ? (
            <div className='service2Container'>
              <div className="service2ContentContainer">
                <img src="src/assets/gifs/GIF.gif" alt="Espejo magico"/>           
                <div className="service2DescriptionContainer">  
                  <h2>Magic Mirror</h2>
                  <h3> ¡Frase Guay &nbsp;<span>PC/Tablet!</span></h3>    
                  <div className='line'></div>             
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                  </p>
                  <div className="buttonsContainer">
                    {/* <button>
                      <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                    </button> */}
                    <button>
                      <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : 
          (
            <div className='service2Container'>
              <h2>Magic Mirror</h2>              
              <h3> ¡Frase Guay Para Tablet!</h3> 
              <div className="service2ContentContainer">              
                <img src="src/assets/gifs/GIF.gif" alt="Espejo magico"/>
                <div className="service2DescriptionContainer">                
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                  </p>
                  <div className="buttonsContainer">
                    {/* <button>
                      <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                    </button> */}
                    <button>
                      <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
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
                <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.jpg" alt="Espejo magico blanco"/>                      
              <div className="service3DescriptionContainer">  
                <h2>White Magic Mirror</h2>
                <h3> <span>¡Titulo Guay</span>&nbsp;PC/Tablet!</h3>    
                <div className='line'></div>        
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                {/* <button>
                  <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
                </button> */}
                <button>
                  <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home'/>
                </button>
              </div>
              </div>
              </div>
            </div>
          ) : (
            <div className="service3Container">
              <h2>White Magic Mirror</h2>
              <h3> ¡Titulo Guay Para Tablet!</h3>
              <div className="service3ContentContainer">              
              <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.jpg" alt="Espejo magico blanco"/>
              <div className="service3DescriptionContainer">              
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                {/* <button>
                  <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
                </button> */}
                <button>
                  <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)'/>
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
            <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="VisualShow" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="VisualShow" equal={true}/>
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
                      cardClassName={data.cardClassName}
                      />
                  ))}
                </Slider>
            </div>
            <a href="https://www.bodas.net/animacion/360-&-magic-mirror-visualshow360--e218488/opiniones" target="_blank">Ver más</a>
            <div className="reviewsMediaContainer">
              <a href="https://www.bodas.net/animacion/360-&-magic-mirror-visualshow360--e218488/opiniones" target="_blank">
                <img src="src/assets/img/reviews_equipo/bodasNetSVG.svg" alt="bodas.net" />
              </a>                
            </div>
          </div>
        </section>
        {/* !Este section es de companies */}
        <section>
          <div className="companiesContainer">
            <h2>Empresas que han confiado en VisualShow</h2>
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
        <section id="contacto">
          <ContactUs />
        </section>
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
