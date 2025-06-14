'use client';

import { cn } from '@/shared/lib/utils';
import { ComponentProps, useEffect, useRef, memo } from 'react';

type Props = ComponentProps<'div'> & {
  wrapperClassName?: string;
};

export default memo(function Card({
  className,
  wrapperClassName,
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cardEl = ref.current;

    const handlder = () => {
      const { offsetLeft, offsetTop } = cardEl;

      cardEl.style.setProperty('--offset-l', `${offsetLeft}px`);
      cardEl.style.setProperty('--offset-t', `${offsetTop}px`);
    };

    const observer = new ResizeObserver(handlder);

    observer.observe(cardEl);

    return () => {
      observer.unobserve(cardEl);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-slot='card'
      className={cn(
        'bg-divider group before:card-gradient-border relative col-span-full flex flex-col overflow-hidden rounded-lg p-px before:absolute before:inset-0 before:bg-no-repeat',
        'col-span-full md:col-span-4 xl:col-span-3',
        wrapperClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          'bg-background z-10 flex h-full flex-col rounded-[inherit] p-4',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
});
