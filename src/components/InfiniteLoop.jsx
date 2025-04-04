import LogosData from '../assets/mocks/logosData.json'
import PropTypes from 'prop-types'

export const InfiniteLoop = ({ urlImg, nameImg, equal }) => {
    const logosData = LogosData
    const numImages = Array(32).fill(null)

    let content = equal 
        ? numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} />
        ))
        : logosData.map((data, index) => (
            <img key={data.id} src={data.url} alt={data.name} />
        )) 
    
return (
    <div className="logoSlide">
        {content}
    </div>
)
}

InfiniteLoop.propTypes = {
    urlImg: PropTypes.string.isRequired,
    nameImg: PropTypes.string.isRequired,
    equal: PropTypes.bool.isRequired
}
