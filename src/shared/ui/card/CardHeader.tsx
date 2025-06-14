import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export default function CardHeader({ className, ...props }: Props) {
  return (
    <div
      data-slot='card-header'
      className={cn('not-last:mb-3', className)}
      {...props}
    />
  );
}
