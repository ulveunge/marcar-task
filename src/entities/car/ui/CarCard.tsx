'use client';

import { Car } from '@/shared/lib/types';
import { formatPrice } from '@/shared/lib/utils';
import {
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
} from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, PropsWithChildren } from 'react';

type Props = Omit<ComponentProps<typeof Card>, 'children'> & {
  data: Car;
};

const DescriptionItem = ({
  iconName,
  children,
}: PropsWithChildren & {
  iconName: TIconName;
}) => {
  return (
    <div className='flex gap-2'>
      <Icon name={iconName} />
      {children}
    </div>
  );
};

export default function CarCard({ data, ...props }: Props) {
  return (
    <Card {...props}>
      <CardHeader>
        <div className='relative mb-3 aspect-video overflow-hidden rounded-lg'>
          <Image
            className='rounded-[inherit] object-cover object-center transition-transform duration-700 group-hover:scale-110'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority
            src={data.images.image[0]}
            alt='title'
          />
        </div>
      </CardHeader>
      <CardBody>
        <CardTitle>
          <Link className='stretched-link link hover:link-active' href='#0'>
            {data.markId} {data.folderId}, {data.year}
          </Link>
        </CardTitle>
        <CardDescription>
          <p>
            <span className='font-semibold'>
              {formatPrice(data.price, { currency: data.currency })}
            </span>
          </p>
          <ul className='mt-4 flex flex-col gap-2 text-sm'>
            <li>
              <DescriptionItem iconName='hood-line'>
                {data.modificationId}
              </DescriptionItem>
            </li>
            <li className='flex gap-4'>
              <DescriptionItem iconName='road'>{data.run}</DescriptionItem>
              <DescriptionItem iconName='gearbox'>
                {data.gearbox}
              </DescriptionItem>
            </li>
            <li className='flex gap-4'>
              <DescriptionItem iconName='engine'>
                {data.engineType}
              </DescriptionItem>
              {!!data.drive && (
                <DescriptionItem iconName='wheel-angle-broken'>
                  {data.drive}
                </DescriptionItem>
              )}
            </li>
          </ul>
        </CardDescription>
      </CardBody>
      <CardFooter>
        <Button variant='accent' className='z-20'>
          Купить
        </Button>
        <div className='ml-auto flex gap-2'>
          {!!data?.extras && (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className='relative z-20'
                  variant='outline'
                  size='icon'
                  aria-label='Подробнее'
                >
                  <Icon className='size-4' name='info-circled' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='scrollbar-none w-[100%] max-w-[300px] p-0 text-wrap'>
                <ScrollShadow>
                  <div className='scrollbar-none h-[200px] p-4 text-pretty'>
                    {data.extras}
                  </div>
                </ScrollShadow>
              </PopoverContent>
            </Popover>
          )}

          <Button
            className='relative z-20'
            variant='outline'
            size='icon'
            aria-label='Добавить в избранное'
          >
            <Icon className='size-4' name='heart' />
          </Button>
          <Button
            className='relative z-20'
            variant='outline'
            size='icon'
            aria-label='Поделиться'
          >
            <Icon className='size-4' name='share-1' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
