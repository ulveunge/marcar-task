import { cn } from '@/shared/lib/utils';
import { Separator as SelectRadixSeparator } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixSeparator>;

export default function SelectSeparator({ className, ...props }: Props) {
  return (
    <SelectRadixSeparator
      data-slot='select-separator'
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}
