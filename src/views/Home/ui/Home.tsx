'use client';

import { CarList } from '@/entities/car';
import { CarResponse } from '@/shared/lib/types';
import {
  CustomPagination,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type Props = {
  data: {
    cars: CarResponse;
  };
};

export default function Home({ data: { cars } }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentOrder = searchParams.get('_order');
  const defaultOrderValue =
    currentOrder === 'asc' || currentOrder === 'desc'
      ? currentOrder
      : undefined;
  const pathname = usePathname();

  const orderChangeHandler = (value: string) => {
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set('_sort', 'price');
    urlParams.set('_order', value);
    router.push(`${pathname}?${urlParams.toString()}`);
  };

  return (
    <main className='px-layout'>
      <section>
        <Select
          defaultValue={defaultOrderValue}
          onValueChange={orderChangeHandler}
        >
          <SelectTrigger className='mb-8 w-[220px]'>
            <SelectValue placeholder='Сортировка по цене' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='asc'>Сначала дешевые</SelectItem>
            <SelectItem value='desc'>Сначала дорогие</SelectItem>
          </SelectContent>
        </Select>
        <CarList data={cars.data} />
        <CustomPagination
          className='mt-8'
          currentPage={cars.meta.page}
          totalPages={cars.meta.lastPage}
        />
      </section>
    </main>
  );
}
