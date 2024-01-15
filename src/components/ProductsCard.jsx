import React from 'react'
import { NewPage } from './NewPage'

export const ProductsCard = ({ id, tittle, description, imgUrl }) => {

  const content = (
    <div id={id} className='productCard'>
      <h3>{tittle}</h3>
      <img src={imgUrl} alt={tittle} />
      <p>{description}</p>
      <button>
        <NewPage href="/productos" label="Más Información" />
      </button>
    </div>
  )

  return (
    <div id={id} className='productWithoutParallax'>
      {content}
    </div>
  )
}
