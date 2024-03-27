import { useEffect, useState } from 'react'
import { NewPage } from '../../components/NewPage'

export const Footer = () => {
const [workingMode, setWorkingMode] = useState('')
let content

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

  if (workingMode === 'PC') {
    content = (
      <footer className="footerContainer"> 
        <hr className="line"></hr>
        <div className="footerDescriptionContainer">
          <div className="rrssMainContainer">
            <a href="mailto:visualshow360@gmail.com?subject=Información sobre los servicios de VisualShow360&body=Hola quiero saber más sobre visualshow!" target="_blank" rel='noreferrer'>visualshow360@gmail.com</a>
            <div className="rrssContainer">
              <a href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <img id="ig" src="./icons/ig.svg" alt='igSVG' loading='lazy'/>
              </a>            
              <a href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" target="_blank" rel="noopener noreferrer">
                <img id="tiktok" src="./icons/tiktok.svg" alt='tiktokSVG' loading='lazy'/>
              </a>
            </div>
          </div>
          <div className="logoContainer">
            <h3>¡Logo VisualShow!</h3>
            <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
            <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" target="_blank" rel='noreferrer'> 
              <small>Creada y diseñada x Jordi Code</small>
            </a>
          </div>
          <div className="normativeContainer">
            <button>
              <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--secondary)'/>
            </button>
            <button>
              <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--secondary)'/>
            </button>
            <button>
              <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--secondary)'/>
            </button>
          </div>
        </div>
        <img src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" loading='lazy' />
      </footer>
    )
  } else {
    content = (
      <footer className="footerContainer">  
      <hr className="line"></hr>
        <h3>¡Logo VisualShow!</h3>
        <a href="mailto:visualshow360@gmail.com?subject=Información sobre los servicios de VisualShow360&body=Hola quiero saber más sobre visualshow!" target="_blank" rel='noreferrer'>visualshow360@gmail.com</a>
        <div className="rrssContainer">
          <a href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
            <img id="ig" src="./icons/ig.svg" alt='igSVG' loading='lazy' />
          </a>            
          <a href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" target="_blank" rel="noopener noreferrer">
            <img id="tiktok" src="./icons/tiktok.svg" alt='tiktokSVG' loading='lazy' />
          </a>
        </div>
        <div className="normativeContainer">
        <p><small>© 2024 VisualShow360 - Todos los derechos reservados</small></p>
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
        <img src="./img/Extra/generalitat.webp" target="_blank" alt="generalitatImg" loading='lazy' />
        <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" target="_blank" rel='noreferrer'> 
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