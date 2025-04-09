import { NewPage } from '../../components/NewPage'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useEffect, useRef, useState } from 'react'

const Footer = () => {
  let content
  const workingMode = useWorkingMode('Mobile')
  const [igSelected, setIgSelected] = useState(false)
  const [tikTokSelected, setTikTokSelected] = useState(false)
  
  const handleMouseEnter = (socialNetwork) => {
    if(socialNetwork === 'ig') {
      setIgSelected(true)
    } else if (socialNetwork === 'tiktok') {
      setTikTokSelected(true)
    }
  }

  const handleMouseLeave = (socialNetwork) => {
    if(socialNetwork === 'ig') {
      setIgSelected(false)
    } else if (socialNetwork === 'tiktok') {
      setTikTokSelected(false)
    }
  }

  if (workingMode === 'PC') {
    content = (
      <footer className="footerContainer"> 
        <hr className="line"></hr>
        <div className="footerDescriptionContainer">
          <div className="rrssMainContainer">
            <a 
            href="mailto:contacto@visualshow360.com?subject=Información sobre los servicios de VisualShow360&body=¡Hola quiero saber más sobre visualshow!" 
            target="_blank" 
            rel='noreferrer'            
            aria-label='Enlace al correo de VisualShow360'>
              contacto@visualshow360.com</a>
            <div className="rrssContainer">
              <a 
              onMouseEnter={() => handleMouseEnter('ig')}
              onMouseLeave={() => handleMouseLeave('ig')}
              href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noopener noreferrer"              
              aria-label='Enlace al Instagram de VisualShow360'>
                <img id="ig" className='igRRSS' src={igSelected ? "./icons/ig2.webp" : "./icons/ig1.webp"} alt='igSVG' />
              </a>            
              <a 
              onMouseEnter={() => handleMouseEnter('tiktok')}
              onMouseLeave={() => handleMouseLeave('tiktok')}
              href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"              
              aria-label='Enlace al TikTok de VisualShow360'>
                <img id="tiktok" className='tiktokRRSS' src={tikTokSelected ? "./icons/tiktok4.webp" : "./icons/tiktok3.webp"} alt='tiktokSVG' />
              </a>
            </div>
          </div>
          <div className="logoContainer">
            <h3>Visual Show 360</h3>
            <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
            <a 
            href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
            target="_blank" 
            rel='noreferrer'            
            aria-label='Enlace al Instagram de Jordi Code'> 
              <small>Creada y diseñada x @jordi_code</small>
            </a>
          </div>
          <div className="normativeContainer">
            <button id='AvisoLegalPc' aria-label='Nos mueve hasta la página de Aviso Legal'>
              <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--secondary)'/>
            </button>
            <button id='PoliticaPrivacidadPc' aria-label='Nos mueve hasta la página de Politica de Privacidad'>
              <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--secondary)'/>
            </button>
            <button id='TerminosCondicionesPc' aria-label='Nos mueve hasta la página de Terminos y Condiciones'>
              <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--secondary)'/>
            </button>
          </div>
        </div>
        <img src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" />
      </footer>
    )
  } else {
    content = (
      <footer className="footerContainer">  
      <hr className="line"></hr>
        <h3>Visual Show 360</h3>
        <a 
        href="mailto:contacto@visualshow360.com?subject=Información sobre los servicios de VisualShow360&body=Hola quiero saber más sobre visualshow!" 
        target="_blank" 
        rel='noreferrer'        
        aria-label='Enlace al correo de VisualShow360'>
          contacto@visualshow360.com
        </a>
        <div className="rrssContainer">
          <a 
          href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
          target="_blank" 
          rel="noopener noreferrer"          
          aria-label='Enlace al Instagram de VisualShow360'>
            <img id="ig" src="./icons/ig1.webp" alt='igSVG' />
          </a>            
          <a 
          href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" 
          target="_blank" 
          rel="noopener noreferrer"          
          aria-label='Enlace al TikTok de VisualShow360'>
            <img id="tiktok" src="./icons/tiktok3.webp" alt='tiktokSVG' />
          </a>
        </div>
        <div className="normativeContainer">
        <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
        <button id='AvisoLegalOthers' aria-label='Nos mueve hasta la página de Aviso Legal'>
          <NewPage href="/aviso-legal" label="Aviso Legal" />
        </button>
        <button id='PoliticaPrivacidadOthers' aria-label='Nos mueve hasta la página de Politica de Privacidad'>
          <NewPage href="/politica-privacidad" label="Politica de Privacidad" />
        </button>
        <button id='TerminosCondicionesOthers' aria-label='Nos mueve hasta la página de Terminos y Condiciones'>
          <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" />
        </button>
        </div>
        <img src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" />
        <a 
          href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
          target="_blank" 
          aria-label='Enlace al Instagram de Jordi Code'> 
          <small>Creada y diseñada x @jordi_code</small>
        </a>
      </footer>
    )
  }

    
return (
    <>
      {content}
    </>
)
}

export const LazyFooter = () => {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect( function () {
    const onChange = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '300px'
    })

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  })

  return (
    <section ref={elementRef}>
      {show ? <Footer /> : null}
    </section>
  )
}