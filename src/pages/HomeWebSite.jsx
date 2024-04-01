import { MetaTags, WhatsAppMessage } from '../components'
import { AboutUs, Companies, Presentation, Reviews, Service1, Service2, Service3 } from '../sections/homePage';
import { ContactUs, Footer, InfiniteLoopSection } from '../sections/Shared';
import { useLazyLoadComponent } from '../assets/Customhooks/useLazyLoadComponent';

export const HomeWebsite = () => {
  const LazyLoadService1 = useLazyLoadComponent(Service1)
  const LazyLoadService2 = useLazyLoadComponent(Service2)
  const LazyLoadService3 = useLazyLoadComponent(Service3)
  const LazyLoadInfiniteLoop = useLazyLoadComponent(InfiniteLoopSection)
  const LazyLoadReviews = useLazyLoadComponent(Reviews)
  const LazyLoadCompanies = useLazyLoadComponent(Companies)
  const LazyLoadAboutUs = useLazyLoadComponent(AboutUs)
  const LazyLoadContactUs = useLazyLoadComponent(ContactUs)
  const LazyLoadFooter = useLazyLoadComponent(Footer)


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
        <LazyLoadService1 />            
        <LazyLoadInfiniteLoop />        
        <LazyLoadService2 />
        <LazyLoadService3 /> 
        <LazyLoadInfiniteLoop />
        <LazyLoadReviews />         
        <LazyLoadCompanies />              
        <LazyLoadAboutUs />
        <LazyLoadContactUs />
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <LazyLoadFooter />
    </>
  )
}
