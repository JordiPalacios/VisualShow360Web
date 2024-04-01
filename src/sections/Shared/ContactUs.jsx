import { FormContact } from '../../components/FormContact';

export const ContactUs = () => {

  const content = (
    <section id="contacto">
        <div className="contactoContainer">
          <h2>¡SÍ Quiero!</h2>
          <div className="elementsContainer">
            <div className="formContainer">       
              <FormContact />
            </div>
            <div className="mediaContainer">
              <img style={{ borderRadius: '50%', width: '300px', filter: 'drop-shadow(0 0 2px var(--accent-2)'}} src="./img/servicios/LogoVisualShow.webp" alt="logoVSwebp" />
            </div>
          </div>
        </div>
    </section>
  )
    
return (
    <>
      {content}
    </>
)
}