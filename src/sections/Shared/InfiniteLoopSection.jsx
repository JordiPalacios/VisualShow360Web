import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { InfiniteLoop } from '../../components/'

export const InfiniteLoopSection = () => {
return (
    <section>
        <div className="logo">
            <LazyLoadComponent>                
                <InfiniteLoop urlImg="./img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
                <InfiniteLoop urlImg="./img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
            </LazyLoadComponent>
        </div>
    </section>
)
}
