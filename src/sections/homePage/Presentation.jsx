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
            <h1 className='h1-fade-in'> ¡ FRASE&nbsp;<span style={{ color: 'var(--accent)', fontWeight: '900'}}>POTENTE 1 !</span></h1>
            <h2 className='h2-fade-in'>Frase Potente 2</h2>
            <video className='videoMobile' autoPlay muted loop>
                <source src="src/assets/video/videoMobileBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
            <video className='videoTabletPC' autoPlay muted loop>
                <source src="src/assets/video/weedingBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
            <img className='img-fade-in' onClick={handleClick} src="src/assets/gifs/arrow.gif" alt="arrowGift" />
        </div>
    </header>
)
}
