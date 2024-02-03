import React from 'react'

export const InfiniteLoop = ({ urlImg, nameImg, equal }) => {
    let content 

    if (equal) {
        const numImages = Array(8).fill(null)

        content = numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} />
        ))
    } else {
        content = <img key={nameImg} src={urlImg} alt={nameImg} />
    }
    
return (
    <div className="logoSlide">
        {content}
    </div>
)
}
