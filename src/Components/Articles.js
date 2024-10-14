import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Articles = ({datas}) => {
    if(!datas || datas.length === 0) return;
    return (
        <ul className='articles'>
            {datas.map((d, i) => {
                return (
                <li key={i} className='article'>
                    <a href={d.url} className='article_inner' target='_blank' rel='noopener'>
                    <div className='article_title'>
                        <p>{d.title}<FontAwesomeIcon className='icon_right' icon={faArrowUpRightFromSquare} /></p>
                    </div>
                    <div className='article_text'>
                        <p>{d.disc}</p>
                    </div>
                    </a>
                </li>
                )
            })}
        </ul>
    );
};

export default Articles;