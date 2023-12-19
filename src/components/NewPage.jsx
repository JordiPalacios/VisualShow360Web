import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NewPage = ({href, label, colorText}) => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault()
        navigate(href)
    }
return (
    <a href={href} onClick={handleClick} style={{ color: colorText }}>
        {label}
    </a>
)
}
