import { useContext, useEffect, useRef } from "react"
import { LoadContext } from "../../context/LoadContext"

const AboutUs = () => {
return (
    <section id="nosotros">              
        <div className="aboutUsContainer">
                <h2>Somos de carne y hueso...</h2>
                <div className="aboutUsContentContainer">   
                    <img src="./img/reviews_equipo/navidadDavidIvet.webp" alt="VisualShow360Team" />
                    <p>
                        Una pareja <span>"normal"</span> y sencilla de Barcelona, que hace 2 años, en una boda me di cuenta (Ivet) de lo cutre que era el fotomatón...
                        <br />
                        <br />
                        Vi a un señor ahí puesto apoyado en el fotomatón, que más bien parecía una caja de madera, con el calor de julio cerca de la costa.
                        <br />
                        <br />
                        Pues resulta que me giré hacia mi pareja (David) y le dije:
                        <br />
                        - Oye, esto es muy mejorable, una boda se merece algo mucho más top.
                        <br />
                        - Si algo no te gusta, cámbialo.
                        <br />
                        <br />
                        <span>Y aquí estamos.</span>
                    </p>
                </div>
        </div>
    </section>
)
}

export const LazyAboutUs = () => {
    const { show, setShow } = useContext(LoadContext)
    const elementRef = useRef()

    useEffect( function () {
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
            {show ? <AboutUs /> : null}
        </section>
    )
}