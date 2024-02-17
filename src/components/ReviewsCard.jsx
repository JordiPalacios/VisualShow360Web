import React from 'react'

export const ReviewsCard = ({ id, tittle, client, description, imgUrl, cardClassName, urlBodasNet, imgBodasNet }) => {

    const content = (
    <div id={id} className={cardClassName}> 
        <h3>{tittle}</h3>
        <h4>{client}</h4>
        <div className="description">            
            <img src={imgUrl} alt={tittle} />
            <p>{description}</p>
        </div>
        <a href={urlBodasNet}>Leer más</a>
        <img src={imgBodasNet} alt="LogoBodasNet" />
    </div>
)

return (
    <>
        {content}
    </>
)
}