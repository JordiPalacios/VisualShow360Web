import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    const navigationPage = useNavigate()

    function home () {
        navigationPage('/')
    }
    return (
        <div>
            <h1>Parece que te has perdido...</h1>
            <button onClick={home}>Volver a la fiesta</button>
        </div>
    )
}
