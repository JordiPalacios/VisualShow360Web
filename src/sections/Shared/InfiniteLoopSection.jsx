import { useEffect, useRef, useState } from 'react'
import { InfiniteLoop } from '../../components/'

const InfiniteLoopSection = () => {
return (
    <section>
        <div className="logo">        
            <InfiniteLoop 
                urlImg="./img/Extra/show.webp" 
                nameImg="VisualShow" 
                equal={true}/>
            <InfiniteLoop 
                urlImg="./img/Extra/show.webp" 
                nameImg="VisualShow" 
                equal={true}/>
        </div>
    </section>
)
}

export const LazyInfiniteLoopSection = () => {
    const [show, setShow] = useState(false)
    const elementRef = useRef()

    useEffect( function() {
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <InfiniteLoopSection /> : null}
        </section>
    )
}
