import React, { useState } from 'react'
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
            <input required onInput={handleInput} onInvalid={handleInvalid} type="text" name='Nombre Cliente' placeholder='N O M B R E    *' />
        </label>
        <label>
            <input required onInput={handleInput} onInvalid={handleInvalid} type="email" name='Correo Cliente' placeholder='C O R R E O    E L E C T R O N I C O    *' />
        </label>
        <label>
            <input required onInput={handleInput} onInvalid={handleInvalid} type="tel" name='Numero Cliente' placeholder='N U M E R O    T E L E F O N O    *' />
        </label>
        <label className='selectorContainer'>
            T&nbsp;I&nbsp;P&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O:
            <select name="Tipo de Evento" value={tipoEvento} onChange={handleChange}>
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
            <input required onInput={handleInput} onInvalid={handleInvalid} type="date" name='Fecha Evento' />
        </label>
        <label>
            S&nbsp;I&nbsp;T&nbsp;I&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;E&nbsp;V&nbsp;E&nbsp;N&nbsp;T&nbsp;O:
            <input required onInput={handleInput} onInvalid={handleInvalid} type="text" name='Luegar Evento' placeholder='L U G A R   E V E N T O    *' />
        </label>
        <label>
        <div class="checkbox-wrapper">
            {/* ToDO: Que me funcione el metodo required ya que me esta afectando estos estilos a mi codigo
            Creare un checkbox personalizado por mi parte mas simple y que funcione */}
            <input required id="terms-checkbox-37" name="checkbox" type="checkbox" />
            <label class="terms-label" for="terms-checkbox-37">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" class="checkbox-svg">
                <mask fill="white" id="path-1-inside-1_476_5-37">
                    <rect height="200" width="200"></rect>
                </mask>
                <rect mask="url(#path-1-inside-1_476_5-37)" stroke-width="40" class="checkbox-box" height="200" width="200"></rect>
                <path stroke-width="15" d="M52 111.018L76.9867 136L149 64" class="checkbox-tick"></path>
                </svg>
                <span class="label-text">He leído y acepto la <NewPage href="/politica-privacidad" label="Politica de Privacidad. " colorText='var(--primary-color-900)'/></span>
            </label>
        </div>              
        </label>
        <button type="submit">Enviar</button>
    </form>
)
}
