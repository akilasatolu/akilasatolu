import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
        <div className='app_inner'>
            <ul className='list_column'>
                <li className='list_column_item_l'><p>Hi,I'm <Link to="/me" className="link_in">akilasatolu<span className='link_icon'><FontAwesomeIcon icon={faHandPointLeft} /></span></Link>.</p></li>
                <li className='list_column_item_l'><p>My Labo is <Link to="/labo" className="link_in">here<span className='link_icon'><FontAwesomeIcon icon={faHandPointLeft} /></span></Link>.</p></li>
            </ul>
        </div>
    );
}

export default Home;