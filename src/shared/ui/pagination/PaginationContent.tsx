import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'ul'>;

export default function PaginationContent({ className, ...props }: Props) {
  return (
    <ul
      data-slot='pagination-content'
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}
