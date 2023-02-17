import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
import { eng } from './eng';
import { ua } from './ua';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: eng },
    ua: { translation: ua },
  },
  lng: 'ua',
  fallbackLng: 'eng',
  interpolation: { escapeValue: false },
});

export default i18n;
