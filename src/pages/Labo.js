import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import Data from '../datas/data.json';

function Labo() {
    return (
        <div className='app_inner'>
        <Home />
        <section className='section'>
            <div className='section_body'>
            <Text>{'I am deeply curious about emerging technologies and continuously strive to enhance my knowledge.\nI translate this knowledge into actionable skills through coding and project development.\nHere, you can see some of the work that has resulted from my efforts.'}</Text>
            {(()=>{
                const data = Data.data.Labo;
                if(data.length===0) return;
                return (
                <ul className='details'>
                    {
                    data.map((d, i) => {
                        return (
                        <li key={i} className='detail'>
                            <a href={d.url} className='detail_inner link_out' target='_black' rel='noopener'>
                            <div className='detail_title'>
                                <p>{d.title}<FontAwesomeIcon className='link_icon' icon={faArrowUpRightFromSquare} /></p>
                            </div>
                            <div className='detail_text'>
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
        </section>
        </div>
    );
}

export default Labo;