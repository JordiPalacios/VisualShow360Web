import React, { useEffect, useState } from 'react'
import TatuajesVideoData from '../../assets/mocks/tatuajesVideoData.json'
import Slider from 'react-slick'
import { ImgSlider } from '../../components'

export const TatuajesFooter = () => {
    const tatuajesVideoData = TatuajesVideoData
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
        <footer className='tatuajesFooter'>
            <div className="fotomatonImgTatuajes">            
                <Slider {...sliderSettings}>
                    {tatuajesVideoData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.url} 
                        imgName={data.name}
                        poster={data.poster} 
                        isVideo={data.isVideo}
                        styleType='video'/>
                    ))}
                </Slider>
            </div>
            <div className='buttonsContainer'>                
                <button>
                    <a 
                    href= "https://wa.link/x6ih2e"
                    target="_blank" 
                    rel="noopener noreferrer"                
                    aria-label='Enlace al WhatsApp de telefonoaudiolibro.es para pedir información'>
                        Hacer pedido
                    </a>
                </button>
            </div>
        </footer>
    )
}
