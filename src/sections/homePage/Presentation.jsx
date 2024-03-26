import { NavbarMenu } from '../../components'

export const Presentation = () => {

    const handleClick = () => {
        const element = document.getElementById('plataforma360')
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        }

    }

return (
    <header>
        <NavbarMenu />
        <div className="presentationContainer">
            <div className="tittles">                
                <h1 className='h1-fade-in'> SE CASAN&nbsp;<span style={{ color: 'var(--accent)', fontWeight: '900'}}>190.000</span> PAREJAS AL AÑO</h1>
                <h2 className='h2-fade-in'>HAZ QUE TU BODA SEA</h2>
                <h2 className="h2-fade-in-accent">ESPECIAL</h2>
            </div>
            <video className='videoMobile' controlsList='nodownload' autoPlay muted loop playsInline >
                <source src="./video/videoMobileBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
            <video className='videoTabletPC'controlsList='nodownload' autoPlay muted loop playsInline>
                <source src="./video/weedingBW.mp4" type="video/mp4"/>
                Este navegador no soporta vídeos.
            </video>
            <img className='img-fade-in' onClick={handleClick} src="./gifs/arrow.gif" alt="arrowGift" />
        </div>
    </header>
)
}
