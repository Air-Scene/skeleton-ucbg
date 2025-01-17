import { useState, useEffect } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

const THEME_STORAGE_KEY = 'theme';
const THEME_LINK_ID = 'theme-css';

interface ThemeConfig {
  light: string;
  dark: string;
}

const THEMES: ThemeConfig = {
  light: 'lara-light-blue',
  dark: 'lara-dark-blue'
} as const;

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem(THEME_STORAGE_KEY) === 'dark');

  const updateThemeLinkToChangeModesInPrimeReact = (theme: string) => {
    const link = document.createElement('link');
    link.id = THEME_LINK_ID;
    link.rel = 'stylesheet';
    link.href = `/themes/${theme}/theme.css`;

    const existingLink = document.getElementById(THEME_LINK_ID);

    if (existingLink) {
      document.head.removeChild(existingLink);
    }

    document.head.appendChild(link);
  };

  const updateThemeClassToChangeModesInTailwind = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleThemeChange = (isDark: boolean) => {
    const theme = isDark ? THEMES.dark : THEMES.light;
    updateThemeLinkToChangeModesInPrimeReact(theme);
    updateThemeClassToChangeModesInTailwind(isDark);
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    handleThemeChange(isDark);
    return () => {
      const link = document.getElementById(THEME_LINK_ID);
      if (link?.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, [isDark]);

  return (
    <div className="flex items-center gap-2">
      <i className={`pi pi-sun ${isDark ? 'text-gray-400' : 'text-yellow-500'}`} />
      <InputSwitch
        checked={isDark}
        onChange={(e) => setIsDark(e.value)}
        aria-label="Toggle theme"
      />
      <i className={`pi pi-moon ${isDark ? 'text-blue-500' : 'text-gray-400'}`} />
    </div>
  );
};

export default ThemeToggle; 