import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { NavItem } from '../../components'

export const Product1 = () => {
    const workingMode = useWorkingMode('Mobile')

return (
    <section id='telefono-audiolibro'>
        {workingMode === 'PC' ? (
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
                <h1>Teléfono Audiolibro</h1>
                <h2>LA INTELIGENCIA ARTIFICIAL NO TE VA A DEVOLVER LAS VOCES DE TUS FAMILIARES CUANDO YA NO ESTÉN</h2>
                <div className="service4ContentContainer">
                    <img src="./img/servicios/ringRing/audiolibroVS.webp" alt="RingRing"  />
                    <div className="service4DescriptionContainer">
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
                                <button id='P1OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                                    <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='otrosProductos'/>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        )}        
    </section>
)
}
