import { NewPage } from '../../components/NewPage'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'

export const Footer = () => {
  const workingMode = useWorkingMode('Mobile')
  let content

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
            title='Enlace al correo de VisualShow360'
            aria-label='Enlace al correo de VisualShow360'>
              contacto@visualshow360.com</a>
            <div className="rrssContainer">
              <a 
              href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
              target="_blank" 
              rel="noopener noreferrer"
              title='Enlace al Instagram de VisualShow360'
              aria-label='Enlace al Instagram de VisualShow360'>
                <LazyLoadImage id="ig" src="./icons/ig.svg" alt='igSVG' />
              </a>            
              <a 
              href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" 
              target="_blank" 
              rel="noopener noreferrer"
              title='Enlace al TikTok de VisualShow360'
              aria-label='Enlace al TikTok de VisualShow360'>
                <LazyLoadImage id="tiktok" src="./icons/tiktok.svg" alt='tiktokSVG' />
              </a>
            </div>
          </div>
          <div className="logoContainer">
            <h3>¡Logo VisualShow!</h3>
            <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
            <a 
            href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
            target="_blank" 
            rel='noreferrer'
            title='Enlace al Instagram de Jordi Code' 
            aria-label='Enlace al Instagram de Jordi Code'> 
              <small>Creada y diseñada x Jordi Code</small>
            </a>
          </div>
          <div className="normativeContainer">
            <button id='AvisoLegal' aria-label='Nos mueve hasta la página de Aviso Legal'>
              <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--secondary)'/>
            </button>
            <button id='PoliticaPrivacidad' aria-label='Nos mueve hasta la página de Politica de Privacidad'>
              <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--secondary)'/>
            </button>
            <button id='TerminosCondiciones' aria-label='Nos mueve hasta la página de Terminos y Condiciones'>
              <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--secondary)'/>
            </button>
          </div>
        </div>
        <LazyLoadImage src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" />
      </footer>
    )
  } else {
    content = (
      <footer className="footerContainer">  
      <hr className="line"></hr>
        <h3>¡Logo VisualShow!</h3>
        <a 
        href="mailto:contacto@visualshow360.com?subject=Información sobre los servicios de VisualShow360&body=Hola quiero saber más sobre visualshow!" 
        target="_blank" 
        rel='noreferrer'
        title='Enlace al correo de VisualShow360'
        aria-label='Enlace al correo de VisualShow360'>
          contacto@visualshow360.com
        </a>
        <div className="rrssContainer">
          <a 
          href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
          target="_blank" 
          rel="noopener noreferrer"
          title='Enlace al Instagram de VisualShow360'
          aria-label='Enlace al Instagram de VisualShow360'>
            <LazyLoadImage id="ig" src="./icons/ig.svg" alt='igSVG' />
          </a>            
          <a 
          href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" 
          target="_blank" 
          rel="noopener noreferrer"
          title='Enlace al TikTok de VisualShow360'
          aria-label='Enlace al TikTok de VisualShow360'>
            <LazyLoadImage id="tiktok" src="./icons/tiktok.svg" alt='tiktokSVG' />
          </a>
        </div>
        <div className="normativeContainer">
        <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
        <button id='AvisoLegal' aria-label='Nos mueve hasta la página de Aviso Legal'>
          <NewPage href="/aviso-legal" label="Aviso Legal" />
        </button>
        <button id='PoliticaPrivacidad' aria-label='Nos mueve hasta la página de Politica de Privacidad'>
          <NewPage href="/politica-privacidad" label="Politica de Privacidad" />
        </button>
        <button id='TerminosCondiciones' aria-label='Nos mueve hasta la página de Terminos y Condiciones'>
          <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" />
        </button>
        </div>
        <LazyLoadImage src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" />
        <a 
          href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
          target="_blank" 
          rel='noreferrer' 
          title='Enlace al Instagram de Jordi Code' 
          aria-label='Enlace al Instagram de Jordi Code'> 
          <small>Creada y diseñada x Jordi Code</small>
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