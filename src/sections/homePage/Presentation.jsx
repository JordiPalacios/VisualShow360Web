import React from 'react'
import { NavbarMenu } from '../../components'

export const Presentation = () => {

    const handleClick = () => {
        const element = document.getElementById('plataforma360')
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        }
    }

return (
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
)
}
