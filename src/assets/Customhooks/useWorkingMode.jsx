import { useEffect, useState } from 'react'

export const useWorkingMode = () => {
    const [workingMode, setWorkingMode] = useState('mobile')

    useEffect (() => {
        
        const checkWorkingMode = () => {
        if (window.innerWidth > 1023) {
            setWorkingMode('desktop')
        } else if ( window.innerWidth > 759) {
            setWorkingMode('tablet')
        } else {
            setWorkingMode('mobile')
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
