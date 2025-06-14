import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { ScrollUpButton as SelectRadixScrollUpButton } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixScrollUpButton>;

export default function SelectScrollUpButton({ className, ...props }: Props) {
  return (
    <SelectRadixScrollUpButton
      data-slot='select-scroll-up-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <Icon className='size-4' name='chevron-up' />
    </SelectRadixScrollUpButton>
  );
}
