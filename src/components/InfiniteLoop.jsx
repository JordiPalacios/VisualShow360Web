import React, { useState } from 'react'

export const InfiniteLoop = ({ urlImg, nameImg }) => {
    const [duplicatedCount] = useState(20)
    const duplicates = Array(duplicatedCount).fill(null)

return (
    <div className="logo">
        <div className="logoSlide">
            {duplicates.map((_, index ) => (
                <img key={index} src={urlImg} alt={nameImg} />
            ))}
        </div>
    </div>
)
}
