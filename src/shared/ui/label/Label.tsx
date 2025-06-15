'use client';

import { cn } from '@/shared/lib/utils';
import { Root as LabelRadixRoot } from '@radix-ui/react-label';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof LabelRadixRoot>;

export default function Label({ className, ...props }: Props) {
  return (
    <LabelRadixRoot
      data-slot='label'
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
