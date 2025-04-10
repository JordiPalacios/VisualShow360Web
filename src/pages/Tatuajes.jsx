import React from 'react'
import { LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { TatuajesExplicacion01, TatuajesExplicacion02, TatuajesFooter, TatuajesHeader, TatuajesMedidas } from '../sections/tatuajes'
import { MetaTags, NavbarMenu, WhatsAppMessage } from '../components'
import { useWorkingMode } from '../assets/Customhooks/useWorkingMode'

export const Tatuajes = () => {
    const workingMode = useWorkingMode('Mobile')

    return (
    <section id='tatuajes'>      
                <MetaTags 
                    title={'VisualShow360 | Teléfono Audiolibro, Neones & Letras Love'}
                    keywords={'Teléfono Audiolibro, Neones, Letras Love, Barcelona, Plataforma360, Espejo Magico Atrezzo, Bodas, Eventos, Catalunya'}
                    desc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                    author={'VisualShow360'}
                    rating={'General'}
                    ogTitle={'VisualShow360'}
                    ogDesc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                    ogType={'website'}
                    ogUrl={'https://visualshow360.com/otros-productos'}
                    ogImg={'./img/servicios/ringRing/audiolibroVS.webp'}
                    OgImgType={'image/webp'}
                    ogImgAlt={'Audio Libro Barcelona'}
                />  
                <header>
                    <NavbarMenu />
                </header>
                <main className='tatuajesContainer'>
                    <TatuajesHeader />
                    <TatuajesExplicacion01 />
                    <TatuajesExplicacion02 />
                    <TatuajesMedidas />
                    <TatuajesFooter />
                    <WhatsAppMessage className="contactFixed" msg="https://wa.me/message/2RM67GODIWVUE1" />
                </main>
                <LazyFooter />
        </section>
    )
}
