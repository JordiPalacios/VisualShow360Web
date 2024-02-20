import React from 'react'
import { NewPage } from './NewPage'

export const Footer = () => {

  const content = (
    <div className="footerContainer">  
          <div className="line"></div>
          <h3>No hacemos eventos...</h3>      
          <h4>¡ Creamos recuerdos !</h4>
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
            <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--secondary)'/>
          </button>
          <button>
            <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--secondary)'/>
          </button>
          <button>
            <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--secondary)'/>
          </button>
          </div>
          <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
          <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr" 
          style={{ fontSize:'.6rem', padding:'10px' }} target="_blank"> Creada y diseñada x Jordi Code</a>
        </div>
  )
    
return (
    <>
      {content}
    </>
)
}