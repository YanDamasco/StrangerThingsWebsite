import '../styles/Watch.css'
import playButton from '../assets/images/playButton.png'
import netflixLogo from '../assets/images/netflixLogo.png'

const Watch = () => {
  return (
    <div id='watch'>
      <div className="watchBackground">
        <div className="testWatch">
          <div className='playNow'>
            <img src={playButton} alt="" className='button'/>
            <h1>Assista agora</h1>
          </div>
          <div className='logo'>
            <img src={netflixLogo} alt="" className='logoNetflix1'/>
          </div>
          <div className='image'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Watch