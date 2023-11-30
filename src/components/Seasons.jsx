import '../styles/Seasons.css'
import seasonOne from '../assets/images/posterSeason1.jpg'
import seasonTwo from '../assets/images/posterSeason2.jpg'
import seasonThree from '../assets/images/posterSeason3.jpg'
import seasonFour from '../assets/images/posterSeason4.png'

const Seasons = () => {
  return (
    <div id='seasons'>
      <div className="seasonsBackground">
        <div className='testSeasons'>
          <div className='titleSeasons'>
            <h1>TEMPORADAS</h1>
          </div>
        <section className="parentSeasons" id='parentSeasons'>
          <div className="div1Title">
            <h1>TEMPORADA 1</h1>
          </div>
          <div className="div2Title">
            <h1>TEMPORADA 2</h1>
          </div>
          <div className="div1Seasons">
            <img className="seasonOne" src={seasonOne} alt="" />
            <h2>Situada no interior de Indiana, na década de 1980, a história inicia com o desaparecimento de Will, um menino de 12 anos. Enquanto a família e os amigos tentam entender o que aconteceu, o chefe de polícia Hooper inicia uma investigação e se depara com experiências secretas conduzidas pelo governo numa base militar no subúrbio da cidade. Ao mesmo tempo, os amigos de Will - Mike, Dustin e Lucas - tentam localizá-lo por conta própria, mas acabam encontrando Eleven, uma menina misteriosa, com estranhos poderes.</h2>
          </div>
          <div className="div2Seasons">
          <img className="seasonTwo" src={seasonTwo} alt="" />
            <h2>Um ano após os eventos da primeira temporada, Will retornou ao seu lar e à companhia dos seus amigos mas ainda está conectado ao Mundo Invertido. No entanto, a cidadezinha de Hawkins, Indiana, não está completamente à salvo e não demora muito para que fragmentos do Mundo Invertido façam seu caminho até a superfície.</h2>
          </div>
          <div className="div3Title">
            <h1>TEMPORADA 3</h1>
          </div>
          <div className="div4Title">
            <h1>TEMPORADA 4</h1>
          </div>
          <div className="div3Seasons">
            <img className="seasonThree" src={seasonThree} alt="" />
            <h2>É verão em Hawkins. De férias da escola, Eleven, Mike, Dustin, Lucas , Will e Max aproveitam as novidades do recém inaugurado shopping da cidade, enquanto experienciam situações típicas da adolescência que colocam a prova a amizade do grupo. Mas quando a cidade volta a ser ameaçada por inimigos novos e antigos, eles precisam lembrar que a união é mais forte que o medo.</h2>
          </div>
          <div className="div4Seasons">
          <img className="seasonFour" src={seasonFour} alt="" />
            <h2>Já se passaram seis meses desde a Batalha de Starcourt, que trouxe terror e destruição a Hawkins. Lutando com as consequências, nosso grupo de amigos está separado pela primeira vez – e navegar pelas complexidades do ensino médio não tornou as coisas mais fáceis. Neste momento mais vulnerável, uma nova e horrível ameaça sobrenatural surge, apresentando um mistério horrível que, se resolvido, pode finalmente acabar com os horrores do Mundo Invertido.</h2>
          </div>
        </section>
        <div className="space"></div>
        </div>
      </div>
    </div>
  )
}

export default Seasons