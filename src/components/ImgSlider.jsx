
import PropTypes from 'prop-types'

export const ImgSlider = ({ urlImg, imgName , styleType }) => {
      //Decido con la clase a trabajar en el slider
      let className

      switch (styleType) {
          case 'services':
              className = 'imgServices'
              break;
          
          case 'companies':
              className = 'imgCompanies'
              break;
  
          default:
              className = 'imgStandard'
              break;
      }

      return (
        <div className={className}>
            <img src={urlImg} alt={imgName} loading='lazy'/>
        </div>
    )

}

ImgSlider.propTypes = {
    urlImg: PropTypes.string,
    imgName: PropTypes.string,
    styleType: PropTypes.string
}