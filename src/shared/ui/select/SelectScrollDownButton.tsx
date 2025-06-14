import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import { ScrollDownButton as SelectRadixScrollDownButton } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixScrollDownButton>;

export default function SelectScrollDownButton({ className, ...props }: Props) {
  return (
    <SelectRadixScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <Icon className='size-4' name='chevron-down' />
    </SelectRadixScrollDownButton>
  );
}
