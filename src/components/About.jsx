import '../styles/About.css'
import logo2 from '../assets/images/logo2.png'
import firstImage from '../assets/images/firstImage.jpeg'
import secondImage from '../assets/images/secondImage.jpeg'

const About = () => {
  return (
    <div id="about">
      <div className="aboutBackground">
        <div className="test">
        <section className="parent" id='parent'>
          <div className="div1">
            <img className="logo2" src={logo2} alt="" />
          </div>
          <div className="div2">
            <img className='firstImage' src={firstImage} alt="" />
          </div>
          <div className="div3">
            <h2>Hawkins era uma cidade pequena e tranquila, até que tudo muda quando um menino desaparece de forma misteriosa. Enquanto sua mãe, amigos e a polícia o procuram, segredos sombrios sobre experimentos do governo são revelados, deixando a aventura ainda mais intrigante. Mergulhe nessa jornada de 4 amigos em busca de respostas sobre o que está acontecendo na sua cidade.</h2>
          </div>
          <div className="div4">
            <img className='secondImage' src={secondImage} alt="" />
          </div>
        </section>
        </div>
        
      </div>
    </div>
  )
}

export default About