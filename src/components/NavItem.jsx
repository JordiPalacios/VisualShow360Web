import React from 'react'
import { useNavigate } from 'react-router-dom'

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
            offset = 
          section.getBoundingClientRect().top + window.scrollY - 100
          } else if (page === 'otrosProductos') {
            offset = 
          section.getBoundingClientRect().top + window.scrollY - 180
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
        <a href={href} onClick={handleClick}>
            {label}
        </a>
    </li>
  )
}