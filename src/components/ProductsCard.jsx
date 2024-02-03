import React from 'react'
import { WhatsAppMessage } from './WhatsAppMessage'

export const ProductsCard = ({ id, tittle, description, imgUrl, darkBg, colorText, msg }) => {
  const cardClassName = darkBg ? 'productCard darkBg' : 'productCard'
  const buttonClassName = darkBg ? 'buttonsContainer' : 'buttonsContainerEven'
  const content = (
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

  return (
    <>
      {content}
    </>
  )
}
