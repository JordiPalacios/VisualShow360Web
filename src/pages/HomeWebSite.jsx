import React from 'react'
import { WhatsAppMessage } from '../components'
import { AboutUs, Companies, Presentation, Reviews, Service1, Service2, Service3 } from '../sections/homePage';
import { ContactUs, Footer, InfiniteLoopSection } from '../sections/Shared';
import { Helmet } from 'react-helmet';

export const HomeWebsite = () => {

  return (
    <>
      <Helmet>
        <title>VisualShow360 | Atrezzo & Fotomaton360</title>

        <meta name='keywords' content='Fotomaton Barcelona '/>
        {/*! Modificar decripcion */}
        <meta name='description' content='El mejor fotomaton de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento único con nuestro espejo mágico.' />
        <meta name='author' content='VisualShow360'/>
        <meta name="rating" content="General" />
        <meta property="og:title" content="VisualShow360" />
        {/*! Modificar decripcion */}
        <meta property="og:description" content="El mejor fotomaton de barcelona con un atrezzo único. Haz de tu boda, evento, fiesta un momento único con nuestro espejo mágico." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visualshow360.com/" />
        {/*! Modificar foto del fotomaton */}
        <meta property="og:image" content="src/assets/img/servicios/fotomaton360/fotomaton360_2.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="Fotomaton 360 Barcelona" />

        <link rel="canonical" href="https://visualshow360.com/" />             
      </Helmet>
      <Presentation />
      <main>
        <Service1 />
        <InfiniteLoopSection />
        <Service2 />
        <Service3 />
        <InfiniteLoopSection />
        <Reviews />
        <Companies />
        <AboutUs />
        <ContactUs />
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <Footer />
    </>
  )
}
