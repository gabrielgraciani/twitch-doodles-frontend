import i18next from 'i18next';

import translation_br from '../translations/br/translation.json';
import translation_en from '../translations/en/translation.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'br', // language to use
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
