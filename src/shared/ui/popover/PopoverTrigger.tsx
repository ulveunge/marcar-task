import { Trigger as PopoverRadixTrigger } from '@radix-ui/react-popover';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof PopoverRadixTrigger>;

export default function Popover({ ...props }: Props) {
  return <PopoverRadixTrigger data-slot='popover-trigger' {...props} />;
}
