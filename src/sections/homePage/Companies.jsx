import React from 'react'
import CompaniesData from '../../assets/mocks/companiesData.json'
import { InfiniteLoop } from '../../components'

export const Companies = () => {
    const companyData = CompaniesData
return (
    <section>
        <div className="companiesContainer">
            <h2>Empresas que han confiado en VisualShow</h2>
            <div className="line"></div>
            <div className="logoCompanies">
            {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
            ))}
            {companyData.map((data) => (
                <InfiniteLoop key={data.companyName} urlImg={data.urlImg} nameImg={data.companyName} equal={false}/>
            ))}
            </div>
        </div>
        </section>
)
}
