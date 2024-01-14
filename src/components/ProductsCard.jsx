import React from 'react'
import { NewPage } from './NewPage'
import { Parallax } from './Parallax'

export const ProductsCard = ({id, tittle, description, imgUrl, }) => {

  const content = (
    <div id={id} className='productCard'>
      <img src={imgUrl} alt={tittle} />
      <h3>{tittle}</h3>
      <p>{description}</p>
      <h4>Mas información</h4>
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
