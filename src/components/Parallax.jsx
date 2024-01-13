import React, { useEffect, useRef } from 'react'

export const Parallax = ({speed, children}) => {
    const ref = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (ref.current) {
                ref.current.style.transform = `translateY(${offset * speed}px)`
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [speed])

return (
    <div ref={ref} className='parallax-bg'>
        {children}
    </div>
)
}
