import i18n from 'i18next';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import detectBrowserLanguage from 'detect-browser-language';

let browserLang: string = detectBrowserLanguage();
browserLang = browserLang.substr(0, browserLang.indexOf('-'));

i18n
    .use(backend)
    .use(initReactI18next)
    .init({
        lng: browserLang,
        backend: {
            // translation file path
            loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
        },
        fallbackLng: 'en',
        debug: true,
        // can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true
        }
    })

export default i18n