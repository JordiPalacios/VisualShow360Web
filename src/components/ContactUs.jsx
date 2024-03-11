import React from 'react'
import { FormContact } from './FormContact'

export const ContactUs = () => {

  const content = (
    <div className="contactoContainer">
      <h2>¡ SÍ Quiero !</h2>
      <div className="elementsContainer">
        <div className="formContainer">
          <FormContact />
        </div>
        <div className="mediaContainer">
          <img src="src/assets/img/Extra/logoVS360png.png" alt="logoVSpng" loading='lazy' />
        </div>
      </div>
    </div>
  )
    
return (
    <>
      {content}
    </>
)
}