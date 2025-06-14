import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export default function CardFooter({ className, ...props }: Props) {
  return (
    <div
      data-slot='card-footer'
      className={cn('flex items-center', className)}
      {...props}
    />
  );
}
