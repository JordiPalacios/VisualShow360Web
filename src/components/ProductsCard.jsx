import React from 'react'
import { WhatsAppMessage } from './WhatsAppMessage'

export const ProductsCard = ({ id, tittle, description, imgUrl, darkBg, colorText, msg }) => {
  const cardClassName = darkBg ? 'productCard darkBg' : 'productCard'
  const buttonClassName = darkBg ? 'buttonsContainer' : 'buttonsContainerEven'
  const displayElementRow = darkBg ? 'rowContainer' : ''

  // ToDo: Acabar el diplay element row -> Quiero que sea en Row: Titulo y Descripcion a un lado + Foto al lado opuesto
  // ! Debo Crear una nueva Distribucion del content si tengo un Input de Row ContentImg, asi puedo modificarlos como quiera

  let content

  if (displayElementRow !== 'rowContainer') {
    content = (
      <div id={id} className={cardClassName}>   
        <h3>{tittle}</h3>
        <img src={imgUrl} alt={tittle} />
        <p>{description}</p>
        <div className={buttonClassName}>        
          <button>
            <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
          </button>
        </div>     
      </div>
    )
  } else {
    content = (
      <div id={id} className={cardClassName}>   
        <img src={imgUrl} alt={tittle} />
        <h3>{tittle}</h3>
        <p>{description}</p>
        <div className={buttonClassName}>        
          <button>
            <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
          </button>
        </div>     
      </div>
    )
  }

  // const content = (
  //   <div id={id} className={cardClassName}>   
  //     <h3>{tittle}</h3>
  //     <img src={imgUrl} alt={tittle} />
  //     <p>{description}</p>
  //     <div className={buttonClassName}>        
  //       <button>
  //         <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
  //       </button>
  //   </div>     
  //   </div>
  // )


  return (
    <>
      {content}
    </>
  )
}
