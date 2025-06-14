import { Root as SelectRadixRoot } from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixRoot>;

export default function Select({ ...props }: Props) {
  return <SelectRadixRoot data-slot='select' {...props} />;
}
