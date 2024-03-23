import PropTypes from 'prop-types'
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

ReviewsCard.propTypes = {
    id: PropTypes.string.isRequired,
    tittle: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    cardClassName: PropTypes.string.isRequired
}