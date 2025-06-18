export default function themeInit() {
  const getTheme = () => {
    const match = document.cookie.match(
      new RegExp('(^| )' + 'theme' + '=([^;]+)'),
    );
    if (match) {
      return match[2];
    }
    return null;
  };

  const setTheme = (theme: TTheme) => {
    document.cookie = `theme=${theme}; path=/; max-age=31536000; SameSite=Strict`;
  };

  const stored = getTheme();
  const matcher = window.matchMedia('(prefers-color-scheme: dark)');

  const getSystemTheme = (isDark: boolean) =>
    `${isDark ? 'dark' : 'light'}:system` as TTheme;

  if (!stored) {
    setTheme(getSystemTheme(matcher.matches));
  }

  document.documentElement.classList.toggle('dark', matcher.matches);

  matcher.addEventListener('change', (e) => {
    const currentStoredTheme = getTheme();

    if (currentStoredTheme && currentStoredTheme.includes('user')) return;

    const newSystemTheme = getSystemTheme(e.matches);
    document.documentElement.classList.toggle('dark', e.matches);
    setTheme(newSystemTheme);
    window.dispatchEvent(
      new CustomEvent('theme:change', {
        detail: { theme: newSystemTheme },
      }),
    );
  });
}
