import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useLanguageFromUrl = () => {
  const { i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const language = searchParams.get('language');

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return language;
}; 