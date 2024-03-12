import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContactUs, ImgSlider, NavItem, WhatsAppMessage } from '../components'
import Slider from "react-slick";
import FotomatonData from '../assets/mocks/fotomatonData.json'
import { AboutUs, Companies, Presentation, Reviews } from '../sections/homePage';
import { Footer, InfiniteLoopSection } from '../sections/Shared';

export const HomeWebsite = () => {
  
  const fotomatonData = FotomatonData
  const [workingMode, setWorkingMode] = useState('')

  const [sliderSettings, setSliderSettings] = useState({
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

  window.addEventListener('resize', handleResize)

  handleResize()

  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

  return (
    <>
      <Presentation />
      <main>
        <section id='plataforma360'>
          <div className="service1Container">
            <h2>Fotomaton 360</h2>
            <h3>Ver a tu suegra haciendo twerk te va a quitar la depresión post-boda</h3>
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
              <button>
                <NavItem href='#contacto' label='¡No pulses aquí!' colorText='var(--accent)' page='home'/>
              </button>
            </div>
          </div>
        </section>
        <InfiniteLoopSection />
        <section id='magic-mirror'>
          {workingMode === 'PC' ? (
            <div className='service2Container'>
              <div className="service2ContentContainer">
                <img src="src/assets/gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>           
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
                <img src="src/assets/gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>
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
                <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" loading='lazy'/>                      
              <div className="service3DescriptionContainer">  
                <h2>White Magic Mirror</h2>
                <h3> <span>¡Titulo Guay</span>&nbsp;PC/Tablet!</h3>    
                <div className='line'></div>        
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
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
              <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" loading='lazy'/>
              <div className="service3DescriptionContainer">              
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                <button>
                  <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)'/>
                </button>
              </div>
              </div>
              </div>
            </div>
          )}
          
        </section>
        <InfiniteLoopSection />
        <Reviews />
        <Companies />
        <AboutUs />
        <ContactUs />
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <Footer />
    </>
  )
}
