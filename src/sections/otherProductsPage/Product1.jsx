import Slider from 'react-slick'
import TelefonoData from '../../assets/mocks/telefonoData.json'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { ImgSlider, NavItem, Video } from '../../components'
import { useEffect, useState } from 'react'

export const Product1 = () => {
    const workingMode = useWorkingMode('Mobile')
    const telefonoData = TelefonoData

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
    <section id='telefono-audiolibro'>
        {workingMode === 'PC' ? (
            <div className="service4Container">
                <div className="service4ContentContainer">
                    <div className="service4DescriptionContainer">
                        <h1>Teléfono Audiolibro</h1>
                        <h2>                           
                            ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TU ABUELOS?
                        </h2>
                        <div className="fotomatonImgService4">            
                            <Slider {...sliderSettings}>
                                {telefonoData.map((data) => (
                                    <ImgSlider 
                                    key={data.id} 
                                    urlImg={data.url} 
                                    imgName={data.name} 
                                    styleType='services'/>
                                    ))}
                            </Slider>
                        </div>                       
                        <h3>Tener junta a TODA tu <span style={{ color: "var(--accent)", fontWeight: "800" }}>familia y amigos</span> en un solo lugar, pasa poco</h3>
                        <p>
                        Muuy poco,así que aprovecha tu boda para crear el mejor
                        recuerdo de tus personas favoritas.
                        <br />
                        <br />
                        Pero por favor... <span style={{ fontWeight: "800"}}>No lo hagas con el típico libro de firmas</span> (muy aburrido).
                        <br />
                        <br />
                        Total, que necesitas un recuerdo original que sea también una <span style={{ color: "var(--accent)"}}>experiencia para todos.</span>
                        <br />
                        <span style={{ fontStyle: "oblique", color: "var(--accent)"}}>Uffffff “Pero esto me costará más que ir al Mercadona”</span>
                        <br />
                        <br />
                        Nada de eso, <span style={{ fontWeight: "800"}}>no hace falta gastarse 5.000€ en robots
                        leds</span> ni pistolas de fuego para tener un recuerdo especial
                        </p>
                        <div className="buttonsContainer">
                                <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                    <NavItem href='#contacto' label='Ver fechas disponibles' colorText='var(--accent)' page='otrosProductos'/>
                                </button>
                        </div>
                    </div>
                    <Video 
                    className='videoService4'
                    src ="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_00.mov"
                    poster="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_00.webp"
                    controls={true}
                    />
                    <div className="service4DescriptionContainer">
                        <p>                        
                            Ahora imagina…
                            <br />
                        </p>
                        <ul>
                            <li>
                                · LEVANTARTE EL DÍA SIGUIENTE (AUN CON RESACA) Y
                                <span style={{ color: "var(--accent)"}}> ESCUCHAR  LOS MENSAJES.</span>
                            </li>
                            <li>
                                · <span style={{ color: "var(--accent)"}}>CONSERVAR PARA SIEMPRE</span> LA VOZ DE FAMILIARES QUE
                                ECHARÁS DE MENOS.
                            </li>
                            <li>
                                · AÑOS DESPUÉS, ENSEÑARLE A TU HIJO LOS MENSAJES QUE TE DEJARON TUS ABUELOS Y AMIGOS. 
                            </li>
                        </ul>
                    </div>
                    <Video 
                        id='videoDoble'
                        src ="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_01.mov"
                        poster="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_01.webp"
                        controls={true}
                    />
                    <div className="service4DescriptionContainer">
                        <p> 
                            <span style={{ fontStyle: "oblique"}}>
                                “Mi marido pensó que era una chorrada y quería gastar el
                                dinero en otra noche de luna de miel, pero menos mal que
                                no le hice caso. 
                                <br />
                                <br />
                                Ahora, escuchar los audios de la boda con un café y
                                mantita, no tiene precio.”
                                <br />
                                <br />
                                -Rocío B.f
                            </span>
                            <br />
                            <br />
                            <span style={{ color: "var(--accent)"}}>
                                He copiado exactamente lo que Rocío
                                <br />
                                (esposa de Raúl) nos escribió cuando
                                <br />
                                le pedimos una reseña tras su boda.
                            </span>
                        </p>
                        <div className="buttonsContainer">
                            <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                <NavItem href='#contacto' label='Lo quiero en mi boda' colorText='var(--accent)' page='otrosProductos'/>
                            </button>
                        </div>
                    </div>
                </div>                        
            </div>
        ) : (
            <div className="service4Container">
                <h1>Alquiler Teléfono Audiolibro</h1>
                <div className="service4ContentContainer">
                    <div className="fotomatonImgService4">            
                        <Slider {...sliderSettings}>
                            {telefonoData.map((data) => (
                                <ImgSlider 
                                key={data.id} 
                                urlImg={data.url} 
                                imgName={data.name} 
                                styleType='services'/>
                                ))}
                        </Slider>
                    </div>
                    <div className="service4DescriptionContainer">
                        <h2>                            
                        ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TU ABUELOS?
                        </h2>
                        <h3>Tener junta a TODA tu <span style={{ color: "var(--accent)", fontWeight: "800" }}>familia y amigos</span> en un solo lugar, pasa poco</h3>
                        <p>
                        Muuy poco,así que aprovecha tu boda para crear el mejor
                        recuerdo de tus personas favoritas.
                        <br />
                        <br />
                        Pero por favor... <span style={{ fontWeight: "800"}}>No lo hagas con el típico libro de firmas</span> (muy aburrido).
                        <br />
                        <br />
                        Total, que necesitas un recuerdo original que sea también una <span style={{ color: "var(--accent)"}}>experiencia para todos.</span>
                        <br />
                        <span style={{ fontStyle: "oblique", color: "var(--accent)"}}>Uffffff “Pero esto me costará más que ir al Mercadona”</span>
                        <br />
                        <br />
                        Nada de eso, <span style={{ fontWeight: "800"}}>no hace falta gastarse 5.000€ en robots
                        leds</span> ni pistolas de fuego para tener un recuerdo especial
                        </p>
                        <div className="buttonsContainer">
                                <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                    <NavItem href='#contacto' label='Ver fechas disponibles' colorText='var(--accent)' page='otrosProductos'/>
                                </button>
                        </div>
                    </div>
                </div>
                <Video 
                    className='videoService4'
                    src ="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_00.mov"
                    poster="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_02.webp"
                    controls={true}
                />
                <div className="service4DescriptionContainer">
                    <p>                        
                        Ahora imagina…
                        <br />
                    </p>
                    <ul>
                        <li>
                            · LEVANTARTE EL DÍA SIGUIENTE (AUN CON RESACA) Y
                            <span style={{ color: "var(--accent)"}}> ESCUCHAR  LOS MENSAJES.</span>
                        </li>
                        <li>
                            · <span style={{ color: "var(--accent)"}}>CONSERVAR PARA SIEMPRE</span> LA VOZ DE FAMILIARES QUE
                            ECHARÁS DE MENOS.
                        </li>
                        <li>
                            · AÑOS DESPUÉS, ENSEÑARLE A TU HIJO LOS MENSAJES QUE TE DEJARON TUS ABUELOS Y AMIGOS. 
                        </li>
                    </ul>
                </div>
                <Video 
                    id='videoDoble'
                    src ="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_01.mov"
                    poster="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_03.webp"
                    controls={true}
                />
                <div className="service4DescriptionContainer">
                    <p> 
                        <span style={{ fontStyle: "oblique"}}>
                            “Mi marido pensó que era una chorrada y quería gastar el
                            dinero en otra noche de luna de miel, pero menos mal que
                            no le hice caso. 
                            <br />
                            <br />
                            Ahora, escuchar los audios de la boda con un café y
                            mantita, no tiene precio.”
                            <br />
                            <br />
                            -Rocío B.f
                        </span>
                        <br />
                        <br />
                        <span style={{ color: "var(--accent)"}}>
                            He copiado exactamente lo que Rocío
                            <br />
                            (esposa de Raúl) nos escribió cuando
                            <br />
                            le pedimos una reseña tras su boda.
                        </span>
                    </p>
                    <div className="buttonsContainer">
                        <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                            <NavItem href='#contacto' label='Lo quiero en mi boda' colorText='var(--accent)' page='otrosProductos'/>
                        </button>
                    </div>
                </div>
            </div>
        )}        
    </section>
)
}
