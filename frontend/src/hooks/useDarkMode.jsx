import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useDarkMode = () => {
  const [theme, setTheme] = useState(Cookies.get('theme') || 'light');

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    Cookies.set('theme', theme);
  }, [theme]);

  return {
    theme,
    toggleDarkMode,
  };
};

export default useDarkMode;
