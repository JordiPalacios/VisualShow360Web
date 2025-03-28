import { FormContact } from '../../components/FormContact';

export const ContactUs = ({tittle, desc, className}) => {

  const content = (
    <section id="contacto">
        <div className={className}>
          <h2>{tittle}</h2>
          <p>
              {desc}
          </p>
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