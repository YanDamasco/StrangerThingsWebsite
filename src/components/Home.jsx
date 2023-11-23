import '../styles/Home.css'
import homePhoto from '../assets/images/homePhoto.png'

const Home = () => {

  return (
    <div className="home">
        <img className='homePhoto' src={homePhoto} />
    </div>
  )
}

export default Home