import { useContext, useEffect, useRef, useState } from 'react'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { ImgSlider, NavItem } from '../../components'
import { LoadContext } from '../../context/LoadContext'
import magicMirrorWhiteData from '../../assets/mocks/magicmirrorWhiteData.json'
import Slider from 'react-slick'

const Service3 = () => {
    const workingMode = useWorkingMode()

    const fotomatonData = magicMirrorWhiteData

    useEffect (() => {
        const handleResize = () => {
        const newSetttings = window.innerWidth < 1024
        ? {...sliderSettings, slidesToShow: 1}
        : {...sliderSettings, slidesToShow: 1}

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
        slidesToScroll: 1,
    })

return (
    <section id='white-magic-mirror'>
        {workingMode === 'PC' ? (
        <div className="service3Container">
            <div className="service3ContentContainer">  
            <div className="fotomatonImgService3">            
                <Slider {...sliderSettings}>
                    {fotomatonData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.urlImg} 
                        imgName={data.id} 
                        styleType='services'/>
                        ))}
                </Slider>
            </div>                      
            <div className="service3DescriptionContainer">  
            <h1>Magic Mirror White</h1>
            <h2>TUS FOTOS DE REVISTA</h2>    
            <hr className='line'></hr>        
            <p>
                Mucho <span style={{ color: 'var(--accent)'}}>cuidadito</span> con éste fotomatón, puede pasar de ser tu aliado a llevarse todo el protagonismo. <br />
                <br />
                Eligue un buen fondo y crea los <span style={{ color: 'var(--accent)'}}>RECUERDOS</span> más espectaculares de tu boda. No seas cutre, que en ese momento ya no hay fotógrafos.
            </p>
            <div className="buttonsContainer">
            <button id='S3PcFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home' />
            </button>
            </div>
            </div>
            </div>
        </div>
        ) : (
        <div className="service3Container">
            <h1>Magic Mirror White</h1>
            <h2>TUS FOTOS DE REVISTA</h2>
            <div className="service3ContentContainer">              
            <div className="fotomatonImgService3">            
                <Slider {...sliderSettings}>
                    {fotomatonData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.urlImg} 
                        imgName={data.id} 
                        styleType='services'/>
                        ))}
                </Slider>
            </div>
            <div className="service3DescriptionContainer">              
            <p>
                Mucho <span style={{ color: 'var(--accent)'}}>cuidadito</span> con éste fotomatón, puede pasar de ser tu aliado a llevarse todo el protagonismo. <br />
                <br />
                Eligue un buen fondo y crea los <span style={{ color: 'var(--accent)'}}>RECUERDOS</span> más espectaculares de tu boda. No seas cutre, que en ese momento ya no hay fotógrafos.
            </p>
            <div className="buttonsContainer">
            <button id='S3OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home'/>
            </button>
            </div>
            </div>
            </div>
        </div>
        )}        
    </section>
)
}

export const LazyService3 = () => {
    const { show, setShow } = useContext(LoadContext)
    const elementRef = useRef()

    useEffect( function () {
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '300px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <Service3 /> : null}
        </section>
    )
}
