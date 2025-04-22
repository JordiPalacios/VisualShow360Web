
import PropTypes from 'prop-types'

export const ImgSlider = ({ urlImg, imgName , styleType, isVideo, poster }) => {
      //Decido con la clase a trabajar en el slider
    let className

    switch (styleType) {
        case 'services':
            className = 'imgServices'
            break;
        
        case 'companies':
            className = 'imgCompanies'
            break;

        case 'video':
            className = 'isVideo'
            break;

        default:
            className = 'imgStandard'
            break;
    }

    return (
        isVideo ? (
            <div className={className}>
                <video 
                    src={urlImg} 
                    alt={imgName} 
                    itemType='video/mp4' 
                    preload='metadata' 
                    controls 
                    controlsList='nodownload' 
                    poster={poster} 
                    muted 
                    playsInline
                />
            </div>
        ) : (
            <div className={className}>
                <img src={urlImg} alt={imgName} />
            </div>
        )
        
    )

}

ImgSlider.propTypes = {
    urlImg: PropTypes.string,
    imgName: PropTypes.string,
    styleType: PropTypes.string
}