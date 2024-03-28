import { NavbarMenu } from '../../components'
import { MediaRepresentation } from '../../components/MediaPresentation'

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
            <MediaRepresentation />
            <img className='img-fade-in' onClick={handleClick} src="./gifs/arrow.gif" alt="arrowGift" />
        </div>
    </header>
)
}
