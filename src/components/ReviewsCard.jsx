import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export const ReviewsCard = ({ id, tittle, client, description, imgUrl, cardClassName }) => {

    const content = (
    <div id={id} className={cardClassName}> 
        <h3>{tittle}</h3>
        <h4>{client}</h4>
        <div className="description">            
            <LazyLoadImage src={imgUrl} alt={tittle} />
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