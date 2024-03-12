import React, { useEffect, useState } from 'react'
import { ProductsCard } from '../../components'

export const Products2 = () => {
    const [workingMode, setWorkingMode] = useState('')

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
    <section id='products'>
        <div className="productsContainer">
            <div className="generalProducts">
                <ProductsCard
                    id='letras-love'
                    tittle='Letras Love'
                    description=''
                    msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20las%20Letras%20Love!"
                    imgUrl='src/assets/img/servicios/otrosProductos/letrasLove.webp'
                    difBg={false}
                    colorText='var(--accent)'/>
                <ProductsCard
                    id='neones'
                    tittle='Neones'
                    description=''
                    msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20los%20Neones!"
                    imgUrl='src/assets/img/servicios/otrosProductos/neones.webp'
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
)
}
