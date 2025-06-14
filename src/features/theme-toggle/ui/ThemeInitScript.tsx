import themeInitializer from '../lib/themeInit';

export default function ThemeInitScript() {
  const content = [themeInitializer]
    .map((initializer) => `(${initializer})();`)
    .reduce((acc, initializer) => `${acc}${initializer}`, '');

  return <script>{content}</script>;
}
