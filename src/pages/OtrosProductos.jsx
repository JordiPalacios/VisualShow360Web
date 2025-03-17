import {  MetaTags, NavbarMenu, WhatsAppMessage } from '../components'
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { Product1, Products2 } from '../sections/otherProductsPage'

export const OtrosProductos = () => {

    return (
        <>      
            <MetaTags 
                title={'VisualShow360 | Teléfono Audiolibro, Neones & Letras Love'}
                keywords={'Teléfono Audiolibro, Neones, Letras Love, Barcelona, Plataforma360, Espejo Magico Atrezzo, Bodas, Eventos, Catalunya'}
                desc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                author={'VisualShow360'}
                rating={'General'}
                ogTitle={'VisualShow360'}
                ogDesc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                ogType={'website'}
                ogUrl={'https://visualshow360.com/otros-productos'}
                ogImg={'./img/servicios/ringRing/audiolibroVS.webp'}
                OgImgType={'image/webp'}
                ogImgAlt={'Audio Libro Barcelona'}
            />  
            <header>
                <NavbarMenu />
            </header>
            <main>
                <Product1 />
                <LazyInfiniteLoopSection />
                <ContactUs />
                <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
            <LazyFooter />
    </>
)
}
