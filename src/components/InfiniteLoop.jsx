import React from 'react'
import CompaniesData from '../assets/mocks/companiesData.json'

export const InfiniteLoop = ({ urlImg, nameImg, equal }) => {
    let content 
    const companyData = CompaniesData

    if (equal) {
        const numImages = Array(32).fill(null)

        content = numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} loading='lazy' />
        ))
    } else {
        content = companyData.map((data, index) => (
            <img key={index} src={data.urlImg} alt={data.nameImg} loading='lazy' />
        ))
    }
    
return (
    <div className="logoSlide">
        {content}
    </div>
)
}
