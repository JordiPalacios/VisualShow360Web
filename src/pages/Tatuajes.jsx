import React from 'react'
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { MetaTags, NavbarMenu, WhatsAppMessage } from '../components'

export const Tatuajes = () => {
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
                <main>
                    <h1>Tatuajes</h1>
                    <LazyInfiniteLoopSection />
                    <ContactUs 
                        tittle={
                            <>
                                Descarga <span style={{ color: "var(--accent-telf)"}}> GRATIS</span> Control de Gastos para ahorrarte dinero en tu boda
                            </>
                            }
    
                        desc={
                            <>
                                Las bodas tienen gastos absurdos
                                <br />
                                ¿400€ en servilletas personalizadas? 🙄
                                <br />
                                <br />
                                Invierte en lo que hará tu día inolvidable. 👇
                            </>
                            }
                        className="contactoContainer"
                        />
                    <WhatsAppMessage className="contactFixed" msg="https://wa.me/message/2RM67GODIWVUE1" />
                </main>
                <LazyFooter />
        </section>
    )
}
