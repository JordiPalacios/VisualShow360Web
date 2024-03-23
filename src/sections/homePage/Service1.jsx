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
            <h1>Fotomaton 360</h1>
            <h2>Ver a tu suegra bailando twerk te va a quitar la depresión post-boda</h2>
            <div className="fotomatonImgService1">
            <Slider {...sliderSettings}>
                {fotomatonData.map((data) => (
                    <ImgSlider key={data.id} urlImg={data.urlImg} imgName={data.id} styleType='services'/>
                ))}
            </Slider>
            </div>
            <p>
            Sabemos que quieres que tus invitados FLIPEN y se lo cuenten a todo el mundo. <br />
            Crea una boda de esas que no se olvidan fácilmente. <br />
            <br />
            Vamos, que se entere todo el mundo de que te has casado. <br />
            <br />
            Podemos hacer que eso pase. <br />
            <br />
            Tus invitados tendrán la sensación de subir a una atracción, su momento de protagonismo, dónde podrán bailar y brillar como verdaderas estrellas.<br />
            <br />
            Y prepárate, al levantarte llorando con depresión post-boda, te enviaremos todos los vídeos 360... y las lágrimas serán de risas aseguradas. <br />
            <br /> 
            ¿ Quieres tener estos videos para toda la vida, verdad? <br />
            <br /> 
            </p>
            <ul>
                <li>Alfombra roja y separadores de seguridad</li>
                <li>Mesa de atrezzo premium</li>
                <li>Personalización de logo y música</li>
                <li>Descarga de vídeos al momento</li>
                <li>2 Staff cañeros</li>
            </ul>
            <div className="buttonsContainer">
            <button>
                <NavItem href='#contacto' label='¡No pulses aquí!' colorText='var(--accent)' page='home'/>
            </button>
            </div>
        </div>
    </section>
)
}
