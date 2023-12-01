import '../styles/Cast.css';
import firstPerson from '../assets/images/cast/mike.png';
import secondPerson from '../assets/images/cast/will.png';
import thirdPerson from '../assets/images/cast/dustin.png';
import fourthPerson from '../assets/images/cast/lucas.png';
import fifthPerson from '../assets/images/cast/eleven.png';
import sixthPerson from '../assets/images/cast/nancy.png';
import seventhPerson from '../assets/images/cast/steve.png';
import eighthPerson from '../assets/images/cast/jonathan.png';
import ninethPerson from '../assets/images/cast/joyce.png';
import tenthPerson from '../assets/images/cast/jim.png';

const Cast = () => {
  return (
    <div id='cast'>
      <div className="castBackground">
        <div className='castSpace'>
          <div className='castTitle'>
            <h1>ELENCO</h1>
          </div>
          <section className="parentCast" id='parentCast'>
            <div className="firstPerson">
              <img src={firstPerson} alt="" />
              <h3>Finn Wolfhard</h3>
              <h2>Mike Wheeler</h2>
            </div>
            <div className="secondPerson">
              <img src={secondPerson} alt="" />
              <h3>Noah Schnapp</h3>
              <h2>Will Byers</h2>
            </div>
            <div className="thirdPerson">
              <img src={thirdPerson} alt="" />
              <h3>Gaten Matarazzo</h3>
              <h2>Dustin Henderson</h2>
            </div>
            <div className="fourthPerson">
              <img src={fourthPerson} alt="" />
              <h3>Caleb McLaughlin</h3>
              <h2>Lucas Sinclair</h2>
            </div>
            <div className="fifthPerson">
              <img src={fifthPerson} alt="" />
              <h3>Millie Bobby Brown</h3>
              <h2>Eleven</h2>
            </div>
            <div className="sixthPerson">
              <img src={sixthPerson} alt="" />
              <h3>Natalia Dyer</h3>
              <h2>Nancy Wheeler</h2>
            </div>
            <div className="seventhPerson">
              <img src={seventhPerson} alt="" />
              <h3>Joe Keery</h3>
              <h2>Steve Harrington</h2>
            </div>
            <div className="eighthPerson">
              <img src={eighthPerson} alt="" />
              <h3>Charlie Heaton</h3>
              <h2>Jonathan Byers</h2>
            </div>
            <div className="ninethPerson">
              <img src={ninethPerson} alt="" />
              <h3>Winona Ryder</h3>
              <h2>Joyce Byers</h2>
            </div>
            <div className="tenthPerson">
              <img src={tenthPerson} alt="" />
              <h3>David Harbour</h3>
              <h2>Jim Hopper</h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Cast