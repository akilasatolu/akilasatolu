import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function LinkHome(){
    return (
        <div className='Link_home'>
            <Link to="/" className='Link_home_icon'>
                <FontAwesomeIcon icon={faHouse} />
            </Link>
        </div>
    );
}

export default LinkHome;