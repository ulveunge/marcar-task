'use client';

import { ThemeContext } from '../context';
import { useContext } from 'react';

const getThemeMatcher = () => {
  return window.matchMedia('(prefers-color-scheme: dark)');
};

export default function useTheme() {
  const theme = useContext(ThemeContext);

  const isDark = theme.includes('dark');

  const isSystem = theme.includes('system');

  const systemTheme = (
    typeof window !== 'undefined'
      ? getThemeMatcher().matches
        ? 'dark'
        : 'light'
      : theme.split(':')[0]
  ) as 'dark' | 'light';

  const changeTheme = (newTheme: 'light' | 'system' | 'dark') => {
    const themeValue = (
      newTheme === 'system'
        ? `${getThemeMatcher().matches ? 'dark' : 'light'}:system`
        : `${newTheme}:user`
    ) as TTheme;

    const isDark = themeValue.includes('dark');
    document.documentElement.classList.toggle('dark', isDark);

    window.dispatchEvent(
      new CustomEvent('theme:change', {
        detail: { theme: themeValue },
      }),
    );
  };

  return { theme, isDark, isSystem, systemTheme, changeTheme };
}
