import { useContext, useEffect, useState } from 'react'
import { NavbarContext } from '../context/NavbarContext'
import { NewPage } from './NewPage'
import { NavItem } from './NavItem'
import { useWorkingMode } from '../assets/Customhooks/useWorkingMode'

export const NavbarMenu = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
    const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
    const { navbarRef, headerRef} = useContext(NavbarContext)
    const workingMode = useWorkingMode('Mobile')

    const handleMouseEnter = (menu) => {
        if (window.innerWidth >= 748) {
            switch (menu) {
                case 'products' :
                    setIsMoreProductsInfo(true)
                    break
                case 'weddings' :
                    setIsMoreWeddingsInfo(true)
                    break
                default :
                    break
            }
        }
    }

    const handleMouseLeave = (menu) => {
        if (window.innerWidth >= 748) {
            switch (menu) {
                case 'products' :
                    setIsMoreProductsInfo(false)
                    break
                case 'weddings' :
                    setIsMoreWeddingsInfo(false)
                    break
                default :
                    break
            }
        }
    }


    const handleWindowSizeChange = () => {
        if (window.innerWidth < 748) {
            setIsMenuToggled(false)
            setIsMoreProductsInfo(false)
            setIsMoreWeddingsInfo(false)
        }
    }

    useEffect (() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }

    }, [])

    const toggleClass = (className) => {
        if (workingMode !== 'PC'){        
            switch (className) {
            case 'menuOpen':
                setIsMenuToggled(!isMenuToggled)
                break;
                
            case 'products':
                setIsMoreProductsInfo(!isMoreProductsInfo)
                break;
                
            case 'weddings':
                setIsMoreWeddingsInfo(!isMoreWeddingsInfo)
                break;
                
            default:
                break;
            }
        }
    }

return (
    <div ref={headerRef}>
        <nav id='navbar' ref={navbarRef} className='navFixed'>
            <div className="menuResponsiveContainer">                
                <div className="logoMenu">
                    <button
                    id='AbrirCerrarElMenu'
                    aria-label='Se abrirá o cerrará el menú, según el estado en el que se encuentre'
                    className={isMenuToggled ? 'crossMenu' : 'hamburgerMenu'}
                    onClick={() => toggleClass('menuOpen')}>
                    </button>
                    <h1><NewPage href='/' label='Visual Show 360' /></h1>
                </div>
                <div className={isMenuToggled ? 'menuOpened' : 'menuResponsive'}>
                    <ul>
                        <li>
                            <b><NewPage href='/' label='Home' /></b>
                        </li>
                        <div className='tabletPCMenu'>  
                            <div onMouseLeave={() => handleMouseLeave('products')}>
                                <b>                                    
                                <li 
                                onMouseEnter={() => handleMouseEnter('products')}                            
                                onClick={() => toggleClass('products')}>
                                    Fotomatones {isMoreProductsInfo ? <div className="triangulo-arriba"></div> : <div className="triangulo-abajo"></div>}
                                </li>
                                </b>
                                <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'}>
                                    <NavItem href='#plataforma360' label='Plataforma 360'page='home' />
                                    <NavItem href='#magic-mirror' label='Magic Mirror LED' page='home' />
                                    <NavItem href='#fotomaton-24h' label='Fotomatón 24H'page='home' />                                
                                </div>
                            </div>                          
                        </div>
                        <b>
                            <NavItem href='#telefono-audiolibro' label='Vídeo-libro' page='otrosProductos' />
                        </b>
                        {/* <div className='tabletPCMenu'>  
                            <div onMouseLeave={() => handleMouseLeave('weddings')} >
                                <b>
                                <li 
                                onMouseEnter={() => handleMouseEnter('weddings')}                            
                                onClick={() => toggleClass('weddings')}
                                >
                                    Extras Para Tu Boda { isMoreWeddingsInfo ? <div className="triangulo-arriba"></div> : <div className="triangulo-abajo"></div> }
                                </li>
                                </b>
                                <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
                                    <NavItem href='#letras-love' label='Letras Love' page='otrosProductos' />
                                    <NavItem href='#neones' label='Neones' page='otrosProductos' />
                                    <NavItem href='#kitAntiResaca' label='Kit AntiResaca' page='otrosProductos' />
                                </div>
                            </div>                          
                        </div> */}
                        {/* <li>
                            <b>
                                <a 
                                href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
                                target="_blank" 
                                rel='noreferrer'                            
                                aria-label='Enlace al Instagram de VisualShow360 para ver más ejemplos de bodas en barcelona'>
                                    Eventos Reales
                                </a>
                            </b>
                        </li> */}
                        <b><NavItem href='#nosotros' label='Nosotros' page='home' /></b>             
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}
