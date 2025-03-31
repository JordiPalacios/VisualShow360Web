import { useEffect, useState } from 'react'
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
            <h1>Plataforma 360</h1>
            <h2>Ver a tu suegra bailando twerk te va a quitar la depresión post-boda</h2>
            <div className="fotomatonImgService1">            
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
            <div className="descriptionContainerService1">                
                <p>
                    Sabemos que quieres que tus invitados <span style={{ color: 'var(--accent)'}}>FLIPEN</span> y se lo cuenten a todo el mundo. <br />
                    Crea una boda de esas que no se olvidan fácilmente. <br />
                    Vamos, que se <span style={{ color: 'var(--accent)'}}>entere todo el mundo</span> de que te has casado. <br />
                    <br />
                    Podemos hacer que eso pase. <br />
                    <br />
                    Tus invitados tendrán la sensación de subir a una atracción, <span style={{ color: 'var(--accent)'}}>su momento de protagonismo</span>, donde podrán bailar y brillar como verdaderas estrellas.<br />
                    Y <span style={{ color: 'var(--accent)'}}>PREPÁRATE</span> para levantarte llorando con depresión post-boda, te enviaremos <span style={{ color: 'var(--accent)'}}>TODOS</span> los vídeos 360... y las lágrimas serán de risas aseguradas. <br />
                    <br /> 
                    ¿Quieres tener estos vídeos para <span style={{ color: 'var(--accent)'}}>toda la vida</span>, verdad? <br />
                </p>
                <div className="service1Details"> 
                    <h2>¿Qué incluye?</h2>                   
                    <ul>
                        <li>• Alfombra roja </li>
                        <li>• Separadores de seguridad</li>
                        <li>• Mesa de atrezzo premium</li>
                        <li>• Personalización de logo y música</li>
                        <li>• Descarga de vídeos al momento</li>
                        <li>• Staff Cañero (2)</li>
                    </ul>
                </div>
            </div>
            <div className="buttonsContainer">
            <button id='S1FormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Lo quiero!' colorText='var(--accent)' page='home'/>
            </button>
            </div>
        </div>
    </section>
)
}
