import i18next from 'i18next';

import common_br from '../translations/br/commom.json';
import common_en from '../translations/en/commom.json';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'br', // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    br: {
      common: common_br,
    },
  },
});

export default i18next;
