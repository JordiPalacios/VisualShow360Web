import React, { useEffect, useState } from 'react'
import { ContactUs, Footer, InfiniteLoop, NavItem, NavbarMenu, ProductsCard } from '../components'

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
                            <img src="src/assets/img/servicios/ringRing/ringringLondon.webp" alt="InstruccionesRingRing" />
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
                            <img src="src/assets/img/servicios/ringRing/ringringLondon.webp" alt="InstruccionesRingRing" />
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
            {/* InfiniteLoop */}
            <section>
                    <div className="logo">
                    <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="LogoVisualShowSlide" equal={true}/>
                    <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="LogoVisualShowSlide" equal={true}/>
                    </div>
                    </section>
            {/* !Este section es de products */}
            <section id='products'>
                <div className="productsContainer">
                    <div className="productsTittle">
                    </div>
                    <div className="generalProducts">
                        <ProductsCard
                            id='letras-love'
                            tittle='Letras Love'
                            description=''
                            msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20las%20Letras%20Love!"
                            imgUrl='src/assets/img/servicios/otrosProductos/letrasLove.jpeg'
                            difBg={false}
                            colorText='var(--accent)'/>
                        <ProductsCard
                            id='neones'
                            tittle='Neones'
                            description=''
                            msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20los%20Neones!"
                            imgUrl='src/assets/img/servicios/otrosProductos/neones.jpeg'
                            difBg={false}
                            colorText='var(--accent)'/>
                    </div>                    
                    <ProductsCard
                        id='kitAntiResaca'
                        tittle='Kit AntiResaca'
                        description='Kit AntiResaca Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!'
                        imgUrl='src/assets/img/servicios/otrosProductos/kitAntiresaca.webp'
                        msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20el%20Kit%20AntiResaca!"
                        workingMode={workingMode}
                        difBg={true}
                        colorText='var(--accent)'/>
                </div>
            </section>
            {/* InfiniteLoop */}
            <section>
                <div className="logo">
                <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="LogoVisualShowSlide" equal={true}/>
                <InfiniteLoop urlImg="src/assets/img/Extra/show.png" nameImg="LogoVisualShowSlide" equal={true}/>
                </div>
            </section>
            {/* !Este section es de contact us */}
            <section id='contacto'>
                <ContactUs />
            </section>
        </main>
        <footer>
            <Footer />
        </footer>
    </>
)
}
