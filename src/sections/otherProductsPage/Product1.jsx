import React from 'react'
import { useWorkingMode } from '../../assets/customhooks/useWorkingMode'
import { NavItem } from '../../components'

export const Product1 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='ring-ring-experience'>
        {workingMode === 'PC' ? (
            <div className="service4Container">
                <div className="service4ContentContainer">
                    <img src="src/assets/img/servicios/ringRing/audiolibro.webp" alt="InstruccionesRingRing" />
                    <div className="service4DescriptionContainer">
                        <h2>Ring Ring Experience</h2> 
                        <h3> ¡Frase Guay &nbsp;<span>PC/Tablet!</span></h3> 
                        <div className='line'></div>                      
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
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
                <h2>Ring Ring Experience</h2>
                <h3>Frase Guay Tablet</h3>
                <div className="service4ContentContainer">
                    <img src="src/assets/img/servicios/ringRing/audiolibro.webp" alt="InstruccionesRingRing" />
                    <div className="service4DescriptionContainer">
                            <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
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
