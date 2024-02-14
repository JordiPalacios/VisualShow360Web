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
                    <h1><NewPage href='/' label='Visual Show 360' colorText='var(--text-50)'/></h1>
                </div>
                <div className={isMenuToggled ? 'menuOpened' : 'menuResponsive'}>
                    <ul>
                        <b><NewPage href='/' label='Home' colorText='var(--text-50)' /></b>
                        <div className='tabletPCMenu'>                            
                            <li onClick={() => toggleClass('products')}><b>Servicios Party {isMoreProductsInfo ? '⮵' : '⮷'} </b></li>
                            <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'} >
                                <NavItem href='#plataforma360' label='Plataforma 360' colorText='var(--secondary-200)' />
                                <NavItem href='#magic-mirror' label='Magic Mirror' colorText='var(--secondary-200)' />
                                <NavItem href='#white-magic-mirror' label='White Magic Mirror' colorText='var(--secondary-200)' />
                                <NavItem href='#ring-ring-experience' label='Ring Experience' colorText='var(--secondary-200)' />
                            </div>
                        </div>
                        <div className='tabletPCMenu'>                            
                            <li onClick={() => toggleClass('weddings')}><b>Experiencias Infalibles {isMoreWeddingsInfo ? '⮵' : '⮷'} </b></li>
                            <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
                                <NavItem href='#letras-love' label='Letras Love' colorText='var(--secondary-200)' />
                                <NavItem href='#neones' label='Neones' colorText='var(--secondary-200)' />
                                <NavItem href='#kitAntiResaca' label='Kit AntiResaca' colorText='var(--secondary-200)' />
                            </div>
                        </div>
                        <b><NavItem href='#nosotros' label='Nosotros' colorText='var(--text-50)' /></b>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}
