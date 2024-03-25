import { NavItem } from '../../components'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'

export const Service2 = () => {
    const workingMode = useWorkingMode()
return (
    <section id='magic-mirror'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <div className="service2ContentContainer">
            <img src="./gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>           
            <div className="service2DescriptionContainer">  
                <h1>Magic Mirror</h1>
                <h2> EL FOTOMATON QUE&nbsp;<span>NO SE ESPERAN</span></h2>    
                <hr className='line'></hr>    
                <p>
                    MAGIC MIRROR LED ES SÓLO  <span style={{ color: 'var(--accent)', background: 'none'}}>APTO</span> PARA <span style={{ color: 'var(--accent)', background: 'none'}}>PAREJAS</span> QUE QUIERAN <span style={{ color: 'var(--accent)', background: 'none'}}>DIFERENCIARSE</span> Y ALEJARSE DEL TÍPICO FOTOMATÓN DE HACE 10 AÑOS. <br />
                    <br />
                    AHORA, PREPÁRATE PORQUE TODOS <span style={{ color: 'var(--accent)', background: 'none'}}>TE VAN A PREGUNTAR</span> DE DÓNDE LO HAS SACADO. <br />
                    <br />
                    Asegúrate de que se lo cuenten a todos sus amigos, mira: <br />
                    <span>&quot; Maria puso un fotomatón muy raro que fue la pxxx hostia, y vaya fiestón se montó &quot;</span>
                    </p>
                <div className="detailsService2"> 
                    <h2>¿Qué incluye?</h2>                   
                    <ul>
                        <li>• Alfombra roja</li>
                        <li>• Separadores de seguridad</li>
                        <li>• Impresión al momento</li>
                        <li>• Máxima calidad de imágen</li>
                        <li>• La mejor mesa de ATREZZO que verás nunca</li>
                    </ul>
                    <span>CREAREMOS EL FIESTÓN </span>
                </div>      
                <div className="buttonsContainer">
                    <button>
                        <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                    </button>
                </div>
            </div>
            </div>
        </div>
        ) : 
        (
        <div className='service2Container'>
            <h1>Magic Mirror</h1>              
            <h2> ¡Frase Guay Para Tablet!</h2> 
            <div className="service2ContentContainer">              
                <img src="./gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>
                <div className="service2DescriptionContainer">                             
                    <p>
                        MAGIC MIRROR LED ES SÓLO  <span style={{ color: 'var(--accent)', background: 'none'}}>APTO</span> PARA <span style={{ color: 'var(--accent)', background: 'none'}}>PAREJAS</span> QUE QUIERAN <span style={{ color: 'var(--accent)', background: 'none'}}>DIFERENCIARSE</span> Y ALEJARSE DEL TÍPICO FOTOMATÓN DE HACE 10 AÑOS. <br />
                        <br />
                        AHORA, PREPÁRATE PORQUE TODOS <span style={{ color: 'var(--accent)', background: 'none'}}>TE VAN A PREGUNTAR</span> DE DÓNDE LO HAS SACADO. <br />
                        <br />
                        Asegúrate de que se lo cuenten a todos sus amigos, mira: <br />
                        <br />
                        <span>&quot; Maria puso un fotomatón muy raro que fue la pxxx hostia, y vaya fiestón se montó &quot;</span>
                        </p>
                    <div className="detailsService2"> 
                        <h2>¿Qué incluye?</h2>                   
                        <ul>
                            <li>• Alfombra roja</li>
                            <li>• Separadores de seguridad</li>
                            <li>• Impresión al momento</li>
                            <li>• Máxima calidad de imágen</li>
                            <li>• La mejor mesa de ATREZZO que verás nunca</li>
                        </ul>
                        <span>CREAREMOS EL FIESTÓN </span>
                    </div>
                    <div className="buttonsContainer">
                        <button>
                            <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </section>
)
}
