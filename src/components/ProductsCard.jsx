import { WhatsAppMessage } from './WhatsAppMessage'
import PropTypes from 'prop-types'

export const ProductsCard = ({ id, tittle, imgUrl, kitAnti, colorText, msg, workingMode }) => {
  const cardClassName = kitAnti ? 'productCardRow' : 'productCard'
  const displayElementRow = kitAnti ? 'rowContainer' : ''

  let content

  if (displayElementRow === 'rowContainer' && workingMode === 'PC') {
    content = (
      <div id={id} className={`${cardClassName}Container`}>  
        <div className={cardClassName}>      
          <img src={imgUrl} alt={tittle} />
          <div className='contentContainer'>
            <h1>{tittle}</h1>
            <h2>BOLSITA KIT DE SUPERVIVENCIA</h2>
            <div className="line"></div>
            {kitAnti ? (
                <div className="descriptionKitContainer">                
                  <p>
                      <span style={{color:'var(--accent)', backgroundColor: 'var(--textWhite)', padding: '10px'}}>“Olvídate del típico regalo que coge polvo”</span> <br />
                      <br />
                      Buscas un <span style={{color: 'var(--accent)'}}>detalle</span> para tus invitados. Pero que al menos, les sirva para algo.  <br />
                      <br />
                      Con éste kit anti resaca <span style={{color: 'var(--accent)'}}>personalizado</span> vas a sorprenderles y se van a llevar el regalo más original y sobre todo, podrá ser usado durante <span style={{color: 'var(--accent)'}}>toda la boda.</span>  <br />
                      <br />
                      ¡Tus invitados te lo agradecerán!
                  </p>
                  <div className="detailsKit"> 
                      <h2>Éstas bolsitas incluyen:</h2>                   
                      <ul>
                          <li>•	Bebida isotónica sabor naranja</li>
                          <li>•	Toallita desmaquillante/Agua micelar</li>
                          <li>•	Gel Hidroalcohólico</li>
                          <li>•	Goma de pelo</li>
                          <li>•	Chicle “happydent” mentolado</li>
                          <li>•	Chocolate “toblerone” (Sabor sorpresa)</li>
                          <li>•	Toallita desodorante</li>
                      </ul>
                  </div>
                </div>
              ) : (
                <p> </p>
              )}
            <div className='buttonsContainer'>        
              <button id='WhatsAppMasInformacion' aria-label='Abrirá el chat de WhatsApp para pedir más información'>
                <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
              </button>
            </div>     
          </div>
        </div> 
      </div>
    )
  } else {
    content = (
      <div id={id} className={cardClassName}>
        <h1>{tittle}</h1>
        <img src={imgUrl} alt={tittle} />
        {kitAnti ? (
          <div className="descriptionKitContainer">                
          <p>
              <span style={{color:'var(--accent)', backgroundColor: 'var(--textWhite)', padding: '10px'}}>“Olvídate del típico regalo que coge polvo”</span> <br />
              <br />
              Buscas un <span style={{color: 'var(--accent)'}}>detalle</span> para tus invitados. Pero que al menos, les sirva para algo.  <br />
              <br />
              Con éste kit anti resaca <span style={{color: 'var(--accent)'}}>personalizado</span> vas a sorprenderles y se van a llevar el regalo más original y sobre todo, podrá ser usado durante <span style={{color: 'var(--accent)'}}>toda la boda.</span>  <br />
              <br />
              ¡Tus invitados te lo agradecerán!
          </p>
          <div className="detailsKit"> 
              <h2>Éstas bolsitas incluyen:</h2>                   
              <ul>
                  <li>•	Bebida isotónica sabor naranja</li>
                  <li>•	Toallita desmaquillante/Agua micelar</li>
                  <li>•	Gel Hidroalcohólico</li>
                  <li>•	Goma de pelo</li>
                  <li>•	Chicle “happydent” mentolado</li>
                  <li>•	Chocolate “toblerone” (Sabor sorpresa)</li>
                  <li>•	Toallita desodorante</li>
              </ul>
          </div>
        </div>
          ) : (
          <p> </p>
        )}
        <div className='buttonsContainer'>        
          <button id='WhatsAppMasInformacion' aria-label='Abrirá el chat de WhatsApp para pedir más información'>
            <WhatsAppMessage className="" label="Más Información" colorText={colorText} msg={msg} />
          </button>
        </div>     
      </div>
    )
  }
  
  return (
    <>
      {content}
    </>
  )
}

ProductsCard.propTypes = {
  id: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  kitAnti: PropTypes.bool,
  colorText: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  workingMode: PropTypes.string.isRequired
}