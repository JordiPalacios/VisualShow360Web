import { useContext, useEffect, useRef } from 'react'
import CompaniesData from '../../assets/mocks/companiesData.json'
import { InfiniteLoop } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const Companies = () => {
    const companyData = CompaniesData
return (
    <section>
        <div className="companiesContainer">
            <h2>Empresas que han confiado en VisualShow</h2>
            <hr className="line"></hr>
            <div className="logoCompanies">  
                {companyData.map((data) => (
                    <InfiniteLoop 
                        key={data.companyName} 
                        urlImg={data.urlImg} 
                        nameImg={data.companyName} 
                        equal={false}/>
                    ))}
                {companyData.map((data) => (
                    <InfiniteLoop 
                        key={data.companyName} 
                        urlImg={data.urlImg}
                        nameImg={data.companyName} 
                        equal={false}/>
                    ))}
            </div>
        </div>
    </section>
)
}

export const LazyCompanies = () => {
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
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <Companies /> : null}
        </section>
    )
}
