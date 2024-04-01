import PropTypes from 'prop-types'

export const WhatsAppMessage = ({ msg, className, label, colorText }) => {
    let content 

    if (className === "contactFixed") {
        content = 
        <div className="contactFixed">
            <div className="cursor"></div>
                <a 
                href={msg} 
                target="_blank" 
                rel="noopener noreferrer"                
                aria-label='Enlace al WhatsApp de VisualShow360 para pedir información'>
                    <img id="whatsScroll" src="./icons/whatsapp.svg" alt='whatsAppSvg' />
                </a>
            </div>
    } else {
        content = 
        <a 
        href={msg} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: colorText }}        
        aria-label='Enlace al WhatsApp de VisualShow360 para pedir información'>
            {label}
        </a>
    }

return (
    <>
        {content}
    </>
)
}

WhatsAppMessage.propTypes = {
    msg: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    colorText: PropTypes.string
}
