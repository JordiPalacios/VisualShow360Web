import { createContext } from 'react'

export const NavbarContext = createContext({
    navbarHeight : 0,
    breakpoint : 0,
    setNavbarHeight : () => {},
    setBreakpoint : () => {}
})
