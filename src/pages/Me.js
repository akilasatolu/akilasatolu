import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import Data from '../datas/data.json';

function Me() {
  return (
    <div className='App-inner'>
      <Home />
      <div className='Section-title'><p>WHO I AM</p></div>
      <Text>{'I am akilasatolu, a front-end engineer with three and a half years of experience.\nI have successfully managed a large-scale portal site that attracts an average of 16 million unique users per week and have extensive experience in scratch development using JavaScript.\nI genuinely enjoy the time spent experimenting to achieve my goals.\nReflecting on how to express specifications through code and exploring various solutions to problems is what motivates me.\nMy strong sense of responsibility and proactive involvement in projects not only enhance the quality of deliverables but also contribute to building trust with clients.'}</Text>
      <div className='Section-title'><p>SKILLS</p></div>
      {(()=>{
        const data = Data.data.Skills;
        if(data.length===0) return;
        return (
          <ul className='Badge-list'>
            {
              data.map((d, i) => {
                return (
                  <li key={i} className='Badge-item'>{d}</li>
                );
              })
            }
          </ul>
        );
      })()}
      <div className='Section-title'><p>MORE ABOUT ME</p></div>
      <div className='Icon-left'>
      <FontAwesomeIcon icon={faEnvelope} />
      <p>shogo.620@gmail.com</p>
      </div>
      <a href={'https://github.com/akilasatolu'} className='Link-out' target='_black' rel='noopener'>
        <p className='Icon-left'><FontAwesomeIcon icon={faGithub} />{'akilasatolu'}<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='Link-icon' /></p>
      </a>
    </div>
  );
}

export default Me;