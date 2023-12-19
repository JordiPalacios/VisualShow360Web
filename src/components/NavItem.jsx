import React from 'react'

export const NavItem = ({href, label, colorText}) => {
  return (
    <li>
        <a href={href} style={{ color: colorText }}>
            {label}
        </a>
    </li>
  )
}
