import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import ListColumn from '../Components/ListColumn';

function Home() {
    const datas = [
        <p>Hi,I'm <Link to="/me" className="h_appear text_link">akilasatolu<span className='h_appear_item'><FontAwesomeIcon className='icon_right' icon={faHandPointLeft} /></span></Link>.</p>,
        <p>My Labo is <Link to="/labo" className="h_appear text_link">here<span className='h_appear_item'><FontAwesomeIcon className='icon_right' icon={faHandPointLeft} /></span></Link>.</p>
    ];
    return (
        <div className='app_inner'>
            <ListColumn datas={datas} sizeL={true}/>
        </div>
    );
}

export default Home;