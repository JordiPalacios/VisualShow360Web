import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component"
import { useCheckIOS } from "../assets/Customhooks/useCheckIOS"
import { useWorkingMode } from "../assets/Customhooks/useWorkingMode"

export const MediaDisplay = () => {
    const isIOS = useCheckIOS(false)
    const workingMode = useWorkingMode('Mobile') 

    const renderMedia = () => {
        if (workingMode === 'Mobile') {
            if (isIOS) {                
                return <LazyLoadImage className='imgMobile' src="./img/servicios/fotomaton360/atrezzo_3.webp" alt="atrezzoVisualShow" />
            } else {
                return (
                    <LazyLoadComponent>
                        <video className='videoMobile' controlsList='nodownload' playsInline loop muted autoPlay  >
                            <source src="./video/videoMobileBW.mp4" type="video/mp4"/>
                            Este navegador no soporta vídeos.
                        </video>
                    </LazyLoadComponent> 
                )
            }
        } else if (workingMode === 'Tablet') {
            if (isIOS) {                
                return <LazyLoadImage className='imgTablet' src="./img/servicios/fotomaton360/atrezzo_3.webp" alt="atrezzoVisualShow" />
            } else {
                return (
                    <LazyLoadComponent>
                        <video className='videoMobile' controlsList='nodownload' playsInline loop muted autoPlay  >
                            <source src="./video/videoMobileBW.mp4" type="video/mp4"/>
                            Este navegador no soporta vídeos.
                        </video>
                    </LazyLoadComponent> 
                )
            }
        } else {
            return (
                <LazyLoadComponent>                
                    <video className='videoTabletPC'controlsList='nodownload' playsInline loop muted autoPlay >
                        <source src="./video/weedingBW.mp4" type="video/mp4"/>
                        Este navegador no soporta vídeos.
                    </video>
                </LazyLoadComponent>
            )
        }
    }

    return <> {renderMedia()} </>

}