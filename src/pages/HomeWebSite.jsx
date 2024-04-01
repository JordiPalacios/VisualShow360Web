import { MetaTags, WhatsAppMessage } from '../components'
import { AboutUs, LazyCompanies, LazyReviews, Presentation, Service1, Service2, Service3 } from '../sections/homePage';
import { ContactUs, LazyFooter, LazyInfiniteLoopSection } from '../sections/Shared';


export const HomeWebsite = () => {

  return (
    <>
      <MetaTags 
        title={'VisualShow360 | Atrezzo & Fotomaton360'}
        keywords={'Fotomaton Barcelona'}
        desc={'El mejor fotomaton de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento único con nuestro espejo mágico.'}
        author={'VisualShow360'}
        rating={'General'}
        ogTitle={'VisualShow360'}
        ogDesc={'El mejor fotomaton de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento único con nuestro espejo mágico.'}
        ogType={'website'}
        ogUrl={'https://visualshow360.com/'}
        ogImg={'./img/servicios/fotomaton360/fotomaton360_2.webp'}
        OgImgType={'image/webp'}
        ogImgAlt={'Fotomaton 360 Barcelona'}
      />
      <Presentation />
      <main>
        <Service1 />            
        <LazyInfiniteLoopSection />        
        <Service2 />
        <Service3 /> 
        <LazyInfiniteLoopSection />
        <LazyReviews />         
        <LazyCompanies />              
        <AboutUs />
        <ContactUs />
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <LazyFooter />
    </>
  )
}
