import { useCheckIOS } from "../assets/Customhooks/useCheckIOS"
import { useWorkingMode } from "../assets/Customhooks/useWorkingMode"

export const MediaDisplay = () => {
    const isIOS = useCheckIOS(false)
    const workingMode = useWorkingMode() 
    const className = `img${workingMode}`
    const src = "./img/servicios/fotomaton360/atrezzo_3.webp"
    const alt = "atrezzoVisualShow360"

    let media
    
    if ( isIOS && workingMode !== 'PC' ) {
        media = <img className={className} src={src} alt={alt} />
    } else if (workingMode === 'Mobile') {
        media = (
            <video className='videoMobile' controlsList='nodownload' playsInline loop muted autoPlay  >
                <source src="./video/videoMobileBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
        )
    } else if (workingMode === 'PC' || (workingMode === 'Tablet' && !isIOS)) {
        media = (
            <video className='videoTabletPC'controlsList='nodownload' playsInline loop muted autoPlay >
                <source src="./video/weedingBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
        )
    }

    return <> {media} </>
}