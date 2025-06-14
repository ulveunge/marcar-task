import { ComponentProps } from 'react';

type Props = ComponentProps<'li'>;

export default function PaginationItem({ ...props }: Props) {
  return <li data-slot='pagination-item' {...props} />;
}
