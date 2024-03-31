import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const WhatsAppMessage = ({ msg, className, label, colorText }) => {
    let content 

    if (className === "contactFixed") {
        content = 
        <div className="contactFixed">
            <div className="cursor"></div>
                <a href={msg} target="_blank" rel="noopener noreferrer">
                    <LazyLoadImage id="whatsScroll" src="./icons/whatsapp.svg" alt='whatsAppSvg' />
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

WhatsAppMessage.propTypes = {
    msg: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    colorText: PropTypes.string
}
