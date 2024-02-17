import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavItem = ({ href, label, colorText }) => {
  const navigate = useNavigate()

  const handleClick = ( event ) => {
    event.preventDefault()
    if (href.startsWith('#')) {
      navigate('/')
      setTimeout(() => {
        const section = document.querySelector(href)
        if (section) section.scrollIntoView({
          behavior: 'smooth',
        }, 0)
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