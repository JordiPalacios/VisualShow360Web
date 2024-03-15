import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FotomatonData from '../../assets/mocks/fotomatonData.json'
import Slider from 'react-slick';
import { ImgSlider, NavItem } from '../../components';

export const Service1 = () => {
    const fotomatonData = FotomatonData

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
    <section id='plataforma360'>
        <div className="service1Container">
            <h1>Fotomaton 360</h1>
            <h2>Ver a tu suegra haciendo twerk te va a quitar la depresión post-boda</h2>
            <div className="fotomatonImgService1">
            <Slider {...sliderSettings}>
                {fotomatonData.map((data) => (
                    <ImgSlider key={data.id} urlImg={data.urlImg} imgName={data.id} styleType='services'/>
                ))}
            </Slider>
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta labore culpa facere ab illum dolorem temporibus, fuga quibusdam, animi magnam obcaecati! Omnis dignissimos nam beatae sapiente adipisci ut soluta?
            </p>
            <div className="buttonsContainer">
            <button>
                <NavItem href='#contacto' label='¡No pulses aquí!' colorText='var(--accent)' page='home'/>
            </button>
            </div>
        </div>
    </section>
)
}
