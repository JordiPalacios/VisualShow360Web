import { useEffect, useRef, useState } from 'react'
import { NavbarContext } from './NavbarContext'
import PropTypes from 'prop-types'

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

    return (
        <NavbarContext.Provider value={{ breakpoint, navbarHeight, navbarRef, headerRef }}>
            {children}
        </NavbarContext.Provider>
    )
}

NavbarProvider.propTypes = {
    children: PropTypes.node.isRequired
}
