import React from 'react'
import { InfiniteLoop } from '../../components'

export const InfiniteLoopSection = () => {
return (
    <section>
        <div className="logo">
            <InfiniteLoop urlImg="src/assets/img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
            <InfiniteLoop urlImg="src/assets/img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
        </div>
    </section>
)
}
