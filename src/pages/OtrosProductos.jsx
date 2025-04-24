import {  MetaTags, NavbarMenu, WhatsAppMessage } from '../components'
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared'
import { Product1 } from '../sections/otherProductsPage'

export const OtrosProductos = () => {

    return (
        <>      
            <MetaTags 
                title={'VisualShow360 | Teléfono Audiolibro'}
                keywords={'Teléfono Audiolibro, mensajes de audio, bodas, eventos, recuerdos personalizados, Barcelona, Catalunya, VisualShow360'}
                desc={'Haz que tus invitados dejen mensajes inolvidables con nuestro Teléfono Audiolibro. Ideal para bodas, fiestas y eventos, este original servicio permite grabar recuerdos únicos en formato de audio. Captura las emociones y palabras de tus seres queridos de una manera creativa y divertida. En VisualShow360, nos especializamos en crear momentos únicos que quedarán grabados para siempre. ¡Haz de tu celebración algo especial con el Teléfono Audiolibro!'}
                author={'VisualShow360'}
                rating={'General'}
                ogTitle={'VisualShow360 | Teléfono Audiolibro'}
                ogDesc={'Haz que tus invitados dejen mensajes inolvidables con nuestro Teléfono Audiolibro. Ideal para bodas, fiestas y eventos, este original servicio permite grabar recuerdos únicos en formato de audio. Captura las emociones y palabras de tus seres queridos de una manera creativa y divertida. En VisualShow360, nos especializamos en crear momentos únicos que quedarán grabados para siempre. ¡Haz de tu celebración algo especial con el Teléfono Audiolibro!'}
                ogType={'website'}
                ogUrl={'https://visualshow360.com/telefono-audiolibro'}
                ogImg={'./img/servicios/ringRing/audiolibroVS.webp'}
                OgImgType={'image/webp'}
                ogImgAlt={'Teléfono Audiolibro Barcelona'}
            />  
            <header>
                <NavbarMenu />
            </header>
            <main>
                <Product1 />
                <LazyInfiniteLoopSection />
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
                <WhatsAppMessage className="contactFixed" msg="https://wa.me/message/2RM67GODIWVUE1" />
            </main>
            <LazyFooter />
    </>
)
}
