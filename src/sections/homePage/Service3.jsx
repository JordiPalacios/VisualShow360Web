import { useContext, useEffect, useRef, useState } from 'react'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { ImgSlider, NavItem } from '../../components'
import { LoadContext } from '../../context/LoadContext'
import fotomaton24Data from '../../assets/mocks/fotomaton24Data.json'
import Slider from 'react-slick'

const Service3 = () => {
    const workingMode = useWorkingMode('Mobile')

    const fotomatonData = fotomaton24Data

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
    <section id='fotomaton-24h'>
        {workingMode === 'PC' ? (
        <div className="service3Container">
            <div className="service3ContentContainer">  
            <div className="fotomatonImgService3">            
                <Slider {...sliderSettings}>
                    {fotomatonData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.url} 
                        imgName={data.name} 
                        styleType='services'/>
                        ))}
                </Slider>
            </div>                      
            <div className="service3DescriptionContainer">  
            <h1>Flash 24H</h1>
            <h2>Tu fotomatón las 24H</h2>    
            <hr className='line'></hr>        
            <p>
                ¿Sabias que sólo el <span style={{ color: 'var(--accent)'}}>9%</span> de las bodas, tienen más de 100 fotos de recuerdo de su fiesta?
                <br />
                <br />
                Con Flash 24h, tendrás un fotomatón durante las <span style={{ color: 'var(--accent)'}}>24h</span> de tu boda.
                <br />
            </p>
            <div className="buttonsContainer">
            <button id='S3PcFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Ver disponibilidad!' colorText='var(--textWhite)' page='home' />
            </button>
            </div>
            </div>
            </div>
        </div>
        ) : (
        <div className="service3Container">
            <h1>Flash 24H</h1>
            <h2>Tu fotomatón las 24H</h2>
            <div className="service3ContentContainer">              
            <div className="fotomatonImgService3">            
                <Slider {...sliderSettings}>
                    {fotomatonData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.url} 
                        imgName={data.name} 
                        styleType='services'/>
                        ))}
                </Slider>
            </div>
            <div className="service3DescriptionContainer">              
            <p>
                ¿Sabias que sólo el <span style={{ color: 'var(--accent)'}}>9%</span> de las bodas, tienen más de 100 fotos de recuerdo de su fiesta?
                <br />
                <br />
                Con Flash 24h, tendrás un fotomatón durante las <span style={{ color: 'var(--accent)'}}>24h</span> de tu boda.
                <br />
            </p>
            <div className="buttonsContainer">
            <button id='S3OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Ver disponibilidad!' colorText='var(--textWhite)' page='home'/>
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
