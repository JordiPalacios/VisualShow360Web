import React from 'react'
import { NavbarMenu, NewPage } from '../components'

export const EventosReales = () => {

    return (
        <div className='eventosContainer'>
            <NavbarMenu />
            <div>Eventos Reales</div>
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
                    <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--primary-color-100)'/>
                </button>
                <button>
                    <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--primary-color-100)'/>
                </button>
                <button>
                    <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--primary-color-100)'/>
                </button>
                </div>
                <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
                <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr"> Creada y diseñada por Jordi Code</a>
                </div>
            </footer>
        </div>
    )
}
