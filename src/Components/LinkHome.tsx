import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function LinkHome(){
    return (
        <Link to="/" className='link_home'>
            <FontAwesomeIcon icon={faHouse} />
        </Link>
    );
}

export default LinkHome;