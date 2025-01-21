import { useContext, useEffect, useRef } from 'react'
import { InfiniteLoop } from '../../components/'
import { LoadContext } from '../../context/LoadContext'

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
    const { show, setShow } = useContext(LoadContext)
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
            rootMargin: '300px'
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
