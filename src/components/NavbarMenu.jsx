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

      // ToDo: Exportar esto a un componente
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
            <div className="logoMenu">
                <button
                className={isMenuToggled ? 'crossMenu' : 'hamburgerMenu'}
                onClick={() => toggleClass('menuOpen')}>
                </button>
                <h1><NewPage href='/' label='Visual Show 360' colorText='var(--primary-color-50)'/></h1>
            </div>
            <div className={isMenuToggled ? 'menuOpened' : ''}>
                <ul>
                    <b><NavItem href='/' label='Home' colorText='var(--primary-color-100)' /></b>
                    <li onClick={() => toggleClass('products')}><b>Servicios Party {isMoreProductsInfo ? '⮵' : '⮷'} </b></li>
                    <div className={isMoreProductsInfo ? 'productosOpen' : 'productosClose'} >
                        <NavItem href='#plataforma360' label='Plataforma 360' colorText='var(--primary-color-300)'/>
                        <NavItem href='#magic-mirror' label='Magic Mirror' colorText='var(--primary-color-300)'/>
                        <NavItem href='#white-magic-mirror' label='White Magic Mirror' colorText='var(--primary-color-300)' />
                        <NavItem href='#ring-ring-experience' label='Ring Ring Experience' colorText='var(--primary-color-300)'/>
                    </div>
                    <li onClick={() => toggleClass('weddings')}><b>Bodas y Eventos {isMoreWeddingsInfo ? '⮵' : '⮷'} </b></li>
                    <div className={isMoreWeddingsInfo ? "bodasEventosOpen" : 'bodasEventosClose'}>
                        <NavItem href='#letras-love' label='Letras Love' colorText='var(--primary-color-300)'/>
                        <NavItem href='#neones' label='Neones' colorText='var(--primary-color-300)'/>
                        <NavItem href='#kitAntiResaca' label='Kit AntiResaca' colorText='var(--primary-color-300)'/>
                    </div>
                    <b><NavItem href='#nosotros' label='Nosotros' colorText='var(--primary-color-100)' /></b>
                </ul>
            </div>
        </nav>
    </div>
)
}
