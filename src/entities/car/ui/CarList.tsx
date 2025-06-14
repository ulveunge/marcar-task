'use client';

import CarCard from './CarCard';
import { Car } from '@/shared/lib/types';
import { CardGroup } from '@/shared/ui';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof CardGroup>, 'children'> & {
  data: Car[];
};

export default function CarList({ data, ...props }: Props) {
  return (
    <CardGroup {...props}>
      {data.map((car) => (
        <CarCard key={car.uniqueId} data={car} />
      ))}
    </CardGroup>
  );
}
