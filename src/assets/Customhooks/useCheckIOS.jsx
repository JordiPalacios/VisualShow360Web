import { useEffect, useState } from 'react'

export const useCheckIOS = () => {
    const [isIOS, setisIOS] = useState(false)

    useEffect (() => {
        const checkIOSDevice = () => {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            setisIOS(true)
        } else {
            setisIOS(false)
        }
        }

        checkIOSDevice()
    }, [])

return isIOS
}