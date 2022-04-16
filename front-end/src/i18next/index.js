import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import ENUS from './Locales/en-us/en-us.json';
import PTBR from './Locales/pt-br/pt-br.json';


const resources = {
    'en': ENUS,
    'ptbr': PTBR,
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;