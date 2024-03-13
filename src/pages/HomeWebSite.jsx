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
        <meta name='description' content='Fotomaton Barcelona con atrezzo increible' />
        <meta name='author' content='VisualShow360'/>
        <meta name="rating" content="General" />
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
