import React from 'react'

export const InfiniteLoop = ({ urlImg, nameImg }) => {
    const numImages = Array(8).fill(null)
return (
    <div className="logoSlide">
        {numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} />
        ))}
    </div>
)
}
