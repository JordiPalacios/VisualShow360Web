import React, { useEffect, useState } from 'react'
import { NavItem, NavbarMenu, NewPage, ProductsCard } from '../components'

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
        <div>
            <NavbarMenu />
            {/* RingRingExperience */}
            <section id='ring-ring-experience'>
                <div className="service4Container">
                    <h2>Ring Ring Experience</h2>
                    <img src="src/assets/img/servicios/RingRingExperience.webp" alt="InstruccionesRingRing" />
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
                    </p>
                    <div className="buttonsContainerEven">
                    {/* <button>
                        <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--accent-50)'/>
                    </button> */}
                    <button>
                        <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent-50)'/>
                    </button>
                    </div>
                </div>
            </section>
            {/* !Este section es de products */}
            <section id='products'>
            <div className="productsContainer">
                <div className="productsTittle">
                <h2>Bodas y Eventos</h2>
                </div>
                <div className="generalProducts">
                <ProductsCard
                    id='letras-love'
                    tittle='Letras Love'
                    description=''
                    msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20las%20Letras%20Love!"
                    imgUrl='src/assets/img/servicios/Neones.webp'
                    difBg={false}
                    colorText='var(--accent-950)'/>
                <ProductsCard
                    id='neones'
                    tittle='Neones'
                    description=''
                    msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20los%20Neones!"
                    imgUrl='src/assets/img/servicios/Neones.webp'
                    difBg={false}
                    colorText='var(--accent-950)'/>
                </div>
                <ProductsCard
                id='kitAntiResaca'
                tittle='Kit AntiResaca'
                description='Kit AntiResaca Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!'
                imgUrl='src/assets/img/servicios/kitAntiresacaFocus.webp'
                msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20el%20Kit%20AntiResaca!"
                workingMode={workingMode}
                difBg={true}
                colorText='var(--accent-50)'/>
            </div>
        </section>
            <footer>
                <div className="footerContainer">  
                <h3>No hacemos eventos...</h3>      
                <h4>¡ Creamos recuerdos !</h4>
                <div className="line"></div>
                <div className="rrssContainer">
                    <a href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                    <img id="ig" src="src/assets/icons/ig.svg"/>
                    </a>            
                    <a href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" target="_blank" rel="noopener noreferrer">
                    <img id="ig" src="src/assets/icons/tiktok.svg"/>
                    </a>
                </div>
                <div className="normativeContainer">
                <p>© 2024 VisualShow360 - Todos los derechos reservados</p>
                <button>
                    <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--primary-color-100)'/>
                </button>
                <button>
                    <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--primary-color-100)'/>
                </button>
                <button>
                    <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--primary-color-100)'/>
                </button>
                </div>
                <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
                <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr"> Creada y diseñada por Jordi Code</a>
                </div>
            </footer>
        </div>
    )
}
