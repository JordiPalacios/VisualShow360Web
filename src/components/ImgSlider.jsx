import React from 'react'

export const ImgSlider = ({ urlImg, imgName, styleType}) => {
    //Decido con la clase a trabajar en el slider
    const classNameMap = {
        services: 'imgServices',
        companies: 'imgCompanies'
    }
    const className = classNameMap[styleType] || 'defaultClass'
    
return (
    <div className={className}>
        <img src={urlImg} alt={imgName} />
    </div>
)
}
