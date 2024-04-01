import { LazyLoadImage } from 'react-lazy-load-image-component'
import CompaniesData from '../assets/mocks/companiesData.json'
import PropTypes from 'prop-types'
import { useWorkingMode } from '../assets/Customhooks/useWorkingMode'

export const InfiniteLoop = ({ urlImg, nameImg, equal }) => {
    const companyData = CompaniesData
    const numImages = Array(32).fill(null)
    const workingMode = useWorkingMode('Mobile')

    let content = equal 
        ? numImages.map((_, index) => (
            (workingMode === 'Mobile') 
            ? <img key={index} src={urlImg} alt={nameImg} />
            : <LazyLoadImage key={index} src={urlImg} alt={nameImg} />
        ))
        : companyData.map((data, index) => (
            (workingMode === 'Mobile')
            ? <img key={index} src={data.urlImg} alt={data.companyName} />
            : <LazyLoadImage key={index} src={data.urlImg} alt={data.companyName} />
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
