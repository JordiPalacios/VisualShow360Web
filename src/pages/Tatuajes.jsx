import React from 'react'
import { LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { TatuajesExplicacion01, TatuajesExplicacion02, TatuajesFooter, TatuajesHeader, TatuajesMedidas } from '../sections/tatuajes'
import { MetaTags, NavbarMenu, WhatsAppMessage } from '../components'

export const Tatuajes = () => {

    return (
    <section id='tatuajes'>      
                <MetaTags 
                    title={'VisualShow360 | Tatuajes'}
                    keywords={'Tatuajes temporales, bodas, eventos, fiestas, recuerdos personalizados, Barcelona, Catalunya, VisualShow360'}
                    desc={'Descubre cómo los tatuajes temporales pueden transformar tu boda, fiesta o evento en una experiencia inolvidable. En VisualShow360, ofrecemos diseños únicos y personalizados que capturan la esencia de tus momentos más especiales. Sorprende a tus invitados con un recuerdo creativo y divertido que quedará grabado en sus memorias. ¡Haz de tu celebración algo único con nuestros tatuajes temporales!'}
                    author={'VisualShow360'}
                    rating={'General'}
                    ogTitle={'VisualShow360 | Tatuajes'}
                    ogDesc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                    ogType={'website'}
                    ogUrl={'https://visualshow360.com/tatuajes'}
                    ogImg={'./img/servicios/tatuajes/tatuaje_01.webp'}
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
                    <LazyInfiniteLoopSection />
                    <TatuajesFooter />
                    <WhatsAppMessage className="contactFixed" msg="https://wa.link/x6ih2e" />
                </main>
                <LazyFooter />
        </section>
    )
}
