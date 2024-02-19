import React, { useContext, useEffect, useState } from 'react'
import { NavbarContext } from '../context/NavbarContext'
import { NewPage } from './NewPage'
import { NavItem } from './NavItem'

export const NavbarMenu = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
    const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    const { breakpoint, navbarHeight, navbarRef, headerRef} = useContext(NavbarContext)

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

    useEffect (() => {
        const onScroll = () => {
            let windowPos = window.scrollY
            const isNavFixed = windowPos >= breakpoint
            setIsFixed(isNavFixed)
            if (isNavFixed) {
            headerRef.current.style.paddingTop = `${navbarHeight}px`
            } else {
            headerRef.current.style.paddingTop = `0px`
            }
        }
        window.addEventListener('scroll', onScroll)
    
        return () => window.removeEventListener('scroll', onScroll)
        }, [breakpoint])


    const toggleClass = (className) => {
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

return (
    <div ref={headerRef}>
        <nav id='navbar' ref={navbarRef} className={isFixed ? 'navFixed' : ''}>
            <div className="menuResponsiveContainer">                
                <div className="logoMenu">
                    <button
                    className={isMenuToggled ? 'crossMenu' : 'hamburgerMenu'}
                    onClick={() => toggleClass('menuOpen')}>
                    </button>
                    <h1><NewPage href='/' label='Visual Show 360' colorText='var(--textWhite)'/></h1>
                </div>
                <div className={isMenuToggled ? 'menuOpened' : 'menuResponsive'}>
                    <ul>
                        <b><NewPage href='/' label='Home' /></b>
                        <div className='tabletPCMenu'>  
                            <div onMouseLeave={() => handleMouseLeave('products')}>
                                <li 
                                onMouseEnter={() => handleMouseEnter('products')}                            
                                onClick={() => toggleClass('products')}><b>Servicios Party {isMoreProductsInfo ? '⮵' : '⮷'} </b></li>
                                <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'}>
                                    <NavItem href='#plataforma360' label='Plataforma 360'page='home' />
                                    <NavItem href='#magic-mirror' label='Magic Mirror' page='home' />
                                    <NavItem href='#white-magic-mirror' label='White Magic Mirror'page='home' />                                
                                </div>
                            </div>                          
                        </div>
                        <div className='tabletPCMenu'>  
                            <div onMouseLeave={() => handleMouseLeave('weddings')} >
                                <li 
                                onMouseEnter={() => handleMouseEnter('weddings')}                            
                                onClick={() => toggleClass('weddings')}
                                ><b>Otros Productos {isMoreWeddingsInfo ? '⮵' : '⮷'} </b></li>
                                <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
                                    <NavItem href='#ring-ring-experience' label='Ring Experience' page='otrosProductos' />
                                    <NavItem href='#letras-love' label='Letras Love' page='otrosProductos' />
                                    <NavItem href='#neones' label='Neones' page='otrosProductos' />
                                    <NavItem href='#kitAntiResaca' label='Kit AntiResaca' page='otrosProductos' />
                                </div>
                            </div>                          
                        </div>
                        <b><NavItem href='#nosotros' label='Nosotros' page='home' /></b>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}
