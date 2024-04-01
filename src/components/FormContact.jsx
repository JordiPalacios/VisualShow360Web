import { useState } from 'react'
import { NewPage } from './NewPage'

export const FormContact = () => {
    const [tipoEvento, setTipoEvento] = useState('')

    const handleChange = (event) => {
        setTipoEvento(event.target.value)
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity('Campo Obligatorio')
    }

    const handleInput = (e) => {
        e.target.setCustomValidity('')
    }

return (
    <form action="https://formspree.io/f/xoqbbbvn" method="post">
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='Nombre Cliente' 
            placeholder='N O M B R E    *' />
        </label>
        {/* <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="email" 
            name='Correo Cliente' 
            placeholder='C O R R E O    E L E C T R O N I C O    *' />
        </label> */}
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="tel" 
            name='Numero Cliente' 
            placeholder='N U M E R O    T E L E F O N O    *' />
        </label>
        <label>
            T&nbsp;I&nbsp;P&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O&nbsp;&nbsp;:
            <select 
            name="Tipo de Evento" 
            value={tipoEvento} 
            onChange={handleChange}>
                <option value="boda"> Boda </option>
                <option value="cumpleaños"> Cumpleaños </option>
                <option value="eventoCorporativo"> Evento Corporativo </option>
                <option value="fiestaPrivada"> Fiesta Privada </option>
                <option value="otros"> Otros </option>
            </select>
            {/* <input type="text" name='tipoEvento' placeholder='S E L E C C I O N E    E V E N T O' /> */}
        </label>
        {/* <label htmlFor='fechaEvento'>
            F&nbsp;E&nbsp;C&nbsp;H&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O&nbsp;&nbsp;:
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="date" 
            name='Fecha Evento'  
            id='fechaEvento'/>
        </label>
        <label>
            <input 
            required 
            onInput={handleInput} 
            onInvalid={handleInvalid} 
            type="text" 
            name='Lugar Evento' 
            placeholder='L U G A R   E V E N T O    *' />
        </label> */}
        <div className='checkBoxContainer'>
            <label htmlFor='miCheckbox'>
                <input 
                required 
                id='miCheckbox' 
                name="Permiso Envio Correos" 
                type="checkbox"  hidden/>
                <span className='checkbox'></span>
            </label>
            <label className="checkBoxText">
                He leído y acepto la <NewPage href="/politica-privacidad" label="Politica de Privacidad" />
            </label>
        </div>
        <button id='EnviarFormularioVisualShow' aria-label='Se enviará el formulario'  type="submit">Enviar</button>
    </form>
)
}
