import { useCheckIOS } from "../assets/Customhooks/useCheckIOS"
import { useWorkingMode } from "../assets/Customhooks/useWorkingMode"

export const MediaDisplay = () => {
    const isIOS = useCheckIOS()
    const workingMode = useWorkingMode() 

    const renderMedia = () => {
        if (isIOS && workingMode === 'Mobile') {
            return <img className='imgMobile' src="./img/servicios/fotomaton360/atrezzo_3.webp" alt="atrezzoVisualShow" loading="lazy"/>
        } else if (isIOS && workingMode === 'Tablet') {
            return <img className='imgTablet' src="./img/servicios/fotomaton360/atrezzo_3.webp" alt="atrezzoVisualShow" loading="lazy"/>
        } else {
            return (
                <>
                    <video className='videoMobile' controlsList='nodownload' playsInline loop muted autoPlay  loading="lazy">
                        <source src="./video/videoMobileBW.mp4" type="video/mp4"/>
                        Este navegador no soporta vídeos.
                    </video>
                    <video className='videoTabletPC'controlsList='nodownload' playsInline loop muted autoPlay loading="lazy">
                        <source src="./video/weedingBW.mp4" type="video/mp4"/>
                        Este navegador no soporta vídeos.
                    </video>
                </>
            )
        }
    }
    return <> {renderMedia()} </>
}