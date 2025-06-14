import { Group as SelectRadixGroup } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixGroup>;

export default function SelectGroup({ ...props }: Props) {
  return <SelectRadixGroup data-slot='select-group' {...props} />;
}
