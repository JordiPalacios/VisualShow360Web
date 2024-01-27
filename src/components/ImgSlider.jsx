import React from 'react'

export const ImgSlider = ({ urlImg, imgName}) => {

return (
    <div className='companyImg'>
        <img src={urlImg} alt={imgName} />
    </div>
)
}
