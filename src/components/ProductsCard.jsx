import React from 'react'
import { WhatsAppMessage } from './WhatsAppMessage'

export const ProductsCard = ({ id, tittle, description, imgUrl, difBg, colorText, msg, workingMode }) => {
  const cardClassName = difBg ? 'productCardRow' : 'productCard'
  const displayElementRow = difBg ? 'rowContainer' : ''

  let content

  if (displayElementRow === 'rowContainer' && workingMode === 'PC') {
    content = (
      <div id={id} className={`${cardClassName}Container`}>  
        <div className={cardClassName}>      
          <img src={imgUrl} alt={tittle} />
          <div className='contentContainer'>
            <h1>{tittle}</h1>
            <h2>¡ Frase Guay para PC !</h2>
            <div className="line"></div>
            <p>{description}</p>
            <div className='buttonsContainer'>        
              <button>
                <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
              </button>
            </div>     
          </div>
        </div> 
      </div>
    )
  } else {
    content = (
      <div id={id} className={cardClassName}>
        <h1>{tittle}</h1>
        <img src={imgUrl} alt={tittle} />
        <p>{description}</p>
        <div className='buttonsContainer'>        
          <button>
            <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
          </button>
        </div>     
      </div>
    )
  }
  
  return (
    <>
      {content}
    </>
  )
}
