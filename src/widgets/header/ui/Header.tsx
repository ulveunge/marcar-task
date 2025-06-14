import { ThemeToggle } from '@/features/theme-toggle';
import { Logo } from '@/shared/ui';
import React from 'react';

export default function Header() {
  return (
    <header className='border-divider px-layout grid-layout bg-background sticky top-0 z-[9999] h-16 border-b'>
      <Logo className='col-span-1 md:col-span-2' />
      <div className='col-span-1 col-start-4 flex items-center justify-end md:col-start-8 lg:col-start-12'>
        <ThemeToggle />
      </div>
    </header>
  );
}
