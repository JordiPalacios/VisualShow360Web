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