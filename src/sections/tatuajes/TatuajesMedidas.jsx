import React from 'react'

export const TatuajesMedidas = () => {
    return (
        <section className='tatuajesMedidas'>
            <div className="tatuajesMedidasExp">
                <img src="./img/servicios/tatuajes/tatuaje_02.webp" alt="Tatuaje Personalizado" width="300px" height="auto"/>
                <table className='tableTatuajesMedida' cellPadding="25" cellSpacing="1">
                    <tbody>                    
                        <tr>
                            <td style={{backgroundColor: 'var(--accent)'}}>
                                <b>150 tatuajes</b>
                            </td>
                            <td style={{backgroundColor: 'var(--accent-2)', color: 'darkgreen'}}>
                                <b>0,50€/unidad</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: 'var(--accent)'}}>
                                100 tatuajes
                            </td>
                            <td style={{backgroundColor: 'var(--accent-2)', color: 'darkgreen'}}>
                                <b>0,60€/unidad</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{backgroundColor: 'var(--accent)'}}>
                                50 tatuajes
                            </td>
                            <td style={{backgroundColor: 'var(--accent-2)', color: 'darkgreen'}}>
                                <b>0,80€/unidad</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>
                *Para evitar la reventa de tatuajes por parte de otras empresas, el máximo de unidades de compra por web son de 150 unidades.
            </p>
            <h2 style={{color: 'var(--accent)'}}>
                PAGO CONTRA REEMBOLSO EN 24/48H
                <br />
            </h2>
        </section>
    )
}
