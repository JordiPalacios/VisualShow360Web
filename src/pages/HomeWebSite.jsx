import { MetaTags, WhatsAppMessage } from '../components'
import { LazyAboutUs, LazyReviews, LazyService2, LazyService3, Presentation, Service1 } from '../sections/homePage';
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared';


export const HomeWebsite = () => {

  return (
    <>
      <MetaTags 
        title={'VisualShow360 | Plataforma360 & Magic Mirror'}
        keywords={'Plataforma360, Espejo Magico, White Magic Mirror, Fotomaton, Barcelona, Telefono Audiolibro, Catalunya, Bodas, Eventos, Neones, Letras Love'}
        desc={'La mejor plataforma 360 de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento especial con nuestro magic mirror.'}
        author={'VisualShow360'}
        rating={'General'}
        ogTitle={'VisualShow360'}
        ogDesc={'La mejor plataforma 360 de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento especial con nuestro magic mirror.'}
        ogType={'website'}
        ogUrl={'https://visualshow360.com/'}
        ogImg={'./img/servicios/fotomaton360/atrezzo_1.webp'}
        OgImgType={'image/webp'}
        ogImgAlt={'Plataforma360 Barcelona'}
      />
      <Presentation />
      <main>
        <Service1 />      
        <LazyInfiniteLoopSection />      
        <LazyService2 />
        <LazyService3 /> 
        <LazyInfiniteLoopSection />
        <LazyReviews />                       
        <LazyAboutUs />
        <ContactUs tittle="¡SÍ Quiero!" className="contactoContainer" />
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <LazyFooter />
    </>
  )
}
