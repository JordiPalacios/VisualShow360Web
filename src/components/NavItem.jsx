import React from 'react'

export const NavItem = ({href, label, color}) => {
  return (
    <li style={{color}}>
        <a href={href}>
            {label}
        </a>
    </li>
  )
}
