import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export default function CardBody({ className, ...props }: Props) {
  return (
    <div
      data-slot='card-body'
      className={cn('flex flex-1 flex-col gap-1 not-last:mb-4', className)}
      {...props}
    />
  );
}
