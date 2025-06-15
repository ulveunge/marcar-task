'use client';

import { CarList } from '@/entities/car';
import { CarResponse } from '@/shared/lib/types';
import {
  CustomPagination,
  Label,
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
  const currentOrder = searchParams.get('_order') ?? 'default';
  const pathname = usePathname();

  const orderChangeHandler = (value: string) => {
    const urlParams = new URLSearchParams(searchParams);

    if (value === 'default') {
      urlParams.delete('_sort');
      urlParams.delete('_order');
    } else {
      urlParams.set('_sort', 'price');
      urlParams.set('_order', value);
    }

    router.push(`${pathname}?${urlParams.toString()}`);
  };

  return (
    <main className='px-layout'>
      <section>
        <div className='flex flex-col gap-2'>
          <Label className='w-fit' htmlFor='price-sort'>
            Сортировка по цене
          </Label>
          <Select
            defaultValue={currentOrder}
            onValueChange={orderChangeHandler}
          >
            <SelectTrigger id='price-sort' className='mb-8 w-[220px]'>
              <SelectValue placeholder='По-умолчанию' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='asc'>Сначала дешевые</SelectItem>
              <SelectItem value='desc'>Сначала дорогие</SelectItem>
              <SelectItem value='default'>По-умолчанию</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
