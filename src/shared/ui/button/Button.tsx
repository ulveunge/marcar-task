import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ComponentProps } from 'react';

export const buttonVariants = cva(
  'inline-flex cursor-pointer transition-all active:translate-y-px',
  {
    variants: {
      variant: {
        default: 'button-accent-secondary',
        accent: 'button-accent',
        destructive: 'button-destructive',
        outline: 'button-outline',
        ghost: 'button-ghost',
      },
      size: {
        default: 'rounded-xl px-4 py-1.5',
        sm: 'rounded-xl px-3 py-1.5 text-sm',
        lg: 'rounded-xl px-6 py-2',
        icon: 'inline-flex size-8 items-center justify-center rounded-lg p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: true;
  };

export default function Button({
  asChild,
  variant,
  size,
  className,
  ...props
}: Props) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
