import { ICON_NAMES } from '../constants';

declare global {
  export type TIconName = (typeof ICON_NAMES)[number];

  export type TTheme =
    | 'light:user'
    | 'light:system'
    | 'dark:system'
    | 'dark:user';

  interface WindowEventMap {
    'theme:change': CustomEvent<{ theme: TTheme }>;
  }

  type PageParams = Promise<{ [key: string]: string | string[] | undefined }>;
}
