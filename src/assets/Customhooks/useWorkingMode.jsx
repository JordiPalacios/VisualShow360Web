import { useEffect, useState } from 'react'

export const useWorkingMode = () => {
    const [workingMode, setWorkingMode] = useState('Mobile')

    useEffect (() => {
        const checkWorkingMode = () => {
        if (window.innerWidth > 1023) {
            setWorkingMode('PC')
        } else if ( window.innerWidth > 759) {
            setWorkingMode('Tablet')
        } else {
            setWorkingMode('Mobile')
        }
        }
    
        window.addEventListener('resize', checkWorkingMode)
    
        checkWorkingMode()
    
        return () => {
            window.removeEventListener('resize', checkWorkingMode)
        }
    }, [])

return workingMode
}
