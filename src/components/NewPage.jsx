import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NewPage = ({href, label, colorText}) => {
    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault()
        navigate(href)
        window.scrollTo(0, 0)
    }
return (
    <a href={href} onClick={handleClick} style={{ color: colorText }}>
        {label}
    </a>
)
}
