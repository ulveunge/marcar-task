import { ThemeToggle } from '@/features/theme-toggle';
import { Button, Logo } from '@/shared/ui';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='border-divider px-layout grid-layout bg-background sticky top-0 z-[9999] h-16 border-b'>
      <Logo className='col-span-1 md:col-span-2' />
      <div className='col-span-3 flex items-center justify-end gap-4 md:col-span-4 md:col-start-5 lg:col-start-9'>
        <Button size='sm' asChild>
          <Link
            className='self-center'
            href='https://t.me/eminisaev'
            target='_blank'
            rel='noopener noreferrer'
          >
            Написать мне
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
