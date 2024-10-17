import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function ChangeLang() {
    const { i18n } = useTranslation();
    const [activeLang, setIsActive] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsActive(lng);
    };

    return (
    <div className='changeLang'>
        <button className={'changeLang_btn' + (activeLang==='en' ? ' changeLang_selected' : '')} onClick={() => changeLanguage('en')}>English</button>
        <button className={'changeLang_btn' + (activeLang==='ja' ? ' changeLang_selected' : '')} onClick={() => changeLanguage('ja')}>日本語</button>
        <button className={'changeLang_btn' + (activeLang==='kr' ? ' changeLang_selected' : '')} onClick={() => changeLanguage('kr')}>한국어</button>
    </div>
    );
}

export default ChangeLang;