'use client';

import { cn } from '@/shared/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import {
  ComponentProps,
  CSSProperties,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type ShadowPosition =
  | 'top'
  | 'bottom'
  | 'both-y'
  | 'left'
  | 'right'
  | 'both-x'
  | null;

export type ScrollShadowOptions = {
  offset?: number;
  orientation?: 'horizontal' | 'vertical';
  initialPosition?: ShadowPosition;
  size?: number;
};

type Props = ComponentProps<typeof Slot> &
  ScrollShadowOptions & {
    className?: string;
  };

const yPosMap = {
  start: 'top',
  end: 'bottom',
  both: 'both-y',
} as const;

const xPosMap = {
  start: 'left',
  end: 'right',
  both: 'both-x',
} as const;

const generateMaskImageMap = (size: number) => ({
  top: `linear-gradient(0deg, #000 calc(100% - ${size}px), transparent)`,
  bottom: `linear-gradient(180deg, #000 calc(100% - ${size}px), transparent)`,
  'both-y': `linear-gradient(#000, #000, transparent 0, #000 ${size}px, #000 calc(100% - ${size}px), transparent)`,
  left: `linear-gradient(270deg, #000 calc(100% - ${size}px), transparent)`,
  right: `linear-gradient(90deg, #000 calc(100% - ${size}px), transparent)`,
  'both-x': `linear-gradient(to right, #000, #000, transparent 0, #000 ${size}px, #000 calc(100% - ${size}px), transparent)`,
});

export default function ScrollShadow({
  offset = 0,
  orientation = 'vertical',
  initialPosition = null,
  size = 70,
  className,
  style,
  children,
  ...props
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const [shadowPosition, setShadowPosition] =
    useState<ShadowPosition>(initialPosition);

  const posMap = orientation === 'vertical' ? yPosMap : xPosMap;
  const maskImageMap = useMemo(() => generateMaskImageMap(size), [size]);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const container = ref.current;

    const handler = () => {
      const scrollLength =
        orientation === 'vertical'
          ? container.scrollHeight
          : container.scrollWidth;

      const containerSize =
        orientation === 'vertical'
          ? container.offsetHeight
          : container.offsetWidth;

      if (scrollLength === containerSize) return;

      const start = 0 + offset;
      const end = scrollLength - containerSize - offset;

      const axis =
        orientation === 'vertical' ? container.scrollTop : container.scrollLeft;

      switch (true) {
        case axis > start && axis < end:
          setShadowPosition(posMap['both']);
          break;
        case axis > start:
          setShadowPosition(posMap['start']);
          break;
        default:
          setShadowPosition(posMap['end']);
      }
    };

    const resizeObserver = new ResizeObserver(handler);

    container.addEventListener('scroll', handler, { passive: true });
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', handler);
      resizeObserver.unobserve(container);
    };
  }, [offset, orientation, posMap]);

  return (
    <Slot
      ref={ref}
      data-scroll-shadow-position={shadowPosition}
      className={cn(
        'overflow-auto',
        {
          'mask-[var(--shadow-position)]': !!shadowPosition,
        },
        className,
      )}
      style={
        {
          '--shadow-position': shadowPosition
            ? maskImageMap[shadowPosition]
            : 'none',
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </Slot>
  );
}
