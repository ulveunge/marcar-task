import '../styles/main.css';
import { AppProvider } from '@/app/lib';
import { ThemeInitScript } from '@/features/theme-toggle';
import { cn } from '@/shared/lib/utils';
import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'MarCar Task',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'light:system') as TTheme;

  return (
    <html
      className={cn({ dark: theme.includes('dark') })}
      lang='ru'
      suppressHydrationWarning
    >
      <head>
        <ThemeInitScript />
      </head>
      <body className={`${montserrat.variable}`}>
        <AppProvider theme={theme}>
          <Header />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
