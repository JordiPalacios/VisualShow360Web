import React, { useEffect, useState } from 'react'
import TatuajesData from '../../assets/mocks/tatuajesData.json'
import Slider from 'react-slick'
import { ImgSlider } from '../../components'

export const TatuajesFooter = () => {
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
        <footer className='tatuajesFooter'>
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
            <p>
                <a href="https://www.ink-bond.com/collections/custom-wedding-temporary-tattoos?srsltid=AfmBOopCPNuHUImwBrOEuq8ypIw09lpXYwGqLKdkUm7x6Vi81H0B7hzO">
                    HAZ CLIC AQUÍ PARA QUE VEAS COMO QUEDA
                </a>
            </p>
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
