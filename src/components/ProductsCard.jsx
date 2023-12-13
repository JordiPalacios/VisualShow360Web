import React from 'react'

export const ProductsCard = ({id, tittle, description, imgUrl}) => {
  console.log(id)
  return (
    <div id={id}>
      <img src={imgUrl} alt={tittle} />
      <h3>{tittle}</h3>
      <p>{description}</p>
    </div>
  )
}
