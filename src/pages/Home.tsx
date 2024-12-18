import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import ListColumn from '../Components/ListColumn';

function Home() {
    const datas = [
        <p>Hi,I'm <Link to="/me" className="text_link_h">akilasatolu<FontAwesomeIcon className='text_link_h_item' icon={faHandPointLeft} /></Link>.</p>,
        <p>My Labo is <Link to="/labo" className="text_link_h">here<FontAwesomeIcon className='text_link_h_item' icon={faHandPointLeft} /></Link>.</p>
    ];
    return (
        <div className='app_inner'>
            <ListColumn datas={datas} sizeL={true}/>
        </div>
    );
}

export default Home;