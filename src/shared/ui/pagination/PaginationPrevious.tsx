import PaginationLink from './PaginationLink';
import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof PaginationLink>;

export default function PaginationPrevious({ className, ...props }: Props) {
  return (
    <PaginationLink
      aria-label='Перейти на предыдущую страницу'
      size='sm'
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <Icon name='chevron-left' />
      <span className='hidden sm:block'>Предыдущая</span>
    </PaginationLink>
  );
}
