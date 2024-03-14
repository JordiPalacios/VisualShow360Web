import React from 'react'
import {  NavbarMenu, WhatsAppMessage } from '../components'
import { ContactUs, Footer, InfiniteLoopSection } from '../sections/Shared'
import { Product1, Products2 } from '../sections/otherProductsPage'
import { Helmet } from 'react-helmet'


export const OtrosProductos = () => {
    

    return (
        <>        
            <Helmet>
                <title>VisualShow360 | RingRing, Neones & Letras Love</title>

                <meta name='keywords' content='RingRing, Neones, Letras Love, Barcelona, Atrezzo, Bodas, Eventos, Catalunya' />
                {/*! Modificar decripcion */}
                <meta name='description' content='El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales.' />
                <meta name='author' content='VisualShow360'/>
                <meta name="rating" content="General" />
                <meta property="og:title" content="VisualShow360" />
                {/*! Modificar decripcion */}
                <meta property="og:description" content="El mejor audiolibro de barcelona para bodas, fiestas, eventos. Especialistas en crear momentos únicos para tus momentos más especiales." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://visualshow360.com/" />
                {/*! Modificar foto del fotomaton */}
                <meta property="og:image" content="src/assets/img/servicios/ringRing/audiolibro.webp" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:alt" content="Audio Libro Barcelona" />

                <link rel="canonical" href="https://visualshow360.com/" />             
            </Helmet>
            <header>
                <NavbarMenu />
            </header>
            <main>
                <Product1 />
                <InfiniteLoopSection />            
                <Products2 />
                <InfiniteLoopSection />
                <ContactUs />
                <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
            </main>
            <Footer />
    </>
)
}
