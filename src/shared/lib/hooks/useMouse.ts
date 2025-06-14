'use client';

import { WithRequired } from '../types';
import { createOptions } from '../utils';
import { useEffect, useMemo, useState } from 'react';

type Options = {
  eventName?: 'mousemove' | 'pointermove';
};

const defaultOptions = {
  eventName: 'mousemove',
} as const;

export default function useMouse(options: Options = {}) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { eventName } = useMemo(
    () =>
      createOptions<WithRequired<Options, 'eventName'>>(
        defaultOptions,
        options,
      ),
    [options],
  );

  useEffect(() => {
    const handler = (e: MouseEvent | PointerEvent) => {
      setMouse({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener(eventName, handler);

    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, [eventName]);

  return mouse;
}
