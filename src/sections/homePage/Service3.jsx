import React from 'react'
import { useWorkingMode } from '../../assets/customhooks/useWorkingMode'
import { NavItem } from '../../components'

export const Service3 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='white-magic-mirror'>
        {workingMode === 'PC' ? (
        <div className="service3Container">
            <div className="service3ContentContainer">  
            <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" loading='lazy'/>                      
            <div className="service3DescriptionContainer">  
            <h1>White Magic Mirror</h1>
            <h2> <span>¡Titulo Guay</span>&nbsp;PC/Tablet!</h2>    
            <hr className='line'></hr>        
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainer">
            <button>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)' page='home'/>
            </button>
            </div>
            </div>
            </div>
        </div>
        ) : (
        <div className="service3Container">
            <h1>White Magic Mirror</h1>
            <h2> ¡Titulo Guay Para Tablet!</h2>
            <div className="service3ContentContainer">              
            <img src="src/assets/img/servicios/whiteMagicMirror/magicMirrorWhiteBg.webp" alt="Espejo magico blanco" loading='lazy'/>
            <div className="service3DescriptionContainer">              
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
            </p>
            <div className="buttonsContainer">
            <button>
                <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--textWhite)'/>
            </button>
            </div>
            </div>
            </div>
        </div>
        )}        
    </section>
)
}
