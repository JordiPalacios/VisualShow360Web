import React from 'react'

export const NavItem = ({href, label}) => {
  return (
    <li>
        <a href={href}>
            {label}
        </a>
    </li>
  )
}
