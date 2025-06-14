import { cn } from '@/shared/lib/utils';
import { Button, buttonVariants } from '@/shared/ui';
import Link from 'next/link';
import { ComponentProps } from 'react';

type Props = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, 'size'> &
  ComponentProps<typeof Link>;

export default function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: Props) {
  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      data-slot='pagination-link'
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}
