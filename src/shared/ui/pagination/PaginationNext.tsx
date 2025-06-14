import PaginationLink from './PaginationLink';
import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof PaginationLink>;

export default function PaginationNext({ className, ...props }: Props) {
  return (
    <PaginationLink
      aria-label='Перейти на следующую страницу'
      size='sm'
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className='hidden sm:block'>Следующая</span>
      <Icon name='chevron-right' />
    </PaginationLink>
  );
}
