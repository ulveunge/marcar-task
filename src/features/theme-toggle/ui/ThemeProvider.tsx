'use client';

import { ThemeContext } from '@/shared/lib/context';
import cookies from 'js-cookie';
import { PropsWithChildren, useEffect, useState } from 'react';

export type Props = PropsWithChildren & {
  theme: TTheme;
};

export default function ThemeProvider({
  theme: initialTheme,
  children,
}: Props) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const handler = ({ detail: { theme } }: WindowEventMap['theme:change']) => {
      setTheme(theme);
      cookies.set('theme', theme, {
        expires: 31536000,
        path: '/',
        sameSite: 'Lax',
      });
    };

    window.addEventListener('theme:change', handler);

    return () => {
      window.removeEventListener('theme:change', handler);
    };
  }, []);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
