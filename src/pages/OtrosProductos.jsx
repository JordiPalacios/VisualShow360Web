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
