import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';

export interface Language {
  name: string;
  code: string;
}

const languages: Language[] = [
  { name: 'English', code: 'en' },
  { name: 'Deutsch', code: 'de' },
  { name: 'Türkçe', code: 'tr' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const selectedLanguage = languages.find(
    (lang) => lang.code === i18n.language
  ) || languages[0];

  const handleLanguageChange = (language: Language) => {
    i18n.changeLanguage(language.code);
  };

  return (
    <div className="flex align-items-center gap-2">
      <Dropdown
        value={selectedLanguage}
        options={languages}
        onChange={(e) => handleLanguageChange(e.value)}
        optionLabel="name"
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default LanguageSwitcher; 