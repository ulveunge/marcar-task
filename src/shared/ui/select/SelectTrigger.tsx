import { cn } from '@/shared/lib/utils';
import { Icon } from '@/shared/ui';
import {
  Trigger as SelectRadixTrigger,
  Icon as SelectRadixIcon,
} from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixTrigger> & {
  size?: 'sm' | 'default';
};

export default function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: Props) {
  return (
    <SelectRadixTrigger
      data-slot='select-trigger'
      data-size={size}
      className={cn(
        "border-divider data-[placeholder]:text-foreground-muted [&_svg:not([class*='text-'])]:text-foreground-muted focus-visible:border-divider-secondary focus-visible:ring-divider-secondary/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit cursor-pointer items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectRadixIcon asChild>
        <Icon className='opacity-50' name='chevron-down' />
      </SelectRadixIcon>
    </SelectRadixTrigger>
  );
}
