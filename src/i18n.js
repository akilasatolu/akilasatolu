import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTl from './locales/en/translation.json';
import jaTl from './locales/ja/translation.json';
import krTl from './locales/kr/translation.json';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {translation: enTl},
        ja: {translation: jaTl},
        kr: {translation: krTl}
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;