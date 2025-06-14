import { cn } from '@/shared/lib/utils';
import { Label as SelectRadixLabel } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixLabel>;

export default function SelectLabel({ className, ...props }: Props) {
  return (
    <SelectRadixLabel
      data-slot='select-label'
      className={cn('text-foreground-muted px-2 py-1.5 text-xs', className)}
      {...props}
    />
  );
}
