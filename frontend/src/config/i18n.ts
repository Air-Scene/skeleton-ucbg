import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Get the base URL for loading translations
const getBasePath = () => {
  // In development, use empty path
  if (import.meta.env.DEV) {
    return '';
  }
  // In production, use the repository name as base path
  return '/skeleton-ucbg';
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'de', 'tr'],
    
    interpolation: {
      escapeValue: false, // React already safes from xss
    },

    backend: {
      loadPath: `${getBasePath()}/locales/{{lng}}/{{ns}}.json`,
    },

    // Debug mode in development
    debug: import.meta.env.DEV,
  });

export default i18n; 