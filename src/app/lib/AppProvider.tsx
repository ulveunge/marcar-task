import { ThemeProvider } from '@/features/theme-toggle';
import React, { ComponentProps, PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  Omit<ComponentProps<typeof ThemeProvider>, 'children'>;

export default function AppProvider({ theme, children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
