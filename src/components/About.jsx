import '../styles/About.css'
import bgAbout from '../assets/images/bgPage1.png'

const About = () => {
  return (
    <div className="about">
      <div className="aboutBackground">
        <img className='aboutBackgroundImage' src={bgAbout} />
      </div>
    </div>
  )
}

export default About