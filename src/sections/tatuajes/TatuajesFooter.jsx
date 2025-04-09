import React from 'react'
import { ContactUs } from '../Shared'

export const TatuajesFooter = () => {
    return (
        <>
            <h1>Footer</h1>
            <ContactUs 
            tittle={
                <>
                    Descarga <span style={{ color: "var(--accent-telf)"}}> GRATIS</span> Control de Gastos para ahorrarte dinero en tu boda
                </>
                }

            desc={
                <>
                    Las bodas tienen gastos absurdos
                    <br />
                    ¿400€ en servilletas personalizadas? 🙄
                    <br />
                    <br />
                    Invierte en lo que hará tu día inolvidable. 👇
                </>
                }
            className="contactoContainer"
            />
        </>
    )
}
