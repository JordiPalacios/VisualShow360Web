import React, { useEffect, useState } from 'react'
import TatuajesData from '../../assets/mocks/tatuajesData.json'
import { ImgSlider } from '../../components'
import Slider from 'react-slick'

export const TatuajesHeader = () => {
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
    <header className='tatuajesHeader'>
        <h1>Tatuajes</h1>
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
        <h2> 
            TUS INVITADOS VAN A FLIPAR CUANDO VEAN ESTO...
        </h2>
        <p>
            ¿Nos jugamos algo?
            <br />
            Seguro que no se esperan ver ese tatuaje
            que ya tienes en mente
        </p>
    </header>
    )
}
