import { LazyLoadComponent } from 'react-lazy-load-image-component'
import CompaniesData from '../../assets/mocks/companiesData.json'
import { InfiniteLoop } from '../../components'

export const Companies = () => {
    const companyData = CompaniesData
return (
    <section>
        <div className="companiesContainer">
            <h2>Empresas que han confiado en VisualShow</h2>
            <hr className="line"></hr>
            <div className="logoCompanies">
                <LazyLoadComponent>                    
                    {companyData.map((data) => (
                        <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
                        ))}
                    {companyData.map((data) => (
                        <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
                        ))}
                </LazyLoadComponent>
            </div>
        </div>
        </section>
)
}
