import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NewPage = ({ href, label }) => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault()
        navigate(href)
        window.scrollTo(0, 0)
    }
return (
    <a 
    href={href} 
    onClick={handleClick}
    title={`Enlace a la página de ${label}`}
    aria-label={`Enlace a la página de ${label}`}>
        {label}
    </a>
)
}

NewPage.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
