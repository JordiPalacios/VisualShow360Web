import { useLazyLoadComponent } from '../assets/Customhooks/useLazyLoadComponent'
import {  MetaTags, NavbarMenu, WhatsAppMessage } from '../components'
import { ContactUs, Footer, InfiniteLoopSection } from '../sections/Shared'
import { Product1, Products2 } from '../sections/otherProductsPage'

export const OtrosProductos = () => {
    const LazyLoadProduct1 = useLazyLoadComponent(Product1)
    const LazyLoadProducts2 = useLazyLoadComponent(Products2)
    const LazyLoadInfiniteLoop = useLazyLoadComponent(InfiniteLoopSection)
    const LazyLoadContactUs = useLazyLoadComponent(ContactUs)
    const LazyLoadFooter = useLazyLoadComponent(Footer)

    return (
        <>      
            <MetaTags 
                title={'VisualShow360 | RingRing, Neones & Letras Love'}
                keywords={'RingRing, Neones, Letras Love, Barcelona, Atrezzo, Bodas, Eventos, Catalunya'}
                desc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                author={'VisualShow360'}
                rating={'General'}
                ogTitle={'VisualShow360'}
                ogDesc={'El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.'}
                ogType={'website'}
                ogUrl={'https://visualshow360.com/otros-productos'}
                ogImg={'./img/servicios/ringRing/audiolibro.webp'}
                OgImgType={'image/webp'}
                ogImgAlt={'Audio Libro Barcelona'}
            />  
            <header>
                <NavbarMenu />
            </header>
            <main>
                <LazyLoadProduct1 />
                <LazyLoadInfiniteLoop />            
                <LazyLoadProducts2 />
                <LazyLoadInfiniteLoop />
                <LazyLoadContactUs />
                <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
            <LazyLoadFooter />
    </>
)
}
