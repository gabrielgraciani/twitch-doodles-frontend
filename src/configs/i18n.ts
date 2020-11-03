import i18next from 'i18next';
import XHR from 'i18next-xhr-backend';

import translation_br from '../translations/br/translation.json';
import translation_en from '../translations/en/translation.json';

const allowedLanguages = ['en', 'br'];

const defaultLng = 'br';
let lng = defaultLng;

const storageLanguage = localStorage.getItem('language');
if (storageLanguage && allowedLanguages.indexOf(storageLanguage) > -1) {
  lng = storageLanguage;
}

i18next.use(XHR).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng, // language to use
  resources: {
    en: {
      translation: translation_en, // 'translation' is our custom namespace
    },
    br: {
      translation: translation_br,
    },
  },
});

export default i18next;
