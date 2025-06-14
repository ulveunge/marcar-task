import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'> & {
  name: TIconName;
  path?: string;
};

export default function Icon({
  name,
  path = 'icons.svg',
  className,
  ...props
}: Props) {
  const xlinkHref = `${path}#${name}`;

  return (
    <svg className={cn('size-5', className)} {...props}>
      <use xlinkHref={xlinkHref} />
    </svg>
  );
}
