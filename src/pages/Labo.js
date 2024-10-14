import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import Data from '../datas/data.json';
import Articles from '../Components/Articles';

function Labo() {
    return (
        <div className='app_inner'>
            <Home />
            <section className='section'>
                <div className='section_body'>
                    <Text>{'I am deeply curious about emerging technologies and continuously strive to enhance my knowledge.\nI translate this knowledge into actionable skills through coding and project development.\nHere, you can see some of the work that has resulted from my efforts.'}</Text>
                    <Articles datas={Data.data.Labo} />
                </div>
            </section>
        </div>
    );
}

export default Labo;