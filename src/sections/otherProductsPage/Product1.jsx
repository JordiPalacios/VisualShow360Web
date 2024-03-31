import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { NavItem } from '../../components'

export const Product1 = () => {
    const workingMode = useWorkingMode('Mobile')

return (
    <section id='ring-ring-experience'>
        {workingMode === 'PC' ? (
            <div className="service4Container">
                <div className="service4ContentContainer">
                    <LazyLoadImage src="./img/servicios/ringRing/audiolibroVS.webp" alt="RingRing" />
                    <div className="service4DescriptionContainer">
                        <h1>Ring Ring Experience</h1> 
                        <h2>¿SABES QUE LO PRIMERO QUE OLVIDAMOS DE UNA PERSONA ES SU VOZ?</h2> 
                        <div className='line'></div>                      
                        <p>
                            No hay nada mejor que tener para siempe <span style={{ color: 'var(--accent)', background: 'none'}}>grabada</span> la voz de tus seres más <span style={{ color: 'var(--accent)', background: 'none'}}>queridos</span> en el día de tu boda. <br />
                            <br />
                            Deja de lado el papel y el boli y haz que tus invitados te dejen un <span style={{ color: 'var(--accent)', background: 'none'}}>mensaje de voz</span> (que podrás guardar para siempre). <br />
                            <br />
                            Poder levantarte el día siguiente de tu boda y escuchar <span style={{ color: 'var(--accent)', background: 'none'}}>TODOS</span> los mensajes, en algunos te partirás de risa y en otros te pondrás a llorar como ua madalena. Siendo tu gran descubriemiento.
                            Por no hablar de lo bien que se lo pasarán tus invitados <span style={{ color: 'var(--accent)', background: 'none'}}>haciéndote sus confesiones</span>, estado un poco borrachines. <br />
                            <br />
                            Tanto es el coste que tiene celebrar tu boda, y lo poco que cuesta <span style={{ color: 'var(--accent)', background: 'none'}}>RECORDARLA</span> para siempre.
                        </p>
                        <div className="buttonsContainer">
                            <button>
                                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='otrosProductos'/>
                            </button>
                        </div>
                    </div>
                </div>                        
            </div>
        ) : (
            <div className="service4Container">
                <h1>Ring Ring Experience</h1>
                <h2>¿SABES QUE LO PRIMERO QUE OLVIDAMOS DE UNA PERSONA ES SU VOZ?</h2>
                <div className="service4ContentContainer">
                    <LazyLoadImage src="./img/servicios/ringRing/audiolibroVS.webp" alt="RingRing"  />
                    <div className="service4DescriptionContainer">
                        <p>
                            No hay nada mejor que tener para siempe <span style={{ color: 'var(--accent)', background: 'none'}}>grabada</span> la voz de tus seres más <span style={{ color: 'var(--accent)', background: 'none'}}>queridos</span> en el día de tu boda. <br />
                            <br />
                            Deja de lado el papel y el boli y haz que tus invitados te dejen un <span style={{ color: 'var(--accent)', background: 'none'}}>mensaje de voz</span> (que podrás guardar para siempre). <br />
                            <br />
                            Poder levantarte el día siguiente de tu boda y escuchar <span style={{ color: 'var(--accent)', background: 'none'}}>TODOS</span> los mensajes, en algunos te partirás de risa y en otros te pondrás a llorar como ua madalena. Siendo tu gran descubriemiento.
                            Por no hablar de lo bien que se lo pasarán tus invitados <span style={{ color: 'var(--accent)', background: 'none'}}>haciéndote sus confesiones</span>, estado un poco borrachines. <br />
                            <br />
                            Tanto es el coste que tiene celebrar tu boda, y lo poco que cuesta <span style={{ color: 'var(--accent)', background: 'none'}}>RECORDARLA</span> para siempre.
                        </p>
                        <div className="buttonsContainer">
                            <button>
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
