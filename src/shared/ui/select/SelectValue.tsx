import { Value as SelectRadixValue } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixValue>;

export default function SelectValue({ ...props }: Props) {
  return <SelectRadixValue data-slot='select-value' {...props} />;
}
