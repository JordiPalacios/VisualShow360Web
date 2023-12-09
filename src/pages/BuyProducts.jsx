import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BuyProducts = () => {
    const navigationPage = useNavigate()

    function home () {
        navigationPage('/')
    }

    return (
        <div>
            <button onClick={home}>Home</button>
            <div>BuyProducts</div>
        </div>
    )
}
