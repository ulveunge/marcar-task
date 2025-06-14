import { cn } from '@/shared/lib/utils';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

export default function CardDescription({ className, ...props }: Props) {
  return (
    <div data-slot='card-description' className={cn(className)} {...props} />
  );
}
