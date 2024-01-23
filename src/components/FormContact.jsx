import React, { useState } from 'react'

export const FormContact = () => {
    const [tipoEvento, setTipoEvento] = useState('')

    const handleChange = (event) => {
        setTipoEvento(event.target.value)
    }

return (
    <form action="https://formspree.io/f/xoqbbbvn" method="post">
        <label>
            <input type="text" name='nombreCliente' placeholder='N O M B R E' />
        </label>
        <label>
            <input type="email" name='correoCliente' placeholder='C O R R E O    E L E C T R O N I C O' />
        </label>
        <label>
            <input type="tel" name='numeroCliente' placeholder='N U M E R O    T E L E F O N O' />
        </label>
        <label>
            T&nbsp;I&nbsp;P&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O:
            <select name="tipoEvento" value={tipoEvento} onChange={handleChange}>
                <option value="boda"> Boda </option>
                <option value="cumpleaños"> Cumpleaños </option>
                <option value="eventoCorporativo"> Evento Corporativo </option>
                <option value="boda"> Fiesta </option>
                <option value="otros"> Otros </option>
            </select>
            {/* <input type="text" name='tipoEvento' placeholder='S E L E C C I O N E    E V E N T O' /> */}
        </label>
        <label>
            F&nbsp;E&nbsp;C&nbsp;H&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O:
            <input type="date" name='fechaEvento' />
        </label>
        <label>
            S&nbsp;I&nbsp;T&nbsp;I&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O:
            <input type="text" name='fechaEvento' placeholder='LUGAR DEL EVENTO' />
        </label>
        <button type="submit">Enviar</button>
    </form>
)
}
