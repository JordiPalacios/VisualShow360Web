import React, { useEffect, useState } from 'react'
import { NavbarContext } from './NavbarContext'

export const NavbarProvider = ({ children }) => {
    const [navbarHeight, setNavbarHeight] = useState(0)
    const [breakpoint, setBreakpoint] =useState(0)

    const updateNavbarData = (navbarRef, headerRef) => {
        if (navbarRef.current && headerRef.current) {
            const newNavbarHeight = navbarRef.current.getBoundingClientRect().height
            const newBreakpoint = headerRef.current.offsetTop - newNavbarHeight
            
            setNavbarHeight(newNavbarHeight)
            setBreakpoint(newBreakpoint)
        }
    }
    console.log(breakpoint)

    return (
        <NavbarContext.Provider value={{ navbarHeight, breakpoint, updateNavbarData }}>
            {children}
        </NavbarContext.Provider>
    )
}
