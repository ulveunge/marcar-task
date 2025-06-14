import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';

export default function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot='pagination-ellipsis'
      className={cn('flex size-6.5 items-center justify-center', className)}
      {...props}
    >
      <Icon name='dots-horizontal' />
      <span className='sr-only'>Ещё страницы</span>
    </span>
  );
}
