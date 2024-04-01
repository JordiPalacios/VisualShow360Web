import { LazyLoadComponent } from "react-lazy-load-image-component"

export const useLazyLoadComponent = (Component) => {
    return () => (
        
        <LazyLoadComponent>
            <Component />
        </LazyLoadComponent>
    )
}