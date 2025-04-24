import { MetaTags, WhatsAppMessage } from '../components'
import { LazyAboutUs, LazyReviews, LazyService2, LazyService3, Presentation, Service1 } from '../sections/homePage';
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared';


export const HomeWebsite = () => {

  return (
    <>
      <MetaTags 
        title={'VisualShow360 | Plataforma360 - Magic Mirror LED - Flash 24h'}
        keywords={'Plataforma 360, videos 360, bodas, eventos, fiestas, espejo magico, magic mirror, recuerdos personalizados, Barcelona, Catalunya, VisualShow360'}
        desc={'Haz que tus eventos sean inolvidables con nuestra Plataforma 360. Ideal para bodas, fiestas y eventos, este servicio único captura momentos espectaculares en video desde todos los ángulos. Con un atrezzo exclusivo y tecnología de última generación, ofrecemos una experiencia divertida y memorable para tus invitados. En VisualShow360, nos especializamos en crear recuerdos únicos que quedarán grabados para siempre. ¡Haz de tu celebración algo especial con nuestra Plataforma 360!'}
        author={'VisualShow360'}
        rating={'General'}
        ogTitle={'VisualShow360 | Plataforma360 - Magic Mirror LED - Flash 24h'}
        ogDesc={'Haz que tus eventos sean inolvidables con nuestra Plataforma 360. Ideal para bodas, fiestas y eventos, este servicio único captura momentos espectaculares en video desde todos los ángulos. Con un atrezzo exclusivo y tecnología de última generación, ofrecemos una experiencia divertida y memorable para tus invitados. En VisualShow360, nos especializamos en crear recuerdos únicos que quedarán grabados para siempre. ¡Haz de tu celebración algo especial con nuestra Plataforma 360!'}
        ogType={'website'}
        ogUrl={'https://visualshow360.com/'}
        ogImg={'./img/servicios/fotomaton360/fotomaton360_0.webp'}
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
