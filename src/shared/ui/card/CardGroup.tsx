'use client';

import { useMouse } from '@/shared/lib/hooks';
import { cn } from '@/shared/lib/utils';
import { ComponentProps, CSSProperties } from 'react';

type Props = ComponentProps<'div'>;

export default function CardGroup({ className, style, ...props }: Props) {
  const { x, y } = useMouse({ eventName: 'pointermove' });

  return (
    <div
      data-slot='card-group'
      className={cn(
        'grid-layout md:gap-y-layout col-span-full gap-y-4',
        className,
      )}
      style={
        {
          '--x': `${x}px`,
          '--y': `${y}px`,
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  );
}
