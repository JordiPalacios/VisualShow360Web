import React, { useEffect, useState } from 'react'
import { ContactUs, NavItem, NavbarMenu, WhatsAppMessage } from '../components'
import { Footer, InfiniteLoopSection } from '../sections/Shared'
import { Products2 } from '../sections/otherProductsPage/Products2'


export const OtrosProductos = () => {
    const [workingMode, setWorkingMode] = useState('')

    // useEffect para crear las marcas del modo trabajo PC - Tablet - Mobile
    useEffect (() => {
        const checkWorkingMode = () => {
        if (window.innerWidth > 1023) {
            setWorkingMode('PC')
        } else if ( (window.innerWidth < 1024) && (window.innerWidth > 759)) {
            setWorkingMode('Tablet')
        } else {
            setWorkingMode('Mobile')
        }
        }
    
        window.addEventListener('resize', checkWorkingMode)
    
        checkWorkingMode()
    
        return () => {
        window.removeEventListener('resize', checkWorkingMode)
        }
    
    }, [])

    return (
        <>           
            <header>
                <NavbarMenu />
            </header>
            <main>
            {/* RingRingExperience */}
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
                                    {/* <button>
                                        <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                                    </button> */}
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
                                    {/* <button>
                                        <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                                    </button> */}
                                    <button>
                                        <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='otrosProductos'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
            </section>
            <InfiniteLoopSection />
            {/* !Este section es de products */}
            <Products2 />
            <InfiniteLoopSection />
            <ContactUs />
            <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
        </main>
        <Footer />
    </>
)
}
