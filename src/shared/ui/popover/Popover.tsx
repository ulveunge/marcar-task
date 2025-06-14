import { Root as PopoverRadixRoot } from '@radix-ui/react-popover';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof PopoverRadixRoot>;

export default function Popover({ ...props }: Props) {
  return <PopoverRadixRoot data-slot='popover' {...props} />;
}
