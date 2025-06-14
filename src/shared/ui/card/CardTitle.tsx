import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'h3'>;

export default function CardTitle({ className, ...props }: Props) {
  return (
    <h3
      data-slot='card-title'
      className={cn('text-accent-secondary text-lg font-semibold', className)}
      {...props}
    />
  );
}
