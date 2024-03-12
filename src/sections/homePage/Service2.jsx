import React from 'react'
import { NavItem } from '../../components'
import { useWorkingMode } from '../../assets/customhooks/useWorkingMode'

export const Service2 = () => {
    const workingMode = useWorkingMode()
return (
    <section id='magic-mirror'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <div className="service2ContentContainer">
            <img src="src/assets/gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>           
            <div className="service2DescriptionContainer">  
                <h2>Magic Mirror</h2>
                <h3> ¡Frase Guay &nbsp;<span>PC/Tablet!</span></h3>    
                <hr className='line'></hr>             
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                <button>
                    <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                </button>
                </div>
            </div>
            </div>
        </div>
        ) : 
        (
        <div className='service2Container'>
            <h2>Magic Mirror</h2>              
            <h3> ¡Frase Guay Para Tablet!</h3> 
            <div className="service2ContentContainer">              
            <img src="src/assets/gifs/GIF.gif" alt="Espejo magico" loading='lazy'/>
            <div className="service2DescriptionContainer">                
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quidem laudantium doloribus atque totam voluptate, nulla tenetur provident minima natus beatae non, reprehenderit pariatur praesentium! Dolore necessitatibus ab eaque cum!
                </p>
                <div className="buttonsContainer">
                <button>
                    <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                </button>
                </div>
            </div>
            </div>
        </div>
        )}
    </section>
)
}
