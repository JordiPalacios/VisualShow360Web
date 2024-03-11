import React from 'react'

export const ReviewsCard = ({ id, tittle, client, description, imgUrl, cardClassName }) => {

    const content = (
    <div id={id} className={cardClassName}> 
        <h3>{tittle}</h3>
        <h4>{client}</h4>
        <div className="description">            
            <img src={imgUrl} alt={tittle} loading='lazy'/>
            <p>{description}</p>
        </div>
    </div>
)

return (
    <>
        {content}
    </>
)
}