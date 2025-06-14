import { ScrollShadowOptions } from '../scroll-shadow/ScrollShadow';
import { cn } from '@/shared/lib/utils';
import {
  ScrollShadow,
  SelectScrollDownButton,
  SelectScrollUpButton,
} from '@/shared/ui';
import {
  Portal as SelectRadixPortal,
  Content as SelectRadixContent,
  Viewport as SelectRadixViewport,
} from '@radix-ui/react-select';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof SelectRadixContent> & {
  scrollShadowOptions?:
    | ({ active: true } & Omit<
        ScrollShadowOptions,
        'initialPosition' | 'orientation'
      >)
    | { active: false };
};

export default function SelectContent({
  scrollShadowOptions = { active: false },
  className,
  children,
  position = 'popper',
  ...props
}: Props) {
  const viewport = (
    <SelectRadixViewport
      data-slot='radix-viewport-select'
      className={cn(
        'p-1',
        position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
      )}
    >
      {children}
    </SelectRadixViewport>
  );

  return (
    <SelectRadixPortal>
      <SelectRadixContent
        data-slot='select-content'
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 border-divider relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        {scrollShadowOptions.active ? (
          <ScrollShadow
            offset={scrollShadowOptions.offset}
            initialPosition='bottom'
            size={scrollShadowOptions.size}
          >
            {viewport}
          </ScrollShadow>
        ) : (
          viewport
        )}
        <SelectScrollDownButton />
      </SelectRadixContent>
    </SelectRadixPortal>
  );
}
