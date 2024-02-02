import React from 'react'

export const ImgSlider = ({ urlImg, imgName, styleType}) => {
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
        <img src={urlImg} alt={imgName} />
    </div>
)
}
