import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { NavItem } from '../../components'

export const Service3 = () => {
    const workingMode = useWorkingMode('Mobile')

return (
    <section id='white-magic-mirror'>
        {workingMode === 'PC' ? (
        <div className="service3Container">
            <div className="service3ContentContainer">  
            <LazyLoadImage src="./img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" />                      
            <div className="service3DescriptionContainer">  
            <h1>Magic Mirror White</h1>
            <h2>TUS FOTOS DE REVISTA</h2>    
            <hr className='line'></hr>        
            <p>
                Mucho <span style={{ color: 'var(--accent)'}}>cuidadito</span> con éste fotomatón, puede pasar de ser tu aliado a llevarse todo el protagonismo. <br />
                <br />
                Eligue un buen fondo y crea los <span style={{ color: 'var(--accent)'}}>RECUERDOS</span> más espectaculares de tu boda. No seas cutre, que en ese momento ya no hay fotógrafos.
            </p>
            <div className="buttonsContainer">
            <button id='EnvioAlFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home' />
            </button>
            </div>
            </div>
            </div>
        </div>
        ) : (
        <div className="service3Container">
            <h1>Magic Mirror White</h1>
            <h2>TUS FOTOS DE REVISTA</h2>
            <div className="service3ContentContainer">              
            <LazyLoadImage src="./img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" />
            <div className="service3DescriptionContainer">              
            <p>
                Mucho <span style={{ color: 'var(--accent)'}}>cuidadito</span> con éste fotomatón, puede pasar de ser tu aliado a llevarse todo el protagonismo. <br />
                <br />
                Eligue un buen fondo y crea los <span style={{ color: 'var(--accent)'}}>RECUERDOS</span> más espectaculares de tu boda. No seas cutre, que en ese momento ya no hay fotógrafos.
            </p>
            <div className="buttonsContainer">
            <button id='EnvioAlFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home'/>
            </button>
            </div>
            </div>
            </div>
        </div>
        )}        
    </section>
)
}
