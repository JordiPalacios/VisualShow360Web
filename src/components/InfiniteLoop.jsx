import CompaniesData from '../assets/mocks/companiesData.json'
import PropTypes from 'prop-types'

export const InfiniteLoop = ({ urlImg, nameImg, equal }) => {
    const companyData = CompaniesData
    const numImages = Array(32).fill(null)

    let content = equal 
        ? numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} />
        ))
        : companyData.map((data, index) => (
            <img key={index} src={data.urlImg} alt={data.nameImg} />
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
