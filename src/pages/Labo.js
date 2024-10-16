import Text from '../Components/Text';
import Home from '../Components/LinkHome';
import Articles from '../Components/Articles';
import Data from '../datas/data.json';
import { useTranslation } from 'react-i18next';

function Labo() {
    const { t } = useTranslation();
    return (
        <div className='app_inner'>
            <Home />
            <section className='section'>
                <div className='section_body'>
                    <Text>{t('Labo')}</Text>
                    <Articles datas={Data.data.Labo} />
                </div>
            </section>
        </div>
    );
}

export default Labo;