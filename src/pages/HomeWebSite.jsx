import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormContact, ImgSlider, InfiniteLoop, NavItem, NavbarMenu, NewPage, ProductsCard, ReviewsCard, WhatsAppMessage } from '../components'
import Slider from "react-slick";
import CompaniesData from '../assets/mocks/companiesData.json'
import FotomatonData from '../assets/mocks/fotomatonData.json'
import ReviewsData from '../assets/mocks/reviewsData.json'

export const HomeWebsite = () => {
  const companyData = CompaniesData
  const fotomatonData = FotomatonData
  const reviewsData = ReviewsData


// ToDo : Simplificar estas repeticiones
  const settingsServices = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  const settingsReviews = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  return (
    <>
      
      <header>
        <NavbarMenu />
        <div className="presentationContainer">
          <p>Poner eslogan - una frase que buscaria alguien que busca el mejor evento</p>
          <h2>¡Las mejores bodas las creamos aqui!</h2>
          <h3>Gracias a nuestro equipo de alta calidad</h3>
          <h1>Fotomaton</h1>
          <h1>Magic Mirror</h1>
          <h1>RingRing Experience</h1>
          <p>
            Haremos que tu evento sea...
          </p>
          <h1>¡ I N O L V I D A B L E !</h1>
          <video autoPlay muted loop>
            <source src="src/assets/video/wedding1.mp4" type="video/mp4"/>
            Este navegador no soporta vídeos.
          </video>
        </div>
      </header>

      <main>
        {/* El punto que se ve al lado del si quiero es debido a los estilos, debemos quitarlo desde el css */}
        <section id='plataforma360'>
          <div className="service1Container">
            <h2>Fotomaton 360</h2>
            <div className="fotomatonImg">
            <Slider {...settingsServices}>
                {fotomatonData.map((data) => (
                    <ImgSlider key={data.id} urlImg={data.urlImg} imgName={data.id} styleType='services'/>
                ))}
              </Slider>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dicta labore culpa facere ab illum dolorem temporibus, fuga quibusdam, animi magnam obcaecati! Omnis dignissimos nam beatae sapiente adipisci ut soluta?
            </p>
            <div className="buttonsContainer">
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
          </div>
        </section>
        <section id='magic-mirror'>
          <div className='service2Container'>
            <h2>Magic Mirror</h2>
            <img src="src/assets/img/servicios/EspejoMagico.webp" alt="EspejpoMagico"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainerEven">
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        <section id='white-magic-mirror'>
          <div className="service3Container">
            <h2>White Magic Mirror</h2>
            <img src="src/assets/img/servicios/magicMirrorWhite.jpg" alt="EspejpoMagico"/>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainer">
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        <section id='ring-ring-experience'>
          <div className="service4Container">
            <h2>Ring Ring Experience</h2>
            <img src="src/assets/img/servicios/RingRingExperience.webp" alt="InstruccionesRingRing" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
            </p>
            <div className="buttonsContainerEven">
              <button>
                <NewPage href="/eventos-reales" label="Eventos Reales" colorText='var(--primary-color-100)'/>
              </button>
              <button>
                <NavItem href='#contacto' label='¡Sí Quiero!' colorText='var(--primary-color-100)'/>
              </button>
            </div>
          </div>
        </section>
        {/* InfiniteLoop */}
        <section>
          <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/reviews_equipo/logoVisualShow.webp" nameImg="LogoVisualShowSlide" equal={true}/>
          </div>
        </section>
        {/* !Este section es de products */}
        <section id='products'>
          <div className="productsContainer">
            <div className="productsTittle">
              <h2>Bodas y Eventos</h2>
            </div>
            <div className="generalProducts">
              <ProductsCard
                id='letras-love'
                tittle='Letras Love'
                description=''
                msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20las%20Letras%20Love!"
                imgUrl='src/assets/img/servicios/Neones.webp'
                colorText='var(--primary-color-100)'/>
              <ProductsCard
                id='neones'
                tittle='Neones'
                description=''
                msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20los%20Neones!"
                imgUrl='src/assets/img/servicios/Neones.webp'
                colorText='var(--primary-color-100)'/>
            </div>
            <ProductsCard
              id='kitAntiResaca'
              tittle='Kit AntiResaca'
              description='Kit AntiResaca Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, eaque sunt autem iusto rem dolorum error harum ut quae sequi! Id, sint repellendus. In iste aperiam id aspernatur! Aspernatur, reprehenderit!'
              imgUrl='src/assets/img/servicios/kitAntiresacaFocus.webp'
              msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20el%20Kit%20AntiResaca!"
              darkBg={true}
              colorText='var(--primary-color-100)'/>
          </div>
        </section>
        {/* !Este section es de reviews */}
        <section>
          <div className="reviewsContainer">
            <h2>Reviews Clientes</h2>
            <div className="line"></div>
            <div className="fotomatonImg">
            <Slider {...settingsReviews}>
                {reviewsData.map((data) => (
                    <ReviewsCard
                    key={data.id}
                    id={data.id}
                    tittle={data.tittle}
                    client={data.client}
                    description={data.description}
                    imgUrl={data.imgUrl}
                    colorText={data.colorText}
                    cardClassName={data.cardClassName}/>
                ))}
              </Slider>
            </div>

          </div>
        </section>
        {/* !Este section es de companies */}
        <section>
          <div className="companiesContainer">
            <h2>Empresas con las que se han trabajado</h2>
            <div className="line"></div>
            <div className="logoCompanies">
              {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
              ))}
              {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
              ))}

              {/* <Slider {...settingsCompanies}>
                {companyData.map((data) => (
                    <ImgSlider key={data.companyName} urlImg={data.urlImg} imgName={data.companyName} styleType='companies'/>
                ))}
              </Slider> */}
            </div>
          </div>
        </section>
        <section id="nosotros">
          <div className="aboutUsContainer">
            <h2>Sobre Nosotros - Equipo</h2>
            <img src="src/assets/img/reviews_equipo/navidadDavidIvet.jpg" alt="VisualShow360Team" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui nam dicta aspernatur non expedita iusto assumenda minus harum porro ullam similique voluptas neque autem modi ipsum, quisquam dolorum officiis?
            </p>
          </div>
        </section>
        {/* !Este section es de contact us */}
        <section id='contacto'>
          <div className="contactoContainer">
            <h2>Formulario Contacto</h2>
            <div className="elementsContainer">
              <div className="formContainer">
                <FormContact />
              </div>
              <div className="mediaContainer">
                <video autoPlay muted loop>
                  <source src="src/assets/video/wedding.mp4" type="video/mp4"/>
                  Este navegador no soporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </section>
        <WhatsAppMessage className="contactFixed" msg="https://wa.me/34653781239?text=Quiero%20más%20información%20sobre%20VisualShow!" />
      </main>
      <footer>
        <div className="footerContainer">  
          <h3>No hacemos eventos...</h3>      
          <h4>¡ Creamos recuerdos !</h4>
          <div className="line"></div>
          <div className="rrssContainer">
            <a href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
              <img id="ig" src="src/assets/icons/ig.svg"/>
            </a>            
            <a href="https://www.tiktok.com/@visualshow360?_t=8jdUAUysy9p&_r=1" target="_blank" rel="noopener noreferrer">
              <img id="ig" src="src/assets/icons/tiktok.svg"/>
            </a>
          </div>
          <div className="normativeContainer">
          <p>© 2024 VisualShow360 - Todos los derechos reservados</p>
          <button>
            <NewPage href="/aviso-legal" label="Aviso Legal" colorText='var(--primary-color-100)'/>
          </button>
          <button>
            <NewPage href="/politica-privacidad" label="Politica de Privacidad" colorText='var(--primary-color-100)'/>
          </button>
          <button>
            <NewPage href="/terminos-condiciones" label="Terminos y Condiciones" colorText='var(--primary-color-100)'/>
          </button>
          </div>
          <img src="src/assets/img/Extra/generalitat.jpg" alt="generalitatImg" />
          <a href="https://www.instagram.com/jordi_code?igsh=MXRvbmtiYmhheHRiZw%3D%3D&utm_source=qr"> Creada y diseñada por Jordi Code</a>
        </div>
      </footer>
      {/* <div className="containerText">
              <a >
                  +34 635 78 12 39
              </a>
              <a >
                  visualshow360@gmail.com
              </a>
          </div> */}
    </>
  )
}
