import { useContext, useEffect, useRef } from 'react'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { NavItem } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const Service3 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='white-magic-mirror'>
        {workingMode === 'PC' ? (
        <div className="service3Container">
            <div className="service3ContentContainer">  
            <img src="./img/servicios/whiteMagicMirror/whiteMagicMirrorPeople.webp" alt="Espejo magico blanco" />                      
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
            <button id='S3PcFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
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
            <img src="./img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" />
            <div className="service3DescriptionContainer">              
            <p>
                Mucho <span style={{ color: 'var(--accent)'}}>cuidadito</span> con éste fotomatón, puede pasar de ser tu aliado a llevarse todo el protagonismo. <br />
                <br />
                Eligue un buen fondo y crea los <span style={{ color: 'var(--accent)'}}>RECUERDOS</span> más espectaculares de tu boda. No seas cutre, que en ese momento ya no hay fotógrafos.
            </p>
            <div className="buttonsContainer">
            <button id='S3OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
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

export const LazyService3 = () => {
    const { show, setShow } = useContext(LoadContext)
    const elementRef = useRef()

    useEffect( function () {
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <Service3 /> : null}
        </section>
    )
}
