import i18next from 'i18next';

i18next.init({
    fallbackLng: 'pt',
    resources: {
        pt: {
            translations: require('../locales/pt/messages.json')
        },
        en: {
            translations: require('../locales/en/messages.json')
        },
        es: {
            translations: require('../locales/es/messages.json')
        },
        fr: {
            translations: require('../locales/fr/messages.json')
        },
        it: {
            translations: require('../locales/it/messages.json')
        },
        de: {
            translations: require('../locales/de/messages.json')
        }
    },
    ns: ['messages'],
    defaultNS: 'messages',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['pt', 'en', 'fr', 'es', 'de', 'it'];

export default i18next;