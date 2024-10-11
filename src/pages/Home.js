import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='App-inner'>
      <ul>
          <li><p>Hi,I'm <Link to="/me" className="Link-in">akilasatolu<span className='Link-icon'><FontAwesomeIcon icon={faHandPointLeft} /></span></Link>.</p></li>
          <li><p>My Labo is <Link to="/labo" className="Link-in">here<span className='Link-icon'><FontAwesomeIcon icon={faHandPointLeft} /></span></Link>.</p></li>
      </ul>
    </div>
  );
}

export default Home;