import React from 'react'
import {  NavbarMenu, WhatsAppMessage } from '../components'
import { ContactUs, Footer, InfiniteLoopSection } from '../sections/Shared'
import { Product1, Products2 } from '../sections/otherProductsPage'


export const OtrosProductos = () => {
    

    return (
        <>           
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
