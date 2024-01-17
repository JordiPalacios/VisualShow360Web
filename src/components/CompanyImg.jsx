import React from 'react'

export const CompanyImg = ({ urlImg, companyName}) => {

return (
    <div className='companyImg'>
        <img src={urlImg} alt={companyName} />
    </div>
)
}
