import { useCheckIOS } from "../assets/Customhooks/useCheckIOS"
import { useWorkingMode } from "../assets/Customhooks/useWorkingMode"

export const MediaDisplay = () => {
    const isIOS = useCheckIOS(false)
    const workingMode = useWorkingMode('Mobile') 

    const renderMedia = () => {
        if (workingMode === 'PC') {
            return (
                <video className='videoTabletPC' controlsList='nodownload' playsInline loop muted autoPlay > 
                    <source src="./video/VisualShow.mp4" type="video/mp4"></source>
                    Este navegador no soporta vídeos.
                </video>
            )
        }

        const className = `img${workingMode}`
        const src = "./img/servicios/fotomaton360/atrezzo_3.webp"
        const alt = "atrezzoVisualShow360"
        
        if (isIOS) {
            return <img className={className} src={src} alt={alt} />
        }

        return (
            <video className="videoMobile" controlsList='nodownload' playsInline loop muted autoPlay > 
                <source src="./video/videoMobileBW.mp4" type="video/mp4" />
                Este navegador no soporta vídeos.
            </video>
        )
    }

    return <> {renderMedia()} </>

}