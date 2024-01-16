import React from 'react'
import { NewPage } from './NewPage'

export const ProductsCard = ({ id, tittle, description, imgUrl, darkBg, colorText }) => {
  const cardClassName = darkBg ? 'productCard darkBg' : 'productCard'
  const buttonClassName = darkBg ? 'buttonsContainer' : 'buttonsContainerEven'
  const content = (
    <div id={id} className={cardClassName}>        
      <h3>{tittle}</h3>
      <img src={imgUrl} alt={tittle} />
      <p>{description}</p>
      <div className={buttonClassName}>        
        <button>
          <NewPage href="/productos" label="Más Información" colorText={colorText}/>
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
