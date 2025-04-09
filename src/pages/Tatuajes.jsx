import React, { useEffect, useState } from 'react'
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { ImgSlider, MetaTags, NavbarMenu, WhatsAppMessage } from '../components'
import TatuajesData from '../assets/mocks/tatuajesData.json'
import { useWorkingMode } from '../assets/Customhooks/useWorkingMode'
import Slider from 'react-slick'

export const Tatuajes = () => {
    const workingMode = useWorkingMode('Mobile')
    const tatuajesData = TatuajesData

    useEffect (() => {
        const handleResize = () => {
        const newSetttings = window.innerWidth < 1024
        ? {...sliderSettings, slidesToShow: 1}
        : {...sliderSettings, slidesToShow: 3}

        setSliderSettings(newSetttings)
        }
    
        window.addEventListener('resize', handleResize)

        handleResize()
        
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    })

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
                    <div className="fotomatonImgTatuajes">            
                        <Slider {...sliderSettings}>
                            {tatuajesData.map((data) => (
                                <ImgSlider 
                                key={data.id} 
                                urlImg={data.url} 
                                imgName={data.name} 
                                styleType='services'/>
                                ))}
                        </Slider>
                    </div> 
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
