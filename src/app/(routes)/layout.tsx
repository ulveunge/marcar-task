import '../styles/main.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'MarCar Task',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}
