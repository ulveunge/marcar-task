'use client';

import { THEMES } from '../config/constants';
import { useTheme } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
import { Button, Icon, VisuallyHidden } from '@/shared/ui';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<'button'>, 'children'>;

export default function ThemeToggle({ className, ...props }: Props) {
  const { isDark, isSystem, systemTheme, changeTheme } = useTheme();

  const activeIndex = isSystem ? 1 : isDark ? 2 : 0;

  const indexDirection = systemTheme.includes('dark') ? -1 : 1;

  const toggleHandler = () => {
    const newThemeIndex = (activeIndex + indexDirection + 3) % 3;
    changeTheme(THEMES[newThemeIndex].name);
  };

  return (
    <Button
      className={cn('p-0', className)}
      variant='ghost'
      size='icon'
      onClick={toggleHandler}
      aria-label='Сменить тему'
      {...props}
    >
      <VisuallyHidden aria-live='polite'>
        Текущая тема: {THEMES[activeIndex].name}
      </VisuallyHidden>
      <span className='inline-flex size-7 overflow-hidden'>
        <span
          className='transition-transform'
          style={{
            transform: `translateX(${(activeIndex * -100) / THEMES.length}%)`,
          }}
        >
          <span className='inline-flex gap-2 p-1'>
            {THEMES.map((t) => (
              <Icon
                key={t.id}
                className='size-5'
                name={t.icon}
                aria-hidden={true}
              />
            ))}
          </span>
        </span>
      </span>
    </Button>
  );
}
