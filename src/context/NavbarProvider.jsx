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
            
            console.log(headerRef.current.offsetTop)

            setNavbarHeight(newNavbarHeight)
            setBreakpoint(newBreakpoint)
        }
    }, [])
    console.log(navbarHeight)
    console.log(breakpoint)

    return (
        <NavbarContext.Provider value={{ breakpoint, navbarHeight, navbarRef, headerRef }}>
            {children}
        </NavbarContext.Provider>
    )
}
