import { useEffect, useState } from 'react'
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
                    imgUrl='./img/servicios/otrosProductos/letrasLove.webp'
                    difBg={false}
                    colorText='var(--accent)'/>
                <ProductsCard
                    id='neones'
                    tittle='Neones'
                    description=''
                    msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20los%20Neones!"
                    imgUrl='./img/servicios/otrosProductos/neones.webp'
                    difBg={false}
                colorText='var(--accent)'/>
            </div>                    
            <ProductsCard
                id='kitAntiResaca'
                tittle='Kit AntiResaca'
                description='BOLSITA KIT DE SUPERVIVENCIA 

                “Olvídate del típico regalo que coge polvo”
                
                Buscas un detalle para tus invitados. Pero que al menos, les sirva para algo. 
                
                Con éste kit anti resaca personalizado vas a sorprenderles y se van a llevar el regalo más original y sobre todo, podrá ser usado durante toda la boda. 
                
                ¡Tus invitados te lo agradecerán!
                
                Éstas bolsitas incluyen: 
                    ◦	Bebida isotónica sabor naranja 
                    ◦	Toallita desmaquillante / Agua micelar
                    ◦	Gel Hidroalcohólico
                    ◦	Goma de pelo
                    ◦	Chicle “happydent” mentolado
                    ◦	Chocolate “toblerone” (Sabor sorpresa) 
                    ◦	Toallita desodorante'
                imgUrl='./img/servicios/otrosProductos/kitAntiresaca.webp'
                msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20el%20Kit%20AntiResaca!"
                workingMode={workingMode}
                difBg={true}
            colorText='var(--accent)'/>
        </div>
    </section>
)
}
