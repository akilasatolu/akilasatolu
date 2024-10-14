import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import ListColumn from '../Components/ListColumn'
import BadgeList from '../Components/BadgeList'
import Data from '../datas/data.json';

function Me() {
    const infos = [
        <p><FontAwesomeIcon className='icon_left' icon={faEnvelope} />shogo.620@gmail.com</p>,
        <a href={'https://github.com/akilasatolu'} target='_blank' rel='noopener'><p><FontAwesomeIcon className='icon_left' icon={faGithub} />akilasatolu<FontAwesomeIcon className='icon_right' icon={faArrowUpRightFromSquare} /></p></a>
    ];
    return (
        <div className='app_inner'>
            <Home />
            <section className='section'>
                <div className='section_title'><p>WHO I AM</p></div>
                <div className='section_body'>
                    <Text>{'I am akilasatolu, a front-end engineer with three and a half years of experience.\nI have successfully managed a large-scale portal site that attracts an average of 16 million unique users per week and have extensive experience in scratch development using JavaScript.\nI genuinely enjoy the time spent experimenting to achieve my goals.\nReflecting on how to express specifications through code and exploring various solutions to problems is what motivates me.\nMy strong sense of responsibility and proactive involvement in projects not only enhance the quality of deliverables but also contribute to building trust with clients.'}</Text>
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