import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavItem = ({ href, label, colorText, page }) => {
  const navigate = useNavigate()

  const handleClick = ( event ) => {
    event.preventDefault()
    if (page === 'home') {
      navigate('/')
      setTimeout(() => {
        const section = document.querySelector(href)
        if (section) {
          const offset = section.getBoundingClientRect().top + window.scrollY - 50
          window.scrollTo ({
            top: offset,
            behavior : 'smooth'
          })
        }
        else {
          navigate(href)
        }

      })
    } else if (page === 'otrosProductos') {
      navigate('otros-productos')
      setTimeout(() => {
        const section = document.querySelector(href)
        if (section) {
          const offsetProducts = section.getBoundingClientRect().top + window.scrollY - 80
          window.scrollTo({
            top: offsetProducts,
            behavior: 'smooth'
          })
        }
        else {
          navigate(href)
        }
      })
    }
  }

  return (
    <li style={{ listStyleType: 'none' }}>
        <a href={href} onClick={handleClick} style={{ color: colorText}}>
            {label}
        </a>
    </li>
  )
}