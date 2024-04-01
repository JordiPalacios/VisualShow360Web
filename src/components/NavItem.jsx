import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const NavItem = ({ href, label, page }) => {
  const navigate = useNavigate()
  let offset

  const handleClick = ( event ) => {
    event.preventDefault()

    if (page === 'home') {
      navigate('/')
    } else if (page === 'otrosProductos') {
      if (window.location.pathname !== '/otros-productos') {
        navigate('/otros-productos')
      }
    }

    setTimeout(() => {
      const section = href.startsWith('#')
        ? document.querySelector(href)
        : document.querySelector(href.split('#')[1])

        if (section) {
          if (page === 'home') {
            if ((window.innerWidth > 760) &&(window.innerWidth < 1330)) {
              offset = 
                    section.getBoundingClientRect().top + window.scrollY - 145
            } else {
              offset = 
                    section.getBoundingClientRect().top + window.scrollY - 100
            }
          } else if (page === 'otrosProductos') {
            if (href === '#ring-ring-experience') {
              offset = 
              section.getBoundingClientRect().top + window.scrollY - 180
            } else {
              if ((window.innerWidth > 760) &&(window.innerWidth < 1330)) {
                offset = 
                section.getBoundingClientRect().top + window.scrollY - 145
              } else {                
                offset = 
                section.getBoundingClientRect().top + window.scrollY - 100
              }
            }
          }
          
          window.scrollTo ({
            top: offset,
            behavior : 'smooth'
          })
        }
      }, 250)
  }

  return (
    <li style={{ listStyleType: 'none' }}>
        <a 
        href={href} 
        onClick={handleClick}        
        aria-label={`Enlace hacia ${href.replace('#', '')}`}>
            {label}
        </a>
    </li>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}