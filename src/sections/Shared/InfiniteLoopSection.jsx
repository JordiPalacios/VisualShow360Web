import { InfiniteLoop } from '../../components/'

export const InfiniteLoopSection = () => {
return (
    <section>
        <div className="logo">        
            <InfiniteLoop urlImg="./img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
            <InfiniteLoop urlImg="./img/Extra/show.webp" nameImg="VisualShow" equal={true}/>
        </div>
    </section>
)
}
