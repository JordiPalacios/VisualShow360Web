import { NavbarMenu } from '../../components'
import { MediaDisplay } from '../../components/MediaDisplay'


export const Presentation = () => {

    const handleClick = () => {
        const element = document.getElementById('plataforma360')
        if (element) {
        element.scrollIntoView({ behavior: 'smooth', top: '0' })
        }
    }

return (
    <header>
        <NavbarMenu />
        <div className="presentationContainer">
            <div className="tittles">                
                <h1 className='h1Tittle'> SE CASAN&nbsp;<span style={{ color: 'var(--accent)', fontWeight: '900'}}>190.000</span> PAREJAS AL AÑO</h1>
                <h2 className='h2Tittle'>HAZ QUE TU BODA SEA</h2>
                <h2 className="h2TittleAccent">ESPECIAL</h2>
            </div>
            <MediaDisplay />
            <img className='goService1' onClick={handleClick} src="./gifs/arrow.gif" alt="arrowGift" />
        </div>
    </header>
)
}
