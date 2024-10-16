import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import ListColumn from '../Components/ListColumn'
import BadgeList from '../Components/BadgeList'
import Data from '../datas/data.json';
import { useTranslation } from 'react-i18next';

function Me() {
    const infos = [
        <p><FontAwesomeIcon className='icon_left' icon={faEnvelope} />shogo.620@gmail.com</p>,
        <a href={'https://github.com/akilasatolu'} target='_blank' rel='noopener'><p><FontAwesomeIcon className='icon_left' icon={faGithub} />akilasatolu<FontAwesomeIcon className='icon_right' icon={faArrowUpRightFromSquare} /></p></a>
    ];
    const { t } = useTranslation();
    return (
        <div className='app_inner'>
            <Home />
            <section className='section'>
                <div className='section_title'><p>WHO I AM</p></div>
                <div className='section_body'>
                    <Text>{t('Me')}</Text>
                </div>
            </section>
            <section className='section'>
                <div className='section_title'><p>SKILLS</p></div>
                <div className='section_body'>
                    <BadgeList datas={Data.data.Skills} />
                </div>
            </section>
            <section className='section'>
                <div className='section_title'><p>MORE ABOUT ME</p></div>
                <div className='section_body'>
                    <ListColumn datas={infos} />
                </div>
            </section>
        </div>
    );
}

export default Me;