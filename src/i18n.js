// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from './lang/ru.json';
import translationKK from './lang/kk.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translation: translationRU,
            },
            kk: {
                translation: translationKK,
            },
        },
        lng: "ru",
        fallbackLng: "ru",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
