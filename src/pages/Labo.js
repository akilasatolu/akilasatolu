import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import Data from '../datas/data.json';

function Labo() {
  return (
    <div className='App-inner'>
      <Home />
      <Text>{'I am deeply curious about emerging technologies and continuously strive to enhance my knowledge.\nI translate this knowledge into actionable skills through coding and project development.\nHere, you can see some of the work that has resulted from my efforts.'}</Text>
      {(()=>{
        const data = Data.data.Labo;
        if(data.length===0) return;
        return (
          <ul className='Details'>
            {
              data.map((d, i) => {
                return (
                  <li key={i} className='Detail'>
                    <a href={d.url} className='Detail-inner Link-out' target='_black' rel='noopener'>
                      <div className='Detail-title'>
                        <p>{d.title}<FontAwesomeIcon className='Link-icon' icon={faArrowUpRightFromSquare} /></p>
                      </div>
                      <div className='Detail-text'>
                        <p>{d.disc}</p>
                      </div>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        );
      })()}
    </div>
  );
}

export default Labo;