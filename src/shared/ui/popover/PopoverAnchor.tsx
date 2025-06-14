import { Anchor as PopoverRadixAnchor } from '@radix-ui/react-popover';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof PopoverRadixAnchor>;

export default function Popover({ ...props }: Props) {
  return <PopoverRadixAnchor data-slot='popover-anchor' {...props} />;
}
