import React, { useEffect, useRef, useState } from 'react'
import { NavbarContext } from './NavbarContext'

export const NavbarProvider = ({ children }) => {
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [breakpoint, setBreakpoint] =useState(0)
    const navbarRef = useRef(null)
    const headerRef = useRef(null)

    useEffect(() => {
        if (navbarRef.current && headerRef.current) {
            const newNavbarHeight = navbarRef.current.getBoundingClientRect().height
            const newBreakpoint = headerRef.current.offsetTop - newNavbarHeight
            
            setNavbarHeight(newNavbarHeight)
            setBreakpoint(newBreakpoint)
        }
    }, [])
    console.log(breakpoint)

    return (
        <NavbarContext.Provider value={{ breakpoint, navbarRef, headerRef }}>
            {children}
        </NavbarContext.Provider>
    )
}
