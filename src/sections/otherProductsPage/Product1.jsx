import Slider from 'react-slick'
import TelefonoData from '../../assets/mocks/telefonoData.json'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { ImgSlider, NavItem } from '../../components'
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
            // ********************
            // ! HACER LA VERSION PC
            // ********************
            <div className="service4Container">
                <div className="service4ContentContainer">
                    <img src="./img/servicios/ringRing/audiolibroVS.webp" alt="RingRing" />
                    <div className="service4DescriptionContainer">
                        <h1>Teléfono Audiolibro</h1> 
                        <h2>LA INTELIGENCIA ARTIFICIAL NO TE VA A DEVOLVER LAS VOCES DE TUS FAMILIARES CUANDO YA NO ESTÉN</h2>
                        <div className='line'></div>                      
                        <p>
                        ¿Cuántas veces tendrás reunida a toda tu familia y amigos en un mismo sitio? Sabemos que eso 
                        pasa poco, muy poco…
                        <br />
                        <br />
                        Aprovecha tu boda para tener el mejor recuerdo de todas las personas a las que quieres. 
                        <br />
                        Es tu oportunidad, no la tires. 
                        <br />
                        Y sé que buscas un recuerdo diferente, es normal.
                        <br />
                        Tus invitados ya habrán ido a 30 bodas y no quieres que la tuya, sea una más.
                        <br />
                        Pero claro.. me dirás:  “Todo esto me va a salir más caro que ir al Mercadona”
                        <br />
                        Nada de eso, <b>no hace falta gastarse 5.000€ en robots leds</b> ni pistolas de fuego para tener un recuerdo 
                        especial.
                        <br />
                        <br />
                        Ahora imagina…
                        <br />
                        <li>                            
                            <b>▢ Escuchar el día siguiente todos los audios junto a tu pareja (todavía con resaca)</b>
                        </li>
                        <li>                            
                            <b>▢ Recordar para siempre la voz de familiares que ya no están en tu vida</b>
                        </li>
                        <li>
                            <b>▢ En 10 años, poder enseñarle a tu hijo las voces de tus abuelos y amigos</b>
                        </li>
                        <br />
                        “Al principio mi marido me dijo que era una chorrada, como otras, y que prefería invertir ese dinero en una 
                        noche más de luna de miel, menos mal que no le hice caso. 
                        <br />
                        Ahora, el momento de café caliente y mantita escuchando los audios de mi boda, no tiene precio. 
                        <br />
                        Un beso chicas”
                        <br />
                        <br />
                        He copiado tal cual lo que nos escribió Rocío, (mujer de Raúl) después de pedirles una valoración para 
                        nuestra página web un año después de su boda.
                        </p>
                        <div className="buttonsContainer">
                            <button id='P1PcFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='otrosProductos'/>
                            </button>
                        </div>
                    </div>
                </div>                        
            </div>
        ) : (
            <div className="service4Container">
                <h1>Alquiler Teléfono Audiolibro</h1>
                <h5>Tener junta a TODA tu familia y amigos en un solo lugar, pasa poco</h5>
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
                        <h6>                            
                        ¿QUÉ DARÍAS POR VOLVER A ESCUCHAR LA VOZ DE TU ABUELOS?
                        </h6>
                        <p>
                        Muuy poco,así que aprovecha tu boda para crear el mejor
                        recuerdo de tus personas favoritas. 
                        <br />
                        <br />
                        Pero por favor.. No lo hagas con el típico libro de firmas (muy aburrido).
                        <br />
                        <br />
                        Total, que necesitas un recuerdo original que sea también una experiencia para todos.
                        <br />
                        Uffffff “Pero esto me costará más que ir al Mercadona”
                        <br />
                        <br />
                        Nada de eso, no hace falta gastarse 5.000€ en robots
                        leds ni pistolas de fuego para tener un recuerdo especial
                        </p>
                        <div className="buttonsContainer">
                                <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                    <NavItem href='#contacto' label='Ver fechas disponibles' colorText='var(--accent)' page='otrosProductos'/>
                                </button>
                        </div>
                    </div>
                </div>
                <video src="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_00.mov" controls />
                <div className="service4DescriptionContainer">
                    <p>                        
                        Ahora imagina…
                        <br />
                        <br />
                        <ul>
                            <li>
                                · LEVANTARTE EL DÍA SIGUIENTE (AUN CON RESACA) Y <br />
                                ESCUCHAR  LOS MENSAJES.
                            </li>
                            <li>
                                · CONSERVAR PARA SIEMPRE LA VOZ DE FAMILIARES QUE <br />
                                ECHARÁS DE MENOS.
                            </li>
                            <li>
                                · AÑOS DESPUÉS,  ENSEÑARLE A TU HIJO LOS MENSAJES <br />
                                QUE TE DEJARON TUS ABUELOS Y AMIGOS. 
                            </li>
                        </ul>
                    </p>
                </div>
                <video src="./img/servicios/telefonoaudiolibro/telefonoaudiolibro_00.mov" controls />
                <div className="service4DescriptionContainer">
                    <p>
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
                        <br />
                        <br />
                        He copiado exactamente lo que Rocío
                        <br />
                        (esposa de Raúl) nos escribió cuando
                        <br />
                        le pedimos una reseña tras su boda.
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
