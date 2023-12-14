import React from 'react'
import { NewPage } from './NewPage'

export const ProductsCard = ({id, tittle, description, imgUrl}) => {
  return (
    <div id={id}>
      <img src={imgUrl} alt={tittle} />
      <h3>{tittle}</h3>
      <p>{description}</p>
      <h4>Mas información</h4>
      <button>
        <NewPage href="/productos" label="Más Información" />
      </button>
    </div>
  )
}
