import React from 'react'

export const NavItem = ({href, label, colorText}) => {
  return (
    <li style={{ listStyleType: 'none' }}>
        <a href={href} style={{ color: colorText}}>
            {label}
        </a>
    </li>
  )
}
