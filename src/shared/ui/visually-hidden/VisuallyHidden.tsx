import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';

type Props = ComponentProps<'span'> & {
  asChild?: string;
  className?: string;
};

export default function VisuallyHidden({
  asChild,
  className,
  ...props
}: Props) {
  const Comp = asChild ? Slot : 'span';
  return <Comp className={cn('sr-only', className)} {...props} />;
}
