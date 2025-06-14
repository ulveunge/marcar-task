import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import {
  Item as SelectRadixItem,
  ItemIndicator as SelectRadixItemIndicator,
  ItemText as SelectRadixItemText,
} from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixItem>;

export default function SelectItem({ className, children, ...props }: Props) {
  return (
    <SelectRadixItem
      data-slot='select-item'
      className={cn(
        "focus:bg-accent focus:text-contrast relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className='absolute right-2 flex size-3.5 items-center justify-center'>
        <SelectRadixItemIndicator>
          <Icon className='size-4' name='check' />
        </SelectRadixItemIndicator>
      </span>
      <SelectRadixItemText>{children}</SelectRadixItemText>
    </SelectRadixItem>
  );
}
