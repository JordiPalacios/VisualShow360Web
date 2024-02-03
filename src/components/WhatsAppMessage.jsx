import React from 'react'

export const WhatsAppMessage = ({ msg, className, label, colorText }) => {
    let content 

    if (className === "contactFixed") {
        content = 
        <div className="contactFixed">
            <div className="cursor"></div>
                <a href={msg} target="_blank" rel="noopener noreferrer">
                    <img id="whatsScroll" src="src/assets/icons/whatsapp.svg" />
                </a>
            </div>
    } else {
        content = 
        <a href={msg} target="_blank" rel="noopener noreferrer" style={{ color: colorText }}>
            {label}
        </a>
    }

return (
    <>
        {content}
    </>
)
}
