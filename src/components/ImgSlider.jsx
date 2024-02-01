import React from 'react'

export const ImgSlider = ({ urlImg, imgName, styleType}) => {
    const className = styleType === 'services' ? 'imgServices' : 'imgCompanies'
    // ToDo: Crear un objeto para que en funcion de la entrada seleccione una clase u otra
    // que no sea un ternario, que sea con un case
    
return (
    <div className={className}>
        <img src={urlImg} alt={imgName} />
    </div>
)
}
